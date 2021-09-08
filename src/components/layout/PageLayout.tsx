import { PropsWithChildren } from "react"

import PageBody from "@/components/layout/PageBody"
import PageHead from "@/components/layout/PageHead"

type OwnProps = {
  title?: string
}

type Props = PropsWithChildren<OwnProps>

const _PageLayout = (props: Props) => {
  const { title, children } = props
  return (
    <>
      <PageHead title={title} />
      <PageBody>{children}</PageBody>
    </>
  )
}

const PageLayout = _PageLayout

export default PageLayout
