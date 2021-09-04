const env = {
  BASE_PATH: process.env.BASE_PATH || "",
  ARTICLES_ROOT: process.env.ARTICLES_ROOT || ".articles",
  ARTICLE_FILENAME: process.env.ARTICLE_FILENAME || "README.md",
} as const

export default env
