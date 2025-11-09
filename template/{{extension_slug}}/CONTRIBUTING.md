# Contributing

This guide is designed to help streamline the process of contributing to this project.

By following these guidelines, you'll learn how to effectively collaborate with our team, submit meaningful contributions, and ensure that your work aligns with this project's goals and standards. Together, we can continue to improve and innovate, making this project even better for users around the world. Thank you for your interest and dedication to making a difference!

## Pre-requisites

This extension requires [NodeJS](https://nodejs.org/en/download/package-manager) >= 24 and [PNPM](https://pnpm.io/installation) installed on your machine.

To manage your node versions, the recommended way is to use a node version manager tool, like [fnm](https://github.com/Schniz/fnm) or [nvm](https://github.com/nvm-sh/nvm).

This project includes a `.node-version` that integrations with those tools in order to use the correct node version for this project.

## Getting started

### Clone the repository

```sh
git clone {{ repository_url }} {{ extension_slug }}
cd {{ extension_slug }}
```

### Install dependencies

```sh
pnpm i
```

### Start the development server

```sh
pnpm run dev
```

By default, this will launch a Chrome browser with the extension. If you want to use Firefox run:

```sh
TARGET=firefox pnpm run dev
```

### Build the application

To build the application for distrubtion run:

- **Google Chrome** - `TARGET=chrome pnpm build`

- **Firefox** - `TARGET=firefox pnpm build`

The build artifact will be placed in `dist` folder.

## Install the extension in your browser.

There are two ways you can install your extension. By using the generated artifacts directly, or by publishing in to the respective stores.

For testing purposes and/or personal use, you can build the extension yourself and install on your browser.

**Chrome:**

```sh
TARGET=chrome pnpm build
```

Then follow [How to install the unpacked extension in Chrome - Webkul Blog](https://webkul.com/blog/how-to-install-the-unpacked-extension-in-chrome/) to install your unpacked extension.

**Firefox**

```sh
TARGET=firefox pnpm build
pnpm sign
```

Firefox requires extensions to be signed before installing, even if they are not distributed in the Mozilla Addons store. To be able to sign the extension,
you must register at [Addon developer hub](https://addons.mozilla.org/en-US/developers/) and then create a set of API keys at [here](https://addons.mozilla.org/en-US/developers/addon/api/key/). This API keys will be used to sign the extension.

Then run:

```bash
WEB_EXT_API_KEY=<api_key> WEB_EXT_API_SECRET=<api_secret> WEB_EXT_CHANNEL="unlisted" pnpm sign
```

This will create a `.xpi` file inside a `web-ext-artifacts` folder that you can drag to your Firefox window to install.

> [!TIP]
> This project provides a [GitHub Action](.github/workflows/release.yml) that generates these artifacts for you when you publish a GitHub release.

### Publish the extension to Web Store

To make this extension available your users, the recommneded way is to publish it to the web store. The following guides contains instructions for Chrome Web store
and Mozilla Addons website:

- [Submitting an add-on | Firefox Extension Workshop](https://extensionworkshop.com/documentation/publish/submitting-an-add-on/)
- [Publish in the Chrome Web Store  |  Extensions  |  Chrome for Developers](https://developer.chrome.com/docs/webstore/publish)


## Guides


### Integrating VueJS

To integrate VueJS in your extension, simply add the `vue` plugin to your `vite.config.ts`:

```ts
// vite.config.ts
import { defineConfig } from "vite";
import webExtension from "vite-plugin-web-extension";
import vue from "@vite/plugin-vue";

export default defineConfig({
  plugins: [
    vue(),
    webExtension({
      // ...
    }),
  ],
});
```
### Integrating TailwindCSS

To use TailwindCSS in your extension, follow the official guide at [Get started with Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite) using Vite.


---

## Reference

- [Extensions / Get started  |  Chrome for Developers](https://developer.chrome.com/docs/extensions/get-started)
- [Firefox Extension Workshop | Get help creating & publishing Firefox extensions.](https://extensionworkshop.com/)
-  [Vite Plugin Web Extension | Modern Web Extension Development](https://vite-plugin-web-extension.aklinker1.io/)