const kebabCase = require(`lodash.kebabcase`)
const path = require(`path`)
const withDefaults = require(`./utils/default-options`)

const mdxResolverPassthrough = (fieldName) => async (source, args, context, info) => {
  const type = info.schema.getType(`Mdx`)
  const mdxNode = context.nodeModel.getNodeById({
    id: source.parent,
  })
  const resolver = type.getFields()[fieldName].resolve
  const result = await resolver(mdxNode, args, context, {
    fieldName,
  })
  return result
}

exports.createSchemaCustomization = ({ actions, schema }, themeOptions) => {
  const { createTypes, createFieldExtension } = actions

  const { basePath } = withDefaults(themeOptions)

  const slugify = (source) => {
    const slug = source.slug ? source.slug : kebabCase(source.title)

    return `/${basePath}/${slug}`.replace(/\/\/+/g, `/`)
  }

  createFieldExtension({
    name: `slugify`,
    extend() {
      return {
        resolve: slugify,
      }
    },
  })

  createFieldExtension({
    name: `mdxpassthrough`,
    args: {
      fieldName: `String!`,
    },
    extend({ fieldName }) {
      return {
        resolve: mdxResolverPassthrough(fieldName),
      }
    },
  })
  // client
  // domain
  // brief
  createTypes(`
    interface Project implements Node {
      id: ID!
      client: String!
      domain: String!
      brief: String!
      slug: String! @slugify
      cover: File! @fileByRelativePath
    }

    type MdxProject implements Node & Project {
      title: String!
      slug: String! @slugify
      client: String!
      domain: String!
      brief: String!
      body: String! @mdxpassthrough(fieldName: "body")
      cover: File! @fileByRelativePath
    }
  `)
}

// These template are only data-fetching wrappers that import components
const homePageTemplate = require.resolve(`./src/templates/homepage-query.tsx`)

exports.onCreateNodes = async({actions}) => {

};

exports.createPages = async ({ actions, graphql, reporter }, themeOptions) => {
  const { createPage } = actions

  const { basePath, formatString } = withDefaults(themeOptions)

  createPage({
    path: basePath,
    component: homePageTemplate,
  })


  createPage({
    path: project.slug,
    component: homePageTemplate,
    context: {
      slug: project.slug,
      absolutePathRegex: `/^${path.dirname(fileAbsolutePath)}/`,
      formatString,
    },
  })
}
