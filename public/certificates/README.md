# Certificate Images

Add your certificate images to this folder with the following filenames:

## Required Files

1. **PCAP-Certificate.png** - PCAP: Programming Essentials in Python certificate
2. **hackathon-certificate.png** - InCSEption Hackathon certificate

## How to Add Certificate Images

### Option 1: Convert PDF to PNG (Recommended)
If you have PDF certificates:

**Using Online Tools:**
1. Go to https://pdf2png.com/ or https://cloudconvert.com/
2. Upload your PDF certificate
3. Select PNG format
4. Download the converted image
5. Rename it according to the filenames above
6. Place it in this folder

**Using Windows Screenshot:**
1. Open the PDF certificate in your browser or PDF viewer
2. Take a screenshot of the certificate
3. Use Paint or similar to save as PNG
4. Rename to the filename above
5. Place in this folder

### Option 2: Manual Conversion (Advanced)
**Using Python:**
```python
from pdf2image import convert_from_path

# Install pdf2image first: pip install pdf2image
images = convert_from_path("your_certificate.pdf")
images[0].save('PCAP-Certificate.png', 'PNG')
```

## Image Requirements
- Format: PNG, JPG, or JPEG
- Recommended width: 500-800px
- Recommended height: 600-800px
- File size: Keep under 2MB for optimal loading

## File Structure
```
public/
└── certificates/
    ├── PCAP-Certificate.png
    ├── hackathon-certificate.png
    └── README.md (this file)
```

Once you add the images, refresh your browser to see them displayed in the certificates section!
