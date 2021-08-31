import dayjs from "dayjs"
import grayMatter from "gray-matter"
import fs from "fs/promises"
import marked from "marked"
import { parse as htmlParse } from "node-html-parser"

import config from "@/libs/config.json"
import { Post } from "@/types/post"

const root = config.PATH_OF_ARTICLES
const filename = config.FILENAME_OF_ARTICLES

export class Explorer {
  static loaded = false
  static posts: Post[] = []

  static getPosts = async (): Promise<Post[]> => {
    if (!Explorer.loaded) {
      await Explorer.run()
    }
    return Explorer.posts
  }

  static run = async (): Promise<typeof Explorer> => {
    const paths = await getPaths()

    for (const [group, slug] of paths) {
      const path = [root, group, slug, filename].join("/")
      const { content, data, excerpt } = grayMatter.read(path, {
        excerpt: true,
      })
      const html = marked(content)

      const post: Post = {
        paths: [group, slug],
        title: data.title,
        subtitle: data.subtitle || "",
        date: dayjs(data.date).format("YYYY-MM-DD"),
        category: data.category,
        tags: data.tags,
        seriesId: data.seriesId || null,
        content: content,
        html: html,
        excerpt: htmlParse(html).innerText.trim().slice(0, 200),
      }

      Explorer.posts.push(post)
    }

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
