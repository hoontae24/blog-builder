import Link from "next/link"

import TagSection from "@/components/tag/TagSection"
import { formatPostDate } from "@/libs/post"
import { Post } from "@/types/post"

import cls from "./PostListItem.module.scss"

type OwnProps = {
  post: Post
}

type Props = OwnProps

const _PostListItem = (props: Props) => {
  const { post } = props

  return (
    <Link href={`/${post.href}`}>
      <a className={cls.anchor}>
        <li className={cls.root}>
          <div className={cls.card}>
            {post.thumbnail && (
              <img className={cls.thumbnail} src={post.thumbnail} />
            )}
            <div className={cls.content}>
              <h5 className={cls.title} title={post.title}>
                {post.title}
              </h5>
              <p className={cls.description}>{post.excerpt}</p>
              <div className={cls.grow} />
              <div className={cls.meta}>
                <span className={cls.date}>{formatPostDate(post.date)}</span>
                <TagSection tags={post.tags} />
              </div>
            </div>
          </div>
          <hr />
        </li>
      </a>
    </Link>
  )
}

const PostListItem = _PostListItem

export default PostListItem
