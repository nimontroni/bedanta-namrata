# বেদান্ত আৰু নম্ৰতাৰ শুভ বিবাহ
## Bedanta Saikia & Namrata Saikia — Assamese Digital Wedding Invitation

A production-ready, interactive Assamese digital wedding invitation website created for **বেদান্ত শইকীয়া (Bedanta Saikia)** and **নম্ৰতা শইকীয়া (Namrata Saikia)**.

This website combines the **envelope-opening experience, wax seal animation, and relationship storytelling from Reference Project 1** with the **Assamese cultural identity, traditional motifs, typography, and interactive wedding rituals from Reference Project 2**.

---

## 🌟 Key Features & Cultural Elements

### 1. Assamese Cultural Heritage & Identity
- **Authentic Assamese Typography:** Custom sacred calligraphy using **Teesta** (`॥ শ্ৰী শ্ৰী প্ৰজাপতয়ে নমঃ ॥`), regal title typography using **Rangpur**, and fallback to Noto Serif Bengali / Vrinda with strict Assamese Unicode (`ৰ`, `ৱ`, `ক্ষ`, etc.).
- **Traditional Motifs & Assets:** Assamese Gamusa patterns, Jaapi emblems, Xorai sacred vessels, Kingkhap golden woven borders, Kolpaat banana-leaf motifs, and Kopou orchid / marigold florals.
- **Royal Assamese Palette:** Authentic Muga silk gold (`#c59b27`), Sindoor crimson (`#a81c1c`), Paat Kapur warm ivory (`#fffdf9`), and royal Ahom maroon (`#3d0711`).

### 2. Envelope Opening Experience (Project 1 Integration)
- Fullscreen opening screen with 3D envelope perspective.
- Gamusa-inspired backing with ambient golden glow.
- Royal golden wax seal medallion embossed with couple monogram (`B & N`).
- Prominent **"Open Invitation" (নিমন্ত্ৰণ-পত্ৰ খোলক)** button.
- Smooth flap opening animation revealing the invitation card sliding upward.
- Background **Assamese Biyanaam** audio stream with graceful fade-in triggered by the opening click (respecting modern browser autoplay restrictions).
- Floating music toggle widget with rotating notes animation.

### 3. আমাৰ কাহিনী / স্মৃতিৰ এমুঠি — Alternating Story Timeline
- Rich relationship timeline alternating between photographs and storytelling cards with a central golden spindle line and heart medallions.
- **Milestone #1: The Facebook Connection:** Highlights *"Facebook-ৰ জৰিয়তে আমাৰ প্ৰথম চিনাকি হৈছিল"* with a distinctive Facebook connection badge and illustration.
- Sequential milestones:
  1. **প্ৰথম চিনাকি** (The First Connection via Facebook)
  2. **কথা-বতৰাৰ আৰম্ভণি** (Getting to Know Each Other)
  3. **বন্ধুত্বৰ পৰা আপোনত্বলৈ** (From Screen to Reality / First Meet)
  4. **বিশেষ মুহূৰ্তবোৰ** (Falling in Love / Tender Moments)
  5. **চিৰদিনৰ প্ৰতিশ্ৰুতি** (A Lifetime Promise & Proposal)
  6. **চিৰন্তন মিলন** (From 'Us' to 'Forever' / Sacred Union)

### 4. Interactive Cultural Rituals (Project 2 Integration)
- **Assamese Mangal Saki Ceremony:** Interactive traditional earthen lamp. Touch to kindle the glowing flame, trigger a pure harmonic auspicious chime, and launch a celebratory Kopou petal burst.
- **Golden Muga Silk Scratch-to-Reveal Date Card:** Touch and mouse scratching across traditional woven Muga silk canvas to uncover the sacred wedding date (`১১ ফাগুণ, ২০২৭ / 24th February, 2027`). Auto-reveals when 38% cleared.
- **Floating Kopou Orchid & Marigold Petals:** 60fps canvas particle physics with toggle control.
- **Wedding Countdown:** Dual-language countdown timer rendering real-time days, hours, minutes, and seconds in Assamese numerals (`০, ১, ২, ৩, ৪, ৫, ৬, ৭, ৮, ৯`) or English digits.

