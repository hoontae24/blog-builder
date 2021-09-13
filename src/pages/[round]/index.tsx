import { GetStaticPaths, GetStaticProps } from "next"

import PageLayout from "@/components/layout/PageLayout"
import PostHeader from "@/components/post/PostHeader"
import PostContent from "@/components/post/PostContent"
import TagSection from "@/components/tag/TagSection"
import { Explorer } from "@/libs/explorer"
import { Post } from "@/types/post"

import cls from "./index.module.scss"

type Props = {
  post: Post
}

type Params = {
  round: string
}

const PostPage = (props: Props) => {
  const { post } = props

  return (
    <PageLayout title={post.title}>
      <div className={cls.root}>
        <PostHeader post={post} />
        <PostContent post={post} />
        <TagSection tags={post.tags} />
      </div>
    </PageLayout>
  )
}

export default PostPage

export const getStaticPaths: GetStaticPaths<Params> = async (ctx) => {
  const posts = await Explorer.getPosts()

  return {
    paths: posts.map((post) => ({
      params: { round: String(post.round) },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props, Params> = async (ctx) => {
  const { round } = ctx.params || {}
  const post = await Explorer.getPostByRound(Number(round) || 0)

  if (!post) return { notFound: true }
  return {
    props: { post: post },
  }
}
