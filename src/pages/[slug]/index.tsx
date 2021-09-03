import { GetStaticPaths, GetStaticProps } from "next"

import PageLayout from "@/components/PageLayout"
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
  slug: string
}

const PostPage = (props: Props) => {
  const { post } = props

  return (
    <PageLayout>
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
