import clsx from "clsx"

import config from "@/config.json"
import { HasClassName } from "@/types/component"
import { Post } from "@/types/post"

import cls from "./index.module.scss"

type OwnProps = {
  post: Post
} & HasClassName

type Props = OwnProps

const _PostComment = (props: Props) => {
  const { className, post } = props
  const term = [post.category, post.slug].join("/")
  return (
    <div
      className={clsx(cls.root, className)}
      dangerouslySetInnerHTML={{
        __html: [
          `<script`,
          `  src="https://utteranc.es/client.js"`,
          `  repo="${config.utterances.repo}"`,
          `  issue-term="${term}"`,
          `  label="${config.utterances.label}"`,
          `  theme="${config.utterances.theme}"`,
          `  crossorigin="anonymous"`,
          `  async`,
          `/>`,
        ].join("\n"),
      }}
    />
  )
}

const PostComment = _PostComment

export default PostComment
