# Helios

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## Packages primevue

```sh
npm i primevue
npm i primeicons
npm i primeflex
npm i vue-logger-plugin
```

## new repo

```sh
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Santora/gh-helios.git
git push -u origin main
```

## deploy

```sh
npm run build
git add dist -force
git commit -m 'adding dist subtree'
git subtree push --prefix dist origin gh-pages
```
