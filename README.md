# 🎰 Random Quote Generator

**Created:** August 11, 2026  
**Last Updated:** August 12, 2026

🔗 **Live Demo:** [Click Here 👆]()

An aesthetic, real-time quote generator crafted with **HTML**, **Tailwind CSS**, and **Vanilla JavaScript**. Designed around modern **Neumorphic UI** principles, the interface provides a satisfying, touchable experience with soft relief depth, custom interactive button press states, anti-repetition quote logic, and fluid fade transitions.

---

![Counter App Preview](./assets/images/preview.png)

---

## Features

- 🎯 **Random Quote Generation:** Instantly fetches and displays unique motivational quotes with every click.
- 🔄 **Anti-Repetition Logic:** Smart selection mechanism to ensure the same quote doesn't repeat consecutively.
- 🎨 **Neumorphic UI Design:** Tactile 3D appearance built with custom Tailwind CSS dual drop-shadows and soft inner highlights (`inset`).
- 📱 **Fully Responsive Layout:** Seamlessly scales and adapts from small mobile screens up to large desktop monitors.
- ⚡ **Lightweight & Fast:** Built with pure vanilla JavaScript—no heavy frameworks or external dependencies required.

---

## Tech Stack

| Technology           | Purpose                         |
| -------------------- | ------------------------------- |
| HTML5                | Page structure                  |
| Tailwind CSS         | Styling and layout              |
| JavaScript (Vanilla) | Counter logic and interactivity |

---

## Project Structure

```text
random-quote-generator/
├── 📁 assets/               # Static assets
│   └── 📁 images/           # Images and icons
│       └── 📄 favicon.png   # Favicons on website
│       └── 📄 preview.png   # Project preview screenshot
├── 📁 node_modules/         # Dependencies managed by npm
├── 📁 src/                  # Application source logic
│   └── 📄 main.js           # JavaScript clock logic
│   └── 📄 style.css         # Tailwind CSS import
├── 📄 README.md             # Project documentation
├── 📄 index.html            # Entry HTML page
├── 📄 package-lock.json     # Locked npm package versions
├── 📄 package.json          # Node project metadata and scripts
└── 📄 vite.config.ts        # Vite bundler configuration
```

---

## How It Works

1. **Data Initialization:** A JavaScript array stores the quote objects, each containing two properties: `quote` (the text) and `author`.
2. **Random Selection Logic:** When the **"New Quote"** button is clicked, JavaScript uses `Math.random()` scaled to the length of the quotes array, combined with `Math.floor()`, to pick a random index number.
3. **DOM Update:** The script updates the target HTML elements (`#quote-text` and `#author-text`) using `.innerText` to seamlessly display the newly selected quote and author on screen.

---

## Customization

- 📝 **Add More Quotes:** Open the JavaScript section in `index.html` and simply add new objects `{ quote: "Your text", author: "Author Name" }` to the `quotes` array.
- 🎨 **Change Palette & Shadows:** Adjust the background color (`bg-[#e0e5ec]`) and custom shadow values (`shadow-[8px_8px_...]`) in the Tailwind classes to experiment with light or dark themes.
- 📐 **Modify Card Dimensions:** Tweak the `max-w-*` and `p-*` Tailwind utility classes on the `<main>` card element to adjust padding, rounding, and card width for your layout preferences.

---

<div align="center">

_"Every great app starts with someone brave enough to click `+` first."_

⭐ **If this counter counted anything for you, give the repo a star!** ⭐

</div>
