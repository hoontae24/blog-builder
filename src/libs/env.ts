const env = {
  BASE_PATH: process.env.BASE_PATH || "",
  ARTICLES_ROOT: process.env.ARTICLES_ROOT || ".articles",
  ARTICLE_FILENAME: process.env.ARTICLE_FILENAME || "README.md",
  BLOG_TITLE: process.env.BLOG_TITLE || "_BLOG",
  GITHUB_URL: process.env.GH_URL,
} as const

export default env
