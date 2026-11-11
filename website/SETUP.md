# Portfolio setup — FYP and DR QynAcads edition

## Open the website
Extract the ZIP and open index.html, or use VS Code Live Server. Upload all website files and the assets folder to your chosen static host when ready. No build or package installation is needed.

## Add your files
Put these exact filenames inside the assets folder:

1. DRfypvideo.mp4 — your 715.60 MB FYP explanation and demonstration video.
2. DRfypportal.png — your FYP portal screenshot (PNG).

The video is not included in this ZIP because it has not been supplied. The portal screenshot is also awaiting your file. No extra portal pictures are required. Use a clear desktop screenshot with readable text; remove private student/customer data before sharing it. A wide screenshot works best and will display at its natural proportions.

The website displays a preview placeholder until the screenshot is added. Video controls include play/pause, volume, seeking and browser-provided fullscreen. It uses preload="none" to avoid downloading the large video on page load. Video format compatibility depends on its encoding; MP4 with H.264 video and AAC audio is widely supported. Actual video playback must be tested after adding your file.

A 715.60 MB video may exceed the per-file limit of your chosen website host or repository upload method. If upload is rejected, put the video on a video-capable host or object storage that supports HTTPS media delivery and seeking, then replace fypVideo in config.js with its direct media URL. Keep the filename unchanged for local playback. Do not split the MP4 into arbitrary parts.

## Set the DR QynAcads website link
Open config.js and replace exactly:

businessWebsite: "//enterhere//"

with:

businessWebsite: "https://your-real-website-address.com"

Keep the quotation marks. The button stays hidden while the placeholder remains; visitors see “website link coming soon” instead of a broken link. Only HTTP/HTTPS URLs are accepted. Update the short business introduction in index.html with your confirmed services, audience and business description. No detailed business offering was supplied, so those details have not been invented.

## Controls
- Every activated button/link/disclosure plays short synthetic water droplets. Click water: off mutes them.
- Water: on/off controls separate continuous synthetic water ambience.
- The volume slider adjusts water audio levels. Browser/device settings may also affect sound.
- The theme button switches the full website between dark and light.
- The hamburger menu contains FYP demonstration and DR QynAcads sections.
- Move the pointer or swipe across the portrait to tilt it; keyboard users can focus it and use arrow keys. Escape resets tilt.
- Drag BYTE to reposition it. Ask about FYP, DR QynAcads, projects, skills, experience, education and contact details.
- BYTE is a local guide with illustrative learning steps, not a live generative AI service.

## Source and content
index.html contains the CV, projects, educational articles, FYP section and business introduction. style.css and upgrade.css control the design. app.js and upgrade.js control the interactions. config.js holds the business URL and media paths.

The GitHub section, repository loading and related assistant topic have been removed. Professional references are removed from the webpage. The original supplied resume.pdf is preserved unchanged and still contains its references. Replace that PDF yourself if you also want them removed from the downloadable CV.

## Verification
JavaScript syntax, base theme/menu/FAQ logic, ten project entries, three articles, navigation anchors and available asset paths were checked. Missing FYP media are intentional and documented above. Browser preview was unavailable: visual rendering, sound, touch gestures and actual video playback remain unverified. Test those after adding your media, including on a phone.

## Rights
Portrait, CV and theme pictures were supplied by the user. Other code/design assets were created for this portfolio.

## Latest edition: founder profile and DR ChatBot
Continuous water ambience is removed. Only click droplets remain, with mute and volume controls. The top introduction includes Download CV and Let’s connect. The journal is replaced by Quotes. Technical Arsenal categories reveal their skill lists on mouse hover, click, keyboard activation or touch. Click pins a category open. Decorative 3D-style cube/orbit motion respects reduced-motion preferences.

DR ChatBot is a draggable full-body CSS robot. Say Hi for a greeting; ask Contact for phone, email and LinkedIn; ask How do I use this website for numbered steps. It also covers the business, FYP, CV, skills, education and experience. It is a local guide, not a live AI service. Suggested technical workflows remain illustrative.

