from pathlib import Path

from PIL import Image, ImageOps, PngImagePlugin


SOURCE = Path(r"C:\Users\Administrator\Desktop\作品集")
DESTINATION = Path(__file__).resolve().parents[1] / "public" / "works" / "travel-series"
PngImagePlugin.MAX_TEXT_CHUNK = 128 * 1024 * 1024
PngImagePlugin.MAX_TEXT_MEMORY = 256 * 1024 * 1024

FILES = [
    ("端午_看图王.png", "01-dragon-boat.webp"),
    ("长图+时间-2_看图王.png", "02-national-day.webp"),
    ("雪域尊享_看图王.png", "03-dalian.webp"),
    ("大美青海_看图王.png", "04-qinghai.webp"),
    ("西安6_看图王.png", "05-xian.webp"),
    ("西北21_看图王.png", "06-northwest.webp"),
    ("端午活动详情图_看图王.png", "07-northwest-detail.webp"),
    ("大漠胡杨_看图王.png", "08-populus.webp"),
    ("日常活动详情图_看图王.png", "09-northwest-daily.webp"),
    ("2_看图王.png", "10-northwest-thanks.webp"),
    ("相约三亚_1_看图王.png", "11-sanya-detail.webp"),
    ("连线_看图王.png", "12-new-year.webp"),
    ("藏地秘语_看图王.png", "13-tibet.webp"),
    ("雪域传奇_1_看图王.png", "14-snow.webp"),
    ("13-14你好雪乡 _看图王.png", "15-snow-detail.webp"),
    ("0608-HYX-西北大咖秀_看图王.png", "16-northwest-summer.webp"),
]


DESTINATION.mkdir(parents=True, exist_ok=True)

for source_name, destination_name in FILES:
    source_path = SOURCE / source_name
    destination_path = DESTINATION / destination_name
    with Image.open(source_path) as opened:
        image = ImageOps.exif_transpose(opened).convert("RGB")
        if image.width > 1600:
            target_height = round(image.height * 1600 / image.width)
            image = image.resize((1600, target_height), Image.Resampling.LANCZOS)
        image.save(destination_path, "WEBP", quality=84, method=6)
        print(f"{destination_name}: {image.width}x{image.height} ({destination_path.stat().st_size} bytes)")
