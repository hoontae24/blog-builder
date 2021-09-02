import Markdown from "@/components/Markdown"
import { Post } from "@/types/post"

type OwnProps = {
  post: Post
}

type Props = OwnProps

const _PostContent = (props: Props) => {
  const { post } = props
  return (
    <div>
      <Markdown markdown={post.markdown} />
    </div>
  )
}

const PostContent = _PostContent

export default PostContent
