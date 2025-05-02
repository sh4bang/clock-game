# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Developper's note

### Create a new react project with vite

``` shell
# Empty app
npm create vite@latest ./project_directory -- --template react
# Install dependencies
npm install
# Launch the server
npm run dev
```

### Add Tailwind CSS

``` shell
# Install Tailwind CSS packages for vite
npm install tailwindcss @tailwindcss/vite
```
Then follow steps here : https://tailwindcss.com/docs/installation/using-vite

