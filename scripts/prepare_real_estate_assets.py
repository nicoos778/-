from pathlib import Path

from PIL import Image


SOURCE_DIR = Path(r"C:\Users\Administrator\Desktop\2022")
OUTPUT_DIR = Path(__file__).resolve().parents[1] / "public" / "works" / "real-estate"
SOURCE_FILES = [
    "平面设计作品集-许启征(1)_21.png",
    "平面设计作品集-许启征(1)_22.png",
    "平面设计作品集-许启征(1)_24.png",
    "平面设计作品集-许启征(1)_23.png",
    "平面设计作品集-许启征(1)_25.png",
    "平面设计作品集-许启征(1)_26.png",
    "平面设计作品集-许启征(1)_17.png",
    "平面设计作品集-许启征(1)_18.png",
    "平面设计作品集-许启征(1)_19.png",
    "平面设计作品集-许启征(1)_20.png",
]


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    for index, filename in enumerate(SOURCE_FILES, start=1):
        source = SOURCE_DIR / filename
        target = OUTPUT_DIR / f"{index:02d}.webp"

        with Image.open(source) as image:
            image = image.convert("RGB")
            # Remove the portfolio-template header (including the embedded year)
            # while preserving the original files on the desktop.
            image = image.crop((0, 760, image.width, image.height))
            if image.width > 2000:
                height = round(image.height * 2000 / image.width)
                image = image.resize((2000, height), Image.Resampling.LANCZOS)
            image.save(target, "WEBP", quality=84, method=6)

        print(f"{source.name} -> {target.name}")


if __name__ == "__main__":
    main()
