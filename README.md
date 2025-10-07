# BizPlus CRM

Starter React + Vite + Tailwind + Bootstrap project scaffold for a CRM application.

Getting started (Windows PowerShell):

1. Install dependencies

```powershell
npm install
```

2. Start dev server

```powershell
npm run dev
```

3. Build

```powershell
npm run build
```

Notes:
- Tailwind is configured via `tailwind.config.js` and PostCSS.
- Bootstrap is imported from `node_modules` in `src/main.jsx`.

Quick verification

1. Run `npm install` and then `npm run dev`.
2. Open http://localhost:5173 in your browser.

What I added

- Vite + React starter with `package.json` and `vite.config.js`.
- Tailwind and PostCSS config.
- Bootstrap import and global styles.
- Sample folder structure under `src/` (components, pages, api, services, hooks, context, layouts).
- Basic pages: Home, About, Login, Register, Dashboard with sample components.

Next steps (optional)

- Run `npm install` to fetch dependencies and test locally.
- Wire real API endpoints via `VITE_API_BASE` in `.env`.
