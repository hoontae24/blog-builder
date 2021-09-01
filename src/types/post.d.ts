export interface Post {
  href: string
  paths: string[]
  title: string
  subtitle: string
  date: string
  category: string
  tags: string[]
  seriesId: number | null
  markdown: string
  html: string
  excerpt: string
}
