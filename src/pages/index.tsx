import { GetStaticProps } from "next"

import PageLayout from "@/components/layout/PageLayout"
import PostList from "@/components/post-list/PostList"
import { Explorer } from "@/libs/explorer"
import { Post } from "@/types/post"

import cls from "./index.module.scss"

type Props = {
  posts: Post[]
}

const IndexPage = (props: Props) => {
  const { posts } = props

  return (
    <PageLayout>
      <div className={cls.root}>
        <PostList posts={posts} />
      </div>
    </PageLayout>
  )
}

export default IndexPage

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await Explorer.getPosts()

  return {
    props: { posts: posts },
  }
}
