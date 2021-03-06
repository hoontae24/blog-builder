export interface Post {
  href: string
  round: number
  paths: string[]
  slug: string
  title: string
  description: string
  date: string
  category: string
  tags: string[]
  seriesId: number | null
  markdown: string
  html: string
  excerpt: string
  thumbnail: string
  thumbnailUrl: string
}
