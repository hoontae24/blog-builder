import clsx from "clsx"
import { useEffect, useRef } from "react"

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

  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof document !== "undefined" && rootRef.current) {
      const attrs = {
        src: "https://utteranc.es/client.js",
        repo: config.utterances.repo,
        "issue-term": term,
        label: config.utterances.label,
        theme: config.utterances.theme,
        crossOrigin: "anonymous",
        async: "true",
      }

      const script = document.createElement("script")

      Object.entries(attrs).forEach(([key, value]) => {
        script.setAttribute(key, value)
      })

      rootRef.current.appendChild(script)

      return () => {
        rootRef.current?.removeChild(script)
      }
    }
  }, [term])

  return <div className={clsx(cls.root, className)} ref={rootRef} />
}

const PostComment = _PostComment

export default PostComment
