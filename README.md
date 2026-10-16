# Fouzan weds Hasna - Nikah Invitation

Static website (HTML + CSS + JS). No build step.

## Run in VS Code
1. Unzip and open the `nikah-invite` folder (File > Open Folder).
2. Install the "Live Server" extension, right-click `index.html` > "Open with Live Server".
   (Double-clicking `index.html` also works. Fonts need internet.)

## Where to edit
- Names, parents, venue, Maps link, texts: `index.html`
- Wedding date for the countdown: `js/script.js` (`new Date("2026-11-11T00:00:00+05:30")`)
- RSVP goes to WhatsApp: set your number at the top of `js/script.js` (`RSVP_WHATSAPP = "91XXXXXXXXXX"`)
- Colours: `:root` variables at the top of `css/style.css`
- Top-screen hands image: `images/hands.jpg` (animated; keep a white background so it blends with the paper card)
- Gallery photo: replace `images/couple.jpg` (same name, high-res portrait)
- Logo in the footer: `images/vgrid-logo.png`

## Deploy
Upload the whole folder to any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages).
