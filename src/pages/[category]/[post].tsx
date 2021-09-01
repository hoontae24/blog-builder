import { GetStaticPaths, GetStaticProps } from "next"

import Markdown from "@/components/Markdown"
import { Explorer } from "@/libs/explorer"
import { Post } from "@/types/post"

type Props = {
  post: Post | null
}

type Params = {
  category: string
  post: string
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
      params: { category: post.paths[0], post: post.paths[1] },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props, Params> = async (ctx) => {
  const { category, post: slug } = ctx.params || {}
  const post = await Explorer.getPostByPath([category || "", slug || ""])

  if (!post) {
    return {
      props: { post: null },
      redirect: {
        destination: "/404",
      },
    }
  }
  return {
    props: { post: post },
  }
}
