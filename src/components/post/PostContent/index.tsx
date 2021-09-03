import Markdown from "@/components/Markdown"
import { Post } from "@/types/post"

import cls from "./index.module.scss"

type OwnProps = {
  post: Post
}

type Props = OwnProps

const _PostContent = (props: Props) => {
  const { post } = props
  return (
    <div className={cls.root}>
      <Markdown className={cls.content} markdown={post.markdown} />
    </div>
  )
}

const PostContent = _PostContent

export default PostContent
