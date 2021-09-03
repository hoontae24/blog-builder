import clsx from "clsx"
import dayjs from "dayjs"

import { Post } from "@/types/post"

import cls from "./index.module.scss"

type OwnProps = {
  post: Post
}

type Props = OwnProps

const _PostHeader = (props: Props) => {
  const { post } = props
  const { title, date, category } = post

  return (
    <div className={cls.root}>
      <h1 className={cls.title}>{title}</h1>
      <hr className={cls.bottomLine} />
      <div className={cls.metaContainer}>
        <span className={clsx(cls.meta, cls.date)}>
          {dayjs(date).format("YYYY. M. D.")}
        </span>
        <span className={clsx(cls.meta, cls.category)}>{category}</span>
      </div>
    </div>
  )
}

const PostHeader = _PostHeader

export default PostHeader
