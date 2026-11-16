"""Produce the two site photos from the originals.

  python3 scripts/process-photos.py <headshot.png> <mountain.jpg>

portrait.png  greyscale cut-out of the headshot (needs `pip install rembg onnxruntime`)
field.jpg     mountain photo, greyscale except the red jacket, bystanders cropped out
"""
import sys
import numpy as np
from PIL import Image, ImageOps, ImageFilter

head_src, field_src = sys.argv[1], sys.argv[2]
out = "src/assets"

# ---- portrait -------------------------------------------------------------
from rembg import remove, new_session

im = Image.open(head_src).convert("RGB")
cut = remove(im, session=new_session("isnet-general-use"))
alpha = cut.split()[3]
# pull the matte in by a pixel and soften it so no studio-grey halo survives
alpha = alpha.filter(ImageFilter.MinFilter(3)).filter(ImageFilter.GaussianBlur(0.8))
grey = ImageOps.autocontrast(ImageOps.grayscale(im), cutoff=(0.5, 0.2))
Image.merge("LA", (grey, alpha)).save(f"{out}/portrait.png", optimize=True)

# ---- field ----------------------------------------------------------------
m = ImageOps.exif_transpose(Image.open(field_src)).convert("RGB")
w, h = m.size
m = m.crop((int(w * 0.115), 0, w, h))            # drop the people bottom-left
m.thumbnail((2800, 2800), Image.LANCZOS)
a = np.asarray(m).astype(np.float32)
r, g, b = a[..., 0], a[..., 1], a[..., 2]
lum = 0.299 * r + 0.587 * g + 0.114 * b
# how red is each pixel: 0 = not at all, 1 = jacket
red = np.clip((r - np.maximum(g, b) * 1.9) / 60.0, 0, 1)
red = np.asarray(Image.fromarray((red * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(1.2))).astype(np.float32) / 255
red = red[..., None]
grey = np.repeat(lum[..., None], 3, axis=2)
# lift the jacket toward the site's red so photo and page share one accent
jacket = np.stack([np.clip(r * 1.32, 0, 255), g * 1.5 + 14, b * 1.1 + 8], axis=2)
res = grey * (1 - red) + jacket * red
Image.fromarray(np.clip(res, 0, 255).astype(np.uint8)).save(f"{out}/field.jpg", quality=84, optimize=True, progressive=True)
print("done")
