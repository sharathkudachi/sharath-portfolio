"""
Certificate PDF to PNG Converter
Place this in your project root and run: python convert_certificates.py
"""

from pathlib import Path
import subprocess
import sys

def convert_pdf_to_png_using_windows():
    """Try to convert PDFs using available Windows tools"""
    desktop_path = Path.home() / "Desktop"
    certs_path = Path(__file__).parent / "public" / "certificates"
    
    # Create certificates folder if it doesn't exist
    certs_path.mkdir(parents=True, exist_ok=True)
    
    print("Certificate Converter")
    print("=" * 50)
    print(f"Looking for PDFs in: {desktop_path}")
    print(f"Will save PNGs to: {certs_path}")
    print()
    
    # Search for PDFs that might be certificates
    pdfs_found = list(desktop_path.glob("*.pdf"))
    
    if not pdfs_found:
        print("❌ No PDF files found on Desktop")
        print("\nPlease save your certificate PDFs to your Desktop first, then run this script.")
        return
    
    print(f"Found {len(pdfs_found)} PDF file(s):")
    for i, pdf in enumerate(pdfs_found, 1):
        print(f"  {i}. {pdf.name}")
    
    print("\n" + "=" * 50)
    print("IMPORTANT: Install required dependencies:")
    print("  pip install pdf2image pillow")
    print("\nOn Windows, also download and install Poppler:")
    print("  https://github.com/oschwartz10612/poppler-windows/releases/")
    print("\nThen run this script again.")
    print("=" * 50)

if __name__ == "__main__":
    convert_pdf_to_png_using_windows()
