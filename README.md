# Instagram Clone (v2) - **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS v4**

A modern Instagram Clone built with **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS v4**.  
This version transitions from the original Scrimba build to a scalable, production-ready setup.

---

## 🚀 Features

- Responsive Instagram-inspired layout  
- Modular, component-based architecture  
- Tailwind CSS v4 for utility-first styling  
- TypeScript for type safety  
- Ready for future enhancements: auth, posts, profiles, state management

---

## 🧰 Tech Stack

- **React 19** — latest React features and hooks  
- **TypeScript** — type safety and developer confidence  
- **Vite** — fast dev server and bundler  
- **Tailwind CSS v4** — utility-first CSS styling  

---

## ⚙️ Vite Setup Notes

This project uses the Vite template for React + TypeScript.  
Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react) — uses Babel for Fast Refresh  
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) — uses SWC for Fast Refresh  

The React Compiler is not enabled in this template because of its impact on dev & build performance.  
For installation, see: [React Compiler docs](https://react.dev/learn/react-compiler/installation).

---

## 🧹 ESLint Notes

For production development, enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      tseslint.configs.recommendedTypeChecked,
      // or tseslint.configs.strictTypeChecked for stricter rules
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
