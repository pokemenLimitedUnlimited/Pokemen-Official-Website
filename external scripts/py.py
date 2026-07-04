import os
from PIL import Image

# --- CONFIG ---
TARGET_WIDTH = 1086
TARGET_HEIGHT = 1448
DIR = r"C:\Users\issac\Desktop\HTML + CSS\assets\Pokémen"   # your folder

# --- SCRIPT ---
for filename in os.listdir(DIR):
    if filename.lower().endswith((".jpg", ".jpeg", ".png")):
        path = os.path.join(DIR, filename)
        img = Image.open(path)

        resized = img.resize((TARGET_WIDTH, TARGET_HEIGHT))
        resized.save(path)

        print(f"Resized: {filename} → {TARGET_WIDTH}x{TARGET_HEIGHT}px")
