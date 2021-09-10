import { Fragment } from "react"

import PostListItem from "@/components/post-list/PostListItem"
import { Post } from "@/types/post"

import cls from "./PostList.module.scss"

type OwnProps = {
  posts: Post[]
}

type Props = OwnProps

const _PostList = (props: Props) => {
  const { posts } = props

  return (
    <ul className={cls.root}>
      {posts.map((post, i) => (
        <Fragment key={post.slug}>
          <PostListItem post={post} />
        </Fragment>
      ))}
    </ul>
  )
}

const PostList = _PostList

export default PostList
