import clsx from "clsx"

import { CalendarAltIcon, CategoryIcon } from "@/components/icons"
import { formatPostDate } from "@/libs/post"
import { HasClassName } from "@/types/component"
import { Post } from "@/types/post"

import cls from "./index.module.scss"

type OwnProps = {
  post: Post
} & HasClassName

type Props = OwnProps

const _PostHeader = (props: Props) => {
  const { className, post } = props
  const { title, date, category } = post

  return (
    <div className={clsx(cls.root, className)}>
      <h1 className={cls.title}>{title}</h1>
      <hr className={cls.bottomLine} />
      <div className={cls.metaContainer}>
        <span className={clsx(cls.meta, cls.date)} title="작성일">
          <CalendarAltIcon className={cls.icon} />
          {formatPostDate(date)}
        </span>
        <span className={clsx(cls.meta, cls.separator)}></span>
        <span className={clsx(cls.meta, cls.category)} title="카테고리">
          <CategoryIcon className={cls.icon} />
          {category}
        </span>
      </div>
    </div>
  )
}

const PostHeader = _PostHeader

export default PostHeader
