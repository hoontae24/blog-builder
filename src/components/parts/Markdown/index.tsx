import clsx from "clsx"
import hljs from "highlight.js"
import marked from "marked"
import { memo, useEffect } from "react"

import { HasClassName } from "@/types/component"

import "github-markdown-css"
import "highlight.js/styles/github.css"

import cls from "./index.module.scss"

type OwnProps = {
  markdown: string
}

type Props = OwnProps & HasClassName

const _Markdown = (props: Props) => {
  const { className } = props

  const html = marked(props.markdown)

  useEffect(() => {
    hljs.highlightAll()
  }, [])

  return (
    <span
      className={clsx("markdown-body", cls.markdown, className)}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

const Markdown = memo(_Markdown)

export default Markdown
