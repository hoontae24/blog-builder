import dayjs from "dayjs"
import grayMatter from "gray-matter"
import fs from "fs/promises"
import marked from "marked"
import { parse as htmlParse } from "node-html-parser"

import config from "@/config.json"
import env from "@/libs/env"
import { Post } from "@/types/post"

const root = env.ARTICLES_ROOT
const filename = env.ARTICLE_FILENAME

export class Explorer {
  static loaded = false
  static posts: Post[] = []
  static tags: string[] = []
  static tagCountMap: Record<string, number> = {}

  static getPosts = async (): Promise<Post[]> => {
    if (!Explorer.loaded) await Explorer.run()
    return Explorer.posts
  }

  static getPostBySlug = async (slug: string): Promise<Post | undefined> => {
    if (!Explorer.loaded) await Explorer.run()
    return Explorer.posts.find((post) => post.slug === slug)
  }

  static getPostByRound = async (round: number): Promise<Post | undefined> => {
    if (!Explorer.loaded) await Explorer.run()
    return Explorer.posts.find((post) => post.round === round)
  }

  static run = async (): Promise<typeof Explorer> => {
    const paths = await getPaths()

    const posts: Post[] = []
    const tags: string[] = []

    for (let i = 0, len = paths.length; i < len; i = i + 1) {
      const [group, slug] = paths[i]
      // for (const [group, slug] of paths) {
      const path = [root, group, slug, filename].join("/")
      const { content, data } = grayMatter.read(path, {
        excerpt: true,
      })
      const markdown = content.replace(
        /\.\/img\//g,
        `${env.BASE_PATH}/${group}/${slug}/img/`
      )
      const html = marked(markdown)
      const description = data.description?.split("\n").join(" ") || ""
      const excerpt =
        `${description} ` +
        htmlParse(html).innerText.trim().slice(0, 200).split("\n").join(" ")
      const [, image = ""] = markdown.match(/!\[.+\]\((.+)\)/i) || []

      const post: Post = {
        href: "",
        round: i + 1,
        paths: [group, slug],
        slug: slug,
        title: data.title,
        description: description,
        date: dayjs(data.date).format("YYYY-MM-DD"),
        category: data.category,
        tags: data.tags,
        seriesId: data.seriesId || null,
        markdown: markdown,
        html: html,
        excerpt: excerpt,
        thumbnail: image,
        thumbnailUrl:
          config.site_url +
          (image.startsWith(env.BASE_PATH)
            ? image.slice(env.BASE_PATH.length)
            : image),
      }

      posts.push(post)
      tags.push(...post.tags)
    }
    posts.sort((prev, next) => {
      return (
        dayjs(next.date).toDate().getTime() -
        dayjs(prev.date).toDate().getTime()
      )
    })
    posts.forEach((post, i, arr) => {
      const round = arr.length - i
      post.round = round
      post.href = String(round)
    })

    Explorer.posts = posts
    Explorer.tags = tags.filter((v, i, arr) => arr.indexOf(v) === i)
    Explorer.tagCountMap = tags.reduce(
      (res, tag) => ({ ...res, [tag]: (res[tag] || 0) + 1 }),
      {} as Record<string, number>
    )
    Explorer.loaded = true
    return Explorer
  }
}

const getPaths = async (): Promise<string[][]> => {
  const groups = await getGroups()
  const paths = await Promise.all(
    groups.map(async (group) => {
      const slugs = await getSlugs(group)
      return slugs.map((slug) => [group, slug])
    })
  ).then((paths) => paths.reduce((res, paths) => res.concat(paths), []))
  return paths
}

const getGroups = async (): Promise<string[]> => {
  const directories = await fs.readdir(root)
  const groups: string[] = []

  for (const dir of directories) {
    if (/\.\w+/.test(dir)) continue
    const stat = await fs.stat(`${root}/${dir}`)
    if (!stat.isDirectory()) continue
    groups.push(dir)
  }

  return groups
}

const getSlugs = async (group: string): Promise<string[]> => {
  const directories = await fs.readdir(`${root}/${group}`)
  const slugs: string[] = []

  for (const dir of directories) {
    if (/\.\w+/.test(dir)) continue
    const stat = await fs.stat(`${root}/${group}/${dir}`)
    if (!stat.isDirectory()) continue
    slugs.push(dir)
  }

  return slugs
}
