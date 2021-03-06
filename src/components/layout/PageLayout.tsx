import { PropsWithChildren } from "react"

import PageBody from "@/components/layout/PageBody"
import PageHead from "@/components/layout/PageHead"

type OwnProps = {
  url?: string
  title?: string
  description?: string
  author?: string
  image?: string
  tags?: string[]
}

type Props = PropsWithChildren<OwnProps>

const _PageLayout = (props: Props) => {
  const { url, title, description, image, tags, children } = props
  return (
    <>
      <PageHead
        url={url}
        title={title}
        description={description}
        image={image}
        tags={tags}
      />
      <PageBody>{children}</PageBody>
    </>
  )
}

const PageLayout = _PageLayout

export default PageLayout
