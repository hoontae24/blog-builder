import Link from "next/link"

import { Post } from "@/types/post"

import cls from "./PostListItem.module.scss"
import TagSection from "@/components/tag/TagSection"

type OwnProps = {
  post: Post
}

type Props = OwnProps

const _PostListItem = (props: Props) => {
  const { post } = props

  return (
    <Link href={`/${post.slug}`}>
      <a className={cls.anchor}>
        <li className={cls.root}>
          <div className={cls.card}>
            <div className={cls.thumbnailContainer}>
              <img className={cls.thumbnail} />
            </div>
            <div className={cls.content}>
              <h5 className={cls.title}>{post.title}</h5>
              <p className={cls.description}>{post.excerpt}</p>
              <div className={cls.grow} />
              <div className={cls.meta}>
                <span className={cls.date}>{post.date}</span>
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
