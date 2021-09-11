export interface Post {
  paths: string[]
  slug: string
  title: string
  subtitle: string
  date: string
  category: string
  tags: string[]
  seriesId: number | null
  markdown: string
  html: string
  excerpt: string
  thumbnail: string
}
