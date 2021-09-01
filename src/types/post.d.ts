export interface Post {
  href: string
  paths: string[]
  title: string
  subtitle: string
  date: string
  category: string
  tags: string[]
  seriesId: number | null
  content: string
  html: string
  excerpt: string
}
