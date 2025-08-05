#!/bin/bash

# Loop through all PNG files in the current directory
for file in *.png; do
  # Convert each file to WebP format
  ffmpeg -i "$file" -c:v libwebp -lossless 1 "${file%.png}.webp"
  echo "Converted $file to ${file%.png}.webp"
done
