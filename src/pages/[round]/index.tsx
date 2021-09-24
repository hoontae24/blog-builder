import { GetStaticPaths, GetStaticProps } from "next"

import PageLayout from "@/components/layout/PageLayout"
import PostHeader from "@/components/post/PostHeader"
import PostContent from "@/components/post/PostContent"
import TagSection from "@/components/tag/TagSection"
import config from "@/config.json"
import { Explorer } from "@/libs/explorer"
import { Post } from "@/types/post"

import cls from "./index.module.scss"

type Props = {
  url: string
  post: Post
}

type Params = {
  round: string
}

const PostPage = (props: Props) => {
  const { url, post } = props

  return (
    <PageLayout
      url={url}
      title={post.title}
      description={post.excerpt}
      image={post.thumbnailUrl}
    >
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
  const url = `${config.site_url}/${round}`

  if (!post) return { notFound: true }
  return {
    props: { post: post, url: url },
  }
}
