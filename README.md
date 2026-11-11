# DR Portfolio — Python edition

This Python app serves the exact same website files as the cinematic portfolio edition. Design, content, scroll-controlled padlock sequence, DR ChatBot and click sounds are preserved. Python runs the local server; HTML/CSS/JavaScript remain necessary for the browser interface. This is not a Python-only recreation of browser animations.

## Run

1. Install Python 3.10 or newer if needed.
2. Extract the entire ZIP.
3. Open a terminal in the folder containing app.py.
4. Run `python app.py` (on Windows, `py app.py` also works).
5. Open http://127.0.0.1:8000 in your browser.
6. Press Ctrl+C in the terminal to stop.

If port 8000 is occupied, run `python app.py --port 8080` and open http://127.0.0.1:8080.

No pip installation is needed. This server is for local preview. For public deployment, upload the website folder to a static host that supports your media sizes.

## Your files and settings

Put your images/video inside website/assets:

- DR-QynAcads-logo.png — business logo
- project-01.png through project-10.png — project pictures in website order
- credentials.png — credentials picture
- DRfypportal.png — FYP portal screenshot
- DRfypvideo.mp4 — FYP demonstration video

Edit website/config.js and replace `//enterhere//` with your complete business website URL. The optional images and FYP video have not been supplied; their slots are preserved. See website/SETUP.md for the full website guide and verification limits.

The Python HTTP server does not implement HTTP range requests. Large video seeking can therefore be limited during local preview. For reliable online streaming/seeking of the 715.60 MB video, use a media-capable host and set its URL in website/config.js.
