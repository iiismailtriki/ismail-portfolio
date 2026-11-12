"""Generate public/og.png (1200x630 social preview). Run from the repo root after `npm ci`:

    python3 scripts/make-og-image.py
"""
from PIL import Image, ImageDraw, ImageFilter, ImageFont

W, H = 1200, 630
BG, LINE = (10, 13, 18), (22, 30, 40)
CYAN, TEXT, MUTED, GREEN = (56, 189, 248), (232, 237, 243), (154, 168, 184), (52, 211, 153)
SERIF = 'node_modules/@fontsource/dm-serif-display/files/dm-serif-display-latin-400-normal.woff'
SERIF_I = 'node_modules/@fontsource/dm-serif-display/files/dm-serif-display-latin-400-italic.woff'
SANS = 'node_modules/@fontsource-variable/dm-sans/files/dm-sans-latin-wght-normal.woff2'
MONO = 'node_modules/@fontsource-variable/jetbrains-mono/files/jetbrains-mono-latin-wght-normal.woff2'

img = Image.new('RGB', (W, H), BG)
d = ImageDraw.Draw(img)
for x in range(0, W, 56):
    d.line([(x, 0), (x, H)], fill=LINE)
for y in range(0, H, 56):
    d.line([(0, y), (W, y)], fill=LINE)

glow = Image.new('RGB', (W, H), (0, 0, 0))
ImageDraw.Draw(glow).ellipse([700, 40, 1260, 640], fill=(14, 60, 84))
img = Image.blend(img, glow.filter(ImageFilter.GaussianBlur(120)), 0.55)
d = ImageDraw.Draw(img)

portrait = Image.open('src/assets/images/profile.png').convert('RGBA').resize((520, 520), Image.LANCZOS)
fade = Image.linear_gradient('L').resize((520, 520)).point(lambda v: 255 if v < 150 else max(0, 255 - (v - 150) * 2.4))
alpha = Image.composite(portrait.getchannel('A'), Image.new('L', (520, 520), 0), fade)
portrait.putalpha(alpha)
img.paste(portrait, (690, 110), portrait)

serif, serif_i = ImageFont.truetype(SERIF, 92), ImageFont.truetype(SERIF_I, 46)
sans, mono = ImageFont.truetype(SANS, 30), ImageFont.truetype(MONO, 22)

d.rounded_rectangle([72, 84, 452, 124], radius=20, outline=(28, 94, 76), fill=(12, 34, 30))
d.ellipse([92, 98, 104, 110], fill=GREEN)
d.text((116, 92), 'OPEN TO JUNIOR ROLES IN GERMANY', font=ImageFont.truetype(MONO, 17), fill=GREEN)
d.text((72, 160), 'Ismail Triki', font=serif, fill=TEXT)
d.text((72, 282), 'Cloud & DevSecOps Engineer', font=serif_i, fill=CYAN)
d.text((72, 350), 'Secure CI/CD · Kubernetes · Infrastructure as Code', font=sans, fill=MUTED)
badge = Image.open('src/assets/certifications/aws-solutions-architect-associate.png').convert('RGBA').resize((64, 64), Image.LANCZOS)
img.paste(badge, (72, 410), badge)
d.text((150, 418), 'AWS Certified Solutions Architect – Associate', font=ImageFont.truetype(SANS, 24), fill=TEXT)
d.text((150, 450), 'Verified on Credly', font=ImageFont.truetype(MONO, 17), fill=MUTED)
d.text((72, 520), 'Marburg, Germany', font=mono, fill=TEXT)
d.text((72, 556), 'iiismailtriki.github.io/ismail-portfolio', font=mono, fill=MUTED)

img.save('public/og.png', optimize=True)
print('wrote public/og.png')
