import { GetStaticPaths, GetStaticProps } from "next"

import PostHeader from "@/components/post/PostHeader"
import PostContent from "@/components/post/PostContent"
import { Explorer } from "@/libs/explorer"
import { Post } from "@/types/post"
import PageLayout from "@/components/PageLayout"

type Props = {
  post: Post
}

type Params = {
  slug: string
}

const PostPage = (props: Props) => {
  const { post } = props

  return (
    <PageLayout>
      <PostHeader post={post} />
      <PostContent post={post} />
    </PageLayout>
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

  if (!post) return { notFound: true }
  return {
    props: { post: post },
  }
}
