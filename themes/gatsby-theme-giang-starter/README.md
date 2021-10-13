<p align="center">
  <a href="https://themes.lekoarts.de">
    <img alt="Gatsby Theme" src="https://img.lekoarts.de/gatsby/gatsby-themes-illustration.png" />
  </a>
</p>
<h1 align="center">
  @lekoarts/gatsby-theme-giang-starter
</h1>

<p align="center">
  <a href="https://github.com/LekoArts/gatsby-themes/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="@lekoarts/gatsby-theme-giang-starter is released under the MIT license." />
  </a>
  <a href="https://www.npmjs.org/package/@lekoarts/gatsby-theme-giang-starter">
    <img src="https://img.shields.io/npm/v/@lekoarts/gatsby-theme-giang-starter.svg" alt="Current npm package version." />
  </a>
  <a href="https://npmcharts.com/compare/@lekoarts/gatsby-theme-giang-starter?minimal=true">
    <img src="https://img.shields.io/npm/dm/@lekoarts/gatsby-theme-giang-starter.svg" alt="Downloads per month on npm." />
  </a>
  <a href="https://npmcharts.com/compare/@lekoarts/gatsby-theme-giang-starter?minimal=true">
    <img src="https://img.shields.io/npm/dt/@lekoarts/gatsby-theme-giang-starter.svg" alt="Total downloads on npm." />
  </a>
  <a href="https://www.lekoarts.de?utm_source=giang-starter&utm_medium=Theme">
    <img alt="Website" src="https://img.shields.io/badge/-website-blue">
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=lekoarts_de">
      <img src="https://img.shields.io/twitter/follow/lekoarts_de.svg?label=Follow%20@lekoarts_de" alt="Follow @lekoarts_de" />
    </a>
</p>

TODO

[![Live Preview](https://img.lekoarts.de/gatsby/preview.svg)](https://giang-starter.lekoarts.de)

Read the [Source Code](https://github.com/LekoArts/giang-startẻ).

Also, be sure to checkout other [Free & Open Source Gatsby Themes](https://themes.lekoarts.de) and my [Personal Website](https://www.lekoarts.de?utm_source=giang-starter&utm_medium=Theme).

## Features

- TODO

## Installation

```sh
npm install @lekoarts/gatsby-theme-giang-starter
```

### Install as a starter

This will generate a new site that pre-configures use of the theme.

```sh
gatsby new giang-starter LekoArts/giang-startẻ
```

[**View the starter's code**](https://github.com/LekoArts/giang-startẻ)

## Usage

### Theme options

| Key              | Default Value | Description                                                                                                                           |
| ---------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `option` | `{}`          | text |

#### Example usage

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-giang-starter`,
      options: {
          // TODO
        }
      }
    }
  ]
};
```

#### Additional configuration

In addition to the theme options, there are a handful of items you can customize via the `siteMetadata` object in your site's `gatsby-config.js`

```js
// gatsby-config.js
module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `Giang Starter`,
    // Default title of the page
    siteTitleAlt: `Giang Starter - @lekoarts/gatsby-theme-giang-starter`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Giang Starter - Gatsby Theme from @lekoarts`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://giang-starter.lekoarts.de`,
    // Used for SEO
    siteDescription: `TODO`,
    // Will be set on the html tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Twitter Handle
    author: `@lekoarts_de`
  }
};
```

### Shadowing

Please read the guide [Shadowing in Gatsby Themes](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/shadowing/) to understand how to customize this theme! Generally speaking you will want to place your files into `src/@lekoarts/gatsby-theme-giang-starter/` to shadow/override files.

## 🌟 Supporting me

Thanks for using this project! I'm always interested in seeing what people do with my projects, so don't hesitate to tag me on [Twitter](https://twitter.com/lekoarts_de) and share the project with me.

Please star this project, share it on Social Media or consider supporting me on [Patreon](https://www.patreon.com/lekoarts) or [GitHub Sponsor](https://github.com/sponsors/LekoArts)!
