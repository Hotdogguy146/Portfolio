# Damianne's Portfolio

A React portfolio built with Vite.

## Development

```sh
npm install
npm run dev
```

## Contact form

The contact form sends submissions to `pakkaldamianne146@gmail.com` through FormSubmit's AJAX endpoint, so it works on static hosting without a custom backend. On the first real submission, FormSubmit sends an activation email to that inbox; complete the activation before expecting future messages. The recipient address is visible in the client-side app, and submissions are processed by FormSubmit.

## Checks

```sh
npm run lint
npm run build
```

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
