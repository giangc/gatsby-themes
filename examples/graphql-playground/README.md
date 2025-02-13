<p align="center">
  <a href="https://graphql-playground.lekoarts.de">
    <img alt="LekoArts" src="https://img.lekoarts.de/gatsby/gatsby-site-illustration.png" />
  </a>
</p>
<h1 align="center">
  GraphQL Playground
</h1>

<p align="center">
  <a href="https://github.com/LekoArts/gatsby-starter-graphql-playground/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-0BSD-blue.svg" alt="GraphQL Playground is released under the 0BSD license." />
  </a>
  <a href="https://github.com/sponsors/LekoArts">
    <img alt="GitHub Sponsors" src="https://img.shields.io/github/sponsors/LekoArts">
  </a>
  <a href="https://www.lekoarts.de?utm_source=graphql-playground&utm_medium=Starter">
    <img alt="Website" src="https://img.shields.io/badge/-website-blue">
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=lekoarts_de">
    <img src="https://img.shields.io/twitter/follow/lekoarts_de.svg?label=Follow%20@lekoarts_de" alt="Follow @lekoarts_de" />
  </a>
</p>

GraphQL Playground to showcase the power of GraphQL. Write your queries and documentation with [MDX](https://mdxjs.com/) and display queries in an interactive GraphiQL window. It can source from your localhost or a remote URL (e.g. Codesandbox). Using the Gatsby Theme [`@lekoarts/gatsby-theme-graphql-playground`](https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-graphql-playground).

[**Demo Website**](https://gatsby-theme-graphql-playground.netlify.com/)

Also be sure to check out other [Free & Open Source Gatsby Themes](https://themes.lekoarts.de) and my [Personal Website](https://www.lekoarts.de?utm_source=graphql-playground&utm_medium=Starter).

## ✨ Features

- MDX for the navigation and content
- Automatically converts GraphQL code blocks with the meta field `preview` to live previews in a GraphiQL iframe
- Theme UI-based theming
- Light Mode / Dark Mode

## 🚀 Getting Started

[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/LekoArts/gatsby-starter-graphql-playground)

### 1. **Create a Gatsby site.**

Use `git` to clone the site and navigate into it:

```sh
git clone https://github.com/LekoArts/gatsby-starter-graphql-playground project-name
cd project-name
```

### 2. **Install dependencies.**

If you use npm 7 or above use the `--legacy-peer-deps` flag. If you use npm 6 you can use `npm install`.

```sh
npm install --legacy-peer-deps
```

### 3. **Open the code and start customizing!**

Start the site by running `npm run develop`.

Your site is now running at `http://localhost:8000`!

If you want to learn more about how you can use a Gatsby starter that is configured with a Gatsby theme, you can check out this [shorter](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/using-a-gatsby-theme/) or [longer](https://www.gatsbyjs.com/tutorial/using-a-theme/) tutorial. The tutorials don't exactly apply to this starter however the concepts are the same.

## 📝 Using and modifying this starter

**Important Note:** Please read the guide [Shadowing in Gatsby Themes](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/shadowing/) to understand how to customize the underlying theme!

This starter creates a new Gatsby site that installs and configures the theme [`@lekoarts/gatsby-theme-graphql-playground`](https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-graphql-playground).

Have a look at the theme's README and files to see what options are available and how you can shadow the various components including Theme UI. Generally speaking you will want to place your files into `src/@lekoarts/gatsby-theme-graphql-playground/` to shadow/override files. The Theme UI config can be configured by shadowing its files in `src/gatsby-plugin-theme-ui/`.

### Adding content

#### Changing the Navigation

Create a file at `src/@lekoarts/gatsby-theme-graphql-playground/data/navigation.mdx` to edit the navigation.

#### Adding a new doc page

First, create a new entry in your `navigation.mdx` file. If this file doesn't exist yet, see the step above.

You need to create a "classic" markdown list, like:

```markdown
- Welcome
- Basics
  - [GraphQL Introduction](/graphql-introduction)
```

You'll now see a navigation that has two sections (Welcome and Basics) of which Basics has a sub-menu.

Now, create a new file at `docs/graphql-introduction.mdx`. The filename has to be the same as the link you used in the navigation.
Add a title to the frontmatter of the MDX file and place the GraphQL query you wish to display in the GraphiQL iFrame as the **first** item.

````markdown
---
title: GraphQL Introduction
---

```graphql preview
{
  ...your
  query
  goes
  here
}
```

Normal text can go here.

## Normal markdown too
````

You need to write your query with `graphql preview` so that the theme can pick it up. You also must place it directly after the frontmatter.

#### Changing the "Welcome" text

Create a file at `src/@lekoarts/gatsby-theme-graphql-playground/data/index.mdx` to edit the text.

### Change your `static` folder

The `static` folder contains the icons, social media images and `robots.txt`. Don't forget to change these files, too!

## 🤔 Questions or problems?

If you have general questions or need help with Gatsby, please go to one of the [support platforms](https://www.gatsbyjs.com/contributing/community/#where-to-get-support) mentioned in Gatsby's documentation. If you have a specific question about this project, you can head to the [GitHub Discussions](https://github.com/LekoArts/gatsby-themes/discussions) of the repository.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on Gatsby's website](https://www.gatsbyjs.com/).

### Themes

To learn more about Gatsby themes specifically, I recommend checking out the [theme docs](https://www.gatsbyjs.com/docs/themes/).

### General

- **For most developers, I recommend starting with the [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/docs/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to Gatsby's documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _How-to Guides_ and _Reference_ items in the primary navigation.

## 🌟 Supporting me

Thanks for using this project! I'm always interested in seeing what people do with my projects, so don't hesitate to tag me on [Twitter](https://twitter.com/lekoarts_de) and share the project with me.

Please star this project, share it on Social Media or consider supporting me on [Patreon](https://www.patreon.com/lekoarts) or [GitHub Sponsor](https://github.com/sponsors/LekoArts)!