### 5. Ceremonies, Gallery & Location
- **Ceremony Cards:** Individual event cards for **জোৰোণ (Jurun)**, **শুভ বিবাহ (Sacred Wedding)**, and **অভ্যৰ্থনা (Reception)** with "Add to Google Calendar" and Google Maps navigation.
- **Photo Gallery:** Responsive image grid with full-screen lightbox modal, previous/next controls, keyboard navigation, and touch swipe gestures.
- **Venue & Location:** Complete venue address, contact numbers, direct Google Maps link, and location QR code.
- **Guest Wishes:** Instant guestbook with localStorage persistence, confirmation feedback, and mobile-friendly WhatsApp invitation sharing.

---

## 📂 Project Structure

```
├── index.html              # Main wedding invitation entry point
├── data/
│   ├── content.json        # Editable website content in clean JSON format
│   └── content-fallback.js # Embedded fallback ensuring offline/file:// protocol support
├── assets/
│   ├── fonts/              # Rangpur.ttf, Teesta.ttf
│   ├── audio/              # Biyanaam.mp3, theme2_alokhua.mp3
│   └── images/
│       ├── branding/       # Xorai, Jaapi, Gamusa, Kingkhap, Saki, Flowers
│       ├── couple/         # Traditional couple portraits and illustrations
│       ├── story/          # Timeline milestone artwork (Facebook connection, etc.)
│       ├── gallery/        # High-resolution gallery photographs
│       └── venue/          # Venue photos and location QR code
├── css/
│   ├── base.css            # Typography, CSS variables, resets, Assamese tokens
│   ├── envelope.css        # 3D flap animation, wax seal, Gamusa backdrop
│   ├── components.css      # Hero, couple cards, story timeline, ceremonies, gallery, venue
│   ├── interactive.css     # Mangal Saki, Muga scratch-off card, audio widget
│   └── responsive.css      # Mobile-first responsiveness, tablet, desktop & reduced motion
├── js/
│   ├── content-loader.js   # Fetches content.json with offline safety fallback
│   ├── envelope.js         # 3D envelope opening transition & audio trigger
│   ├── countdown.js        # Assamese & English numeral countdown timer
│   ├── saki.js             # Interactive earthen lamp lighting & chime synthesis
│   ├── scratch.js          # Golden Muga silk scratch canvas & reveal logic
│   ├── petals.js           # Kopou orchid & marigold petal physics engine
│   ├── gallery.js          # Fullscreen lightbox modal with touch & keyboard support
│   ├── i18n.js             # Bilingual language toggle (Assamese default / English)
│   └── app.js              # Application orchestrator, audio playback, guest wishes
└── README.md               # Documentation & deployment guide
```

---

## ⚡ Technical Architecture (100% Static)

- **Pure Static Technology:** HTML5, CSS3, Vanilla JavaScript, JSON, and standard image/audio/font assets.
- **Zero Backend Required:** No Node.js, Express, PHP, Python, or database needed on production server.
- **Offline / Local File Compatible:** Can be opened directly in any browser (even by double-clicking `index.html`) using the integrated `data/content-fallback.js` bundle.
- **Mobile First:** Optimized touch targets (minimum 44×44px), smooth scrolling, no horizontal scrollbars, and accessible keyboard navigation.

---

## ✏️ How to Edit Content

All text, dates, ceremony timings, venues, gallery items, and story milestones are stored cleanly in:
`data/content.json`

To customize any detail (e.g., date, venue address, phone numbers):
1. Open `data/content.json` in any text editor (Notepad, VS Code, etc.).
2. Update the corresponding Assamese or English text string.
3. Save the file.
4. Refresh `index.html` in your browser.

---

## 🌐 Deployment to GitHub Pages (or Any Static Host)

### Option 1: GitHub Pages
1. Push this directory to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Namrata & Bedanta Assamese Wedding Invitation"
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
2. In your GitHub repository:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment**, select **Deploy from a branch**.
   - Branch: `main` / folder: `/ (root)`.
   - Click **Save**.
   - Your site will be live at `https://<your-username>.github.io/<your-repo-name>/`.

### Option 2: Drag & Drop to Netlify, Vercel, or Cloudflare Pages
Since the site is 100% static:
- Drag and drop this folder directly into [Netlify Drop](https://app.netlify.com/drop) or [Vercel](https://vercel.com/).
- It goes live in under 10 seconds with free SSL.

---

## 📱 Browser & Device Compatibility

- **Android Mobile:** Chrome, Samsung Internet, Firefox.
- **iPhone / iPad:** iOS Safari, Chrome for iOS.
- **Desktop / Laptop:** Chrome, Edge, Safari, Firefox on Windows, macOS, and Linux.
