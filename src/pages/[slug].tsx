import { GetStaticPaths, GetStaticProps } from "next"

import Markdown from "@/components/Markdown"
import { Explorer } from "@/libs/explorer"
import { Post } from "@/types/post"

type Props = {
  post: Post | null
}

type Params = {
  slug: string
}

const PostPage = (props: Props) => {
  const { post } = props

  if (!post) return null
  return (
    <div>
      <Markdown markdown={post.markdown} />
    </div>
  )
}

export default PostPage

export const getStaticPaths: GetStaticPaths<Params> = async (ctx) => {
  const posts = await Explorer.getPosts()

  return {
    paths: posts.map((post) => ({
      params: { slug: post.slug },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props, Params> = async (ctx) => {
  const { slug } = ctx.params || {}
  const post = await Explorer.getPostBySlug(slug || "")

  return {
    props: { post: post || null },
    ...(post ? {} : { redirect: { destination: "/404" } }),
  }
}
