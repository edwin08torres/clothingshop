# 🛍️ ClothingShop

Minimalist e‑commerce demo built with **React + TypeScript + Vite** and styled with **Tailwind CSS v4**.  Animations and eye‑candy come from **Aceternity UI** (Framer Motion‑powered).

## ✨ Features

* **Parallax hero** with 3‑D product cards (desktop) and scroll‑snap carousel (mobile).
* Live product data from **FakeStore API** (or DummyJSON) – no local images needed.
* Two contact flows: global contact form + per‑product comment sheet.
* **Dark / Light theme** toggle persisted in `localStorage`.
* Floating **WhatsApp CTA**.
* Data persistence for comments and settings via `localStorage`.
* Built with the **Screaming Architecture** folder layout for clear domain separation.

## 🏗️ Tech Stack

| Layer               | Library / Tool                                       |
| ------------------- | ---------------------------------------------------- |
| Build               | [Vite](https://vitejs.dev/)                          |
| UI                  | React 18 + TypeScript                                |
| Styling             | Tailwind CSS v4 (zero‑config)                        |
| Animations          | motion (Framer Motion 11) + Aceternity UI components |
| Routing             | React Router v7 (data router)                        |
| State & Persistence | React Context + custom hooks (`useLocalStorage`)     |

## 📂 Folder Structure (Screaming)

```
src/
 ├─ landing/          # Hero, features, CTA …
 │   ├─ components/
 │   └─ page.tsx      # composed landing page
 ├─ products/         # catalog + detail logic
 ├─ comments/         # per‑product feedback
 ├─ contact/          # global contact form
 ├─ theme/            # ThemeContext & toggle
 ├─ whatsapp/         # WhatsAppButton
 ├─ shared/
 │   ├─ ui/           # reusable UI atoms (hero-highlight, 3D card, …)
 │   ├─ hooks/
 │   └─ libs/
 └─ pages/            # router entry points (Home, ProductPage, Contact)
```

## 🚀 Getting Started

```bash
# 1 Create project (already done)
# npm create vite@latest clothing-shop --template react-ts

# 2 Install deps
npm i

# 3 Run dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) and enjoy live‑reload ⚡️.

### Environment variables

No secrets needed – all APIs are public.  To switch data sources, edit `src/products/api/productsService.ts`.

## 🔧 Available Scripts

| Command           | What it does                          |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Start Vite in dev mode with HMR       |
| `npm run build`   | Production build (bundled & minified) |
| `npm run preview` | Serve the dist build locally          |
| `npm run lint`    | ESLint with type‑aware rules          |

## 🛠️ ESLint & Formatting

The repo ships with a **type‑checked** ESLint config plus stylistic rules:

```js
import tseslint from 'typescript-eslint';
export default tseslint.config({
  extends: [
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
  ],
  plugins: {
    'react-x': (await import('eslint-plugin-react-x')).default,
    'react-dom': (await import('eslint-plugin-react-dom')).default,
  },
  rules: {
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```

Run `npm run lint -- --fix` to auto‑fix.

## 🌐 Deploy

The site is **static‑exportable**: `npm run build && vite preview`.

* **Netlify / Vercel** – drop the `dist/` folder or connect the repo.
* **GitHub Pages** – copy the output to the `gh-pages` branch and enable Pages.

## 📄 License

MIT © 2025 – Feel free to fork and remix.
