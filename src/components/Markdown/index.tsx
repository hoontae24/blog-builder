import hljs from "highlight.js"
import marked from "marked"
import { memo, useEffect } from "react"

import "github-markdown-css"
import "highlight.js/styles/github.css"

type OwnProps = {
  markdown: string
}

type Props = OwnProps

const _Markdown = (props: Props) => {
  const html = marked(props.markdown)

  useEffect(() => {
    hljs.highlightAll()
  }, [])

  return (
    <span
      className="markdown-body"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

const Markdown = memo(_Markdown)

export default Markdown
