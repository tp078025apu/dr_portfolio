"""Run Dharinhy Jeevan's portfolio using Python's standard library.

Usage: python app.py
       python app.py --port 8080
No third-party packages are required.
"""

from __future__ import annotations

import argparse
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


WEBSITE_DIRECTORY = Path(__file__).resolve().parent / "website"


class PortfolioHandler(SimpleHTTPRequestHandler):
    """Serve the original interface and assets without modifying them."""

    extensions_map = {
        **SimpleHTTPRequestHandler.extensions_map,
        ".js": "text/javascript; charset=utf-8",
        ".css": "text/css; charset=utf-8",
        ".webp": "image/webp",
        ".svg": "image/svg+xml",
        ".mp4": "video/mp4",
        ".pdf": "application/pdf",
    }

    def list_directory(self, path):
        self.send_error(404, "Page not found")
        return None

    def end_headers(self):
        self.send_header("X-Content-Type-Options", "nosniff")
        super().end_headers()


def create_server(port: int = 8000) -> ThreadingHTTPServer:
    if not (WEBSITE_DIRECTORY / "index.html").is_file():
        raise FileNotFoundError("The website folder must be beside app.py.")
    handler = partial(PortfolioHandler, directory=str(WEBSITE_DIRECTORY))
    server = ThreadingHTTPServer(("127.0.0.1", port), handler)
    server.daemon_threads = True
    return server


def main() -> None:
    parser = argparse.ArgumentParser(description="Run the DR portfolio locally.")
    parser.add_argument("--port", type=int, default=8000)
    args = parser.parse_args()
    if not 1 <= args.port <= 65535:
        parser.error("Port must be between 1 and 65535.")
    try:
        server = create_server(args.port)
    except (OSError, FileNotFoundError) as error:
        parser.exit(1, f"Could not start the portfolio: {error}\n")
    print(f"Open http://127.0.0.1:{server.server_port} in your browser.")
    print("Press Ctrl+C to stop.")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nPortfolio stopped.")
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
