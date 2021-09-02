import dayjs from "dayjs"

import TagSection from "@/components/tag/TagSection"
import { Post } from "@/types/post"

type OwnProps = {
  post: Post
}

type Props = OwnProps

const _PostHeader = (props: Props) => {
  const { post } = props
  const { title, date, category, tags } = post

  return (
    <div>
      <h1>{title}</h1>
      <div>
        <span>{category}</span>
        <span>{dayjs(date).format("YYYY. M. D.")}</span>
        <TagSection tags={tags} />
      </div>
    </div>
  )
}

const PostHeader = _PostHeader

export default PostHeader
