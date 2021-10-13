/* eslint-disable prettier/prettier */
module.exports = (themeOptions) => {
  const basePath = themeOptions.basePath || `/`
  const contentPath = themeOptions.contentPath || `content`

  return {
    basePath,
    contentPath,
  }
}
