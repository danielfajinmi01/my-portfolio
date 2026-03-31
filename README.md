# Dual Spectrum Portfolio — Obaloluwa Fajinmi

A modern, accessible, and performant developer portfolio built with **React + Vite + Tailwind CSS**.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx       # Fixed nav with scroll spy + mobile menu
│   ├── Hero.jsx         # Animated hero with typewriter effect
│   ├── About.jsx        # Bio, stats, availability card
│   ├── Projects.jsx     # Project showcase grid with hover effects
│   ├── Skills.jsx       # Animated skill bars + tech tags
│   ├── Contact.jsx      # Contact links + validated form
│   └── Footer.jsx       # Footer with social links
├── App.jsx              # Root layout + skip-link accessibility
├── index.css            # Global styles, CSS variables, animations
└── main.jsx             # React entry point
```

## 🎨 Design Tokens (CSS Variables)

Edit `src/index.css` to change the colour scheme:

| Variable         | Default     | Purpose           |
|-----------------|-------------|-------------------|
| `--accent`       | `#fbbf24`   | Amber gold        |
| `--bg-primary`   | `#0a0c10`   | Deep dark         |
| `--bg-secondary` | `#0f1117`   | Section alternate |
| `--bg-card`      | `#161b24`   | Card background   |
| `--text-primary` | `#f1f5f9`   | Main text         |
| `--text-muted`   | `#94a3b8`   | Secondary text    |

## ✏️ Personalising

- **Hero.jsx** — Update `ROLES` array with your actual roles
- **About.jsx** — Edit bio paragraphs and stats
- **Projects.jsx** — Replace `PROJECTS` array with your real projects (add real `demo`/`github` URLs)
- **Skills.jsx** — Adjust skill names and proficiency levels
- **Contact.jsx** — Update `CONTACT_LINKS` with your real email/socials; wire up form to Formspree/EmailJS
- **Navbar.jsx** — Update social links in the hero and footer
- **index.html** — Update meta tags with real OG image URL

## 🌐 Deploying to Lovable / Vercel / Netlify

For **Lovable**: Paste component files directly into the Lovable editor.
For **Vercel/Netlify**: `npm run build` → deploy `/dist` folder.

## ♿ Accessibility

- Semantic HTML5 landmarks (`<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`)
- Skip-to-content link
- ARIA labels on interactive elements
- `aria-live` on typewriter
- Keyboard navigable with visible focus rings
- `prefers-reduced-motion` respected via CSS transitions

## 📱 Responsive Breakpoints

| Breakpoint | Width       |
|-----------|-------------|
| Mobile    | < 640px     |
| Tablet    | 640–1024px  |
| Desktop   | > 1024px    |
| Wide      | > 1280px    |

All layouts use CSS `auto-fit` grid — fluid and responsive without hard breakpoints where possible.