The business objective is draft copy: make technology knowledge accessible through practical learning and useful digital solutions. Confirm or edit it to match your actual offering. The Visit DR QYNACADS button works now by showing a launch message; replacing //enterhere// in config.js makes it open your website.

### Picture filenames — place these in assets
- project-01.png — Secure Office Network
- project-02.png — IoT Smart Hospital Bed Monitoring
- project-03.png — WLAN Vulnerabilities
- project-04.png — Network Design and Configuration
- project-05.png — Linux Attack Simulation and Mitigation
- project-06.png — MITRE ATT&CK Framework
- project-07.png — Procurement Order Tracking System
- project-08.png — Credit Risk Classification
- project-09.png — Logistics Order Management System
- project-10.png — Game and Quiz System
- credentials.png — professional credentials/certificates image
- DRfypportal.png — FYP portal screenshot
- DRfypvideo.mp4 — FYP explanation and demonstration

Missing images show reserved preview areas; they are not included until you supply them. All filenames are case-sensitive on many hosts. New source files final.css and chatbot.js must be uploaded with the rest. Keep original image files free of private data.

Latest verification: JavaScript syntax and static checks passed for continuous-audio removal, retained click audio, ten project entries and the business control. Browser rendering, actual click audio, hover/touch interactions and DR ChatBot responses still require browser verification.

## Cinematic edition — latest changes
The old three-part values strip and its box are removed. DR QYNACADS is now before Experience. Add your logo as assets/DR-QynAcads-logo.png. Four quotes have neon hover and keyboard-focus effects; motto captions are removed. DR replaces DJ in the website branding, the phone is +60165777239, and the audio control is labelled Click sound. Light mode is now a muted blue-grey theme so the background stays visible.

### Genuine scroll-controlled frame sequence
cinematic.js draws real pre-rendered WebP frames onto a full-screen canvas, mapped to scroll position. Downward scrolling advances the sequence; upward scrolling reverses it; stopping scrolling holds the frame. The desktop timeline maps 160 frames onto 20 seconds over approximately 1.7 viewport heights of scrolling. This is a rendered 2D/composited image sequence with camera zoom, moving data signals, particles and glow, using the supplied padlock artwork. It is not a newly generated ultra-realistic 3D video or a 20-second MP4. Full-HD frame dimensions are 1920×1080; original artwork resolution limits source detail. All frames are included in assets/cinematic and must be uploaded.

Only nearby frames are requested and kept in the in-memory cache. Mobile widths of 700px or less and reduced-motion preferences use frame 0. The original image provides a fallback while frames load. The desktop image sequence totals roughly 22 MB, but it is not downloaded all at once. User scrolling and network speed affect frame availability; test on the final host.

Section entrances use offsets, staggered delays and transforms. The neon cursor and portrait parallax operate on mouse input; coarse pointers keep standard touch interactions. Reduced-motion disables decorative entrance and parallax effects. Add cinematic.css and cinematic.js when deploying.

Checks passed: complete 160-frame sequence, scroll-forward/reverse frame selection in a mocked environment, branding/phone replacement, business section order, four quotes, unique IDs and navigation anchors. One generated frame was visually inspected. Live browser visual, audio and device interaction QA remains unverified because preview access was unavailable.


## Animated glass dashboard edition
Lab now includes project-category and technical-breadth charts. The project mix is 5 security/infrastructure projects, 4 software/IoT projects and 1 data analysis project. Counts represent editorial grouping of the supplied CV, not proficiency or live telemetry. Skill counts are 10 programming languages, 5 security tools/frameworks, 4 database/development tools and 3 web technologies. Charts reveal on entry with gently moving highlights. Background circuit nodes pulse slowly, with holographic ring and scan effects. Motion: off pauses decorative motion; reduced-motion preferences are respected. Interface sound is now a quiet 70-millisecond sine click, with mute and volume controls. Include motion.js and motion.css when deploying. Python serves the same browser-driven motions. Browser visual/audio checks remain unverified.


## Transparent background revision
transparency.css reduces dark/light wallpaper overlay opacity and glass-panel opacity. The wallpaper itself remains intact. Include transparency.css when deploying. Navigation and chatbot keep stronger backing for readability.
