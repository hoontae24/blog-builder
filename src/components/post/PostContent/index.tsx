import clsx from "clsx"

import Markdown from "@/components/parts/Markdown"
import { HasClassName } from "@/types/component"
import { Post } from "@/types/post"

import cls from "./index.module.scss"

type OwnProps = {
  post: Post
} & HasClassName

type Props = OwnProps

const _PostContent = (props: Props) => {
  const { className, post } = props
  return (
    <div className={clsx(cls.root, className)}>
      <Markdown className={cls.content} markdown={post.markdown} />
    </div>
  )
}

const PostContent = _PostContent

export default PostContent
