import { PropsWithChildren } from "react"

import PageBody from "@/components/layout/PageBody"
import PageHead from "@/components/layout/PageHead"

type OwnProps = {
  url?: string
  title?: string
  description?: string
  image?: string
}

type Props = PropsWithChildren<OwnProps>

const _PageLayout = (props: Props) => {
  const { url, title, description, image, children } = props
  return (
    <>
      <PageHead
        url={url}
        title={title}
        description={description}
        image={image}
      />
      <PageBody>{children}</PageBody>
    </>
  )
}

const PageLayout = _PageLayout

export default PageLayout
