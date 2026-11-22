import os, re, glob
from email.utils import format_datetime
from datetime import datetime, timezone

ART_DIR = "src/routes/article"
OUT = "public/rss.xml"
SITE = "https://indigenousbeacon.com"

def esc(t):
    return (t.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
             .replace('"', "&quot;"))

WITHDRAWN = {"data-centers-tribal-lands", "native-representation-in-tech", "tribal-broadband-access", "meet-the-makers-sarah-ortegon"}

items = []
for path in glob.glob(os.path.join(ART_DIR, "*.tsx")):
    slug = os.path.basename(path)[:-4]
    if slug in WITHDRAWN:
        continue
    src = open(path, encoding="utf-8").read()

    m = re.search(r'name: "og:title",\s*\n\s*content:\s*\n?\s*"((?:[^"\\]|\\.)*)"', src)
    if not m:
        m = re.search(r'name: "og:title",\s*content:\s*"([^"]*)"', src)
    title = m.group(1).replace('\\"', '"') if m else slug.replace("-", " ").title()

    m = re.search(r'name: "description",\s*\n\s*content:\s*\n?\s*"((?:[^"\\]|\\.)*)"', src)
    if not m:
        m = re.search(r'name: "description",\s*content:\s*"([^"]*)"', src)
    desc = m.group(1).replace('\\"', '"') if m else ""

    m = re.search(r'datePublished\\?":\s*\\?"([0-9]{4}-[0-9]{2}-[0-9]{2})', src)
    date = m.group(1) if m else "2026-01-01"

    dt = datetime.strptime(date, "%Y-%m-%d").replace(tzinfo=timezone.utc)
    items.append((dt, title, desc, slug))

items.sort(key=lambda r: r[0], reverse=True)

now = datetime.now(timezone.utc)
parts = ['<?xml version="1.0" encoding="UTF-8"?>',
         '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
         '  <channel>',
         f'    <title>The Indigenous Beacon</title>',
         f'    <link>{SITE}</link>',
         '    <description>Native-led journalism on Native American history, sovereignty, culture and contemporary life.</description>',
         '    <language>en-us</language>',
         f'    <lastBuildDate>{format_datetime(now)}</lastBuildDate>',
         f'    <atom:link href="{SITE}/rss.xml" rel="self" type="application/rss+xml" />']

for dt, title, desc, slug in items:
    url = f"{SITE}/article/{slug}"
    parts += ['    <item>',
              f'      <title>{esc(title)}</title>',
              f'      <link>{url}</link>',
              f'      <guid isPermaLink="true">{url}</guid>',
              f'      <description>{esc(desc)}</description>',
              f'      <pubDate>{format_datetime(dt)}</pubDate>',
              '    </item>']

parts += ['  </channel>', '</rss>', '']
open(OUT, "w", encoding="utf-8").write("\n".join(parts))
print("wrote", OUT, "items:", len(items))
for dt, t, d, s in items:
    print(dt.date(), "|", t[:60])
