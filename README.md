# copier-browser-ext

<p align="center">

[![Copier](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/copier-org/copier/master/img/badge/badge-black.json&style=for-the-badge)](https://github.com/copier-org/copier)
[![Build Status](https://img.shields.io/github/actions/workflow/status/brpaz/copier-browser-ext/ci.yml?branch=main&style=for-the-badge)](https://github.com/brpaz/copier-browser-ext/actions)

</p>

> A [Copier](https://copier.readthedocs.io/en/stable/) template for scaffolding a browser extension, using Vite and TypeScript.

## 📦 What is included?

- [Vite](https://vitejs.dev/) with [Vite Plugin Web Extension](https://vite-plugin-web-extension.aklinker1.io/).
- [TypeScript](https://www.typescriptlang.org/) for type safety.
- [PNPM](https://pnpm.io/) as package manager.
- [Eslint](https://eslint.org/) and [Prettier](https://prettier.io/) for code quality and formatting.
- Support for both Chrome and Firefox.
- Documentation with [VitePress](https://vitepress.vuejs.org/).
- GitHub Actions workflows for CI and Release automation.
- [Release Drafter](https://github.com/marketplace/actions/release-drafter) for automatic release creation and changelog generation.

## 🚀 Getting Started

### Pre-Requisites

This template is built with [Copier](https://copier.readthedocs.io/en/stable/), a Python based project templating tool.

To install copier on your system, follow the instructions at [Copier Website](https://copier.readthedocs.io/en/stable/#installation)

### Usage

To create a new project using this template, run the following command:

```bash
copier copy gh:brpaz/copier-browser-ext /path/to/your/new/project
```

And answer the prompts to customize your new project.

### Customize Your Extension

### Generate an Icon Set

You can use [RealFaviconGenerator](https://realfavicongenerator.net/) to generate a complete set of icons for your extension.

## TODO

- Add automated publishing to Chrome and Mozilla stores.

## 🗒️ License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.