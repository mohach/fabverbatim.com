# Fab Verbatim — Astro Website

Complete multilingual website for Fabienne Annys, sworn translator & interpreter.
Default language: **Spanish (ES)**

## 🚀 Quick Start

```bash
npm install
npm run dev
# Opens at http://localhost:4321
```

## 🌍 Pages & URLs

### Spanish (default — no prefix)
| URL | Page |
|-----|------|
| `/` | Homepage |
| `/sobre-mi` | About Me |
| `/contacto` | Contact |
| `/traducciones-juradas` | Sworn Translations |
| `/traducciones-juridicas` | Legal Translations |
| `/traducciones-economico-financieras` | Economic & Financial |
| `/traducciones-comercio-exterior` | Foreign Trade |
| `/traducciones-tecnicas` | Technical Translations |

### English (`/en/`)
| URL | Page |
|-----|------|
| `/en` | Homepage |
| `/en/about-me` | About Me |
| `/en/contact` | Contact |
| `/en/sworn-translation` | Sworn Translations |
| `/en/legal-translations` | Legal Translations |
| `/en/economic-financial` | Economic & Financial |
| `/en/foreign-trade` | Foreign Trade |
| `/en/technical-translations` | Technical Translations |

### Other languages
- Catalan: `/ca` · `/ca/sobre-mi` · `/ca/contacte`
- French: `/fr` · `/fr/sur-moi` · `/fr/contact`
- Dutch: `/nl` · `/nl/over-mij` · `/nl/contact`

## 📬 Contact Form — Formspree Setup

1. Go to **https://formspree.io** → create free account
2. Click **New Form** → set email to `contact@fabverbatim.com`
3. Copy your form ID (e.g. `xyzabcde`)
4. Open `src/components/ContactForm.astro`
5. Find this line and replace YOUR_FORM_ID:
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```

Done! All form submissions go directly to contact@fabverbatim.com.

## 🖼️ Profile Photo

The file `public/fabienne.png` is already included (the photo you provided).
The image appears in the hero, about page and contact sidebar automatically.

## 🏗️ Project Structure

```
fabverbatim/
├── public/
│   ├── fabienne.png          ← Profile photo
│   └── logo.svg              ← FV logo mark
├── src/
│   ├── components/
│   │   ├── Nav.astro         ← Navigation (all languages)
│   │   ├── ContactForm.astro ← Contact form (Formspree)
│   │   ├── ServiceLayout.astro ← Reusable service page template
│   │   └── Footer.astro      ← Footer
│   ├── layouts/
│   │   └── Layout.astro      ← HTML shell + all global CSS
│   └── pages/
│       ├── index.astro       ← ES Homepage (/)
│       ├── sobre-mi.astro    ← ES About (/sobre-mi)
│       ├── contacto.astro    ← ES Contact (/contacto)
│       ├── traducciones-juradas.astro
│       ├── traducciones-juridicas.astro
│       ├── traducciones-economico-financieras.astro
│       ├── traducciones-comercio-exterior.astro
│       ├── traducciones-tecnicas.astro
│       ├── en/               ← English pages
│       ├── ca/               ← Catalan pages
│       ├── fr/               ← French pages
│       └── nl/               ← Dutch pages
├── astro.config.mjs
├── package.json
└── README.md
```

## 🚢 Deployment (Free)

### Netlify (recommended)
1. Push to GitHub
2. netlify.com → New site → Import from Git
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy!

### Vercel
1. Push to GitHub
2. vercel.com → New Project → Import
3. Astro is auto-detected → Deploy

## 🎨 Colours & Design

Edit CSS variables in `src/layouts/Layout.astro`:
```css
--navy:  #0d1c52   /* deep blue */
--gold:  #c97d0a   /* amber gold */
--cream: #f6f3ed   /* warm background */
```
