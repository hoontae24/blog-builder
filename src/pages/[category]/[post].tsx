import { GetStaticPaths, GetStaticProps } from "next"

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
  return <div>{props.post?.title}</div>
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
  const posts = await Explorer.getPosts()

  const post = posts.find((p) => p.paths[0] === category && p.paths[1] === slug)

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
