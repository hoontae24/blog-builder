import { PropsWithChildren } from "react"

import Appbar from "@/components/layout/Appbar"
import Container from "@/components/layout/Container"
import Footer from "@/components/layout/Footer"

type OwnProps = {}

type Props = PropsWithChildren<OwnProps>

const _PageBody = (props: Props) => {
  const { children } = props

  return (
    <>
      <Appbar />
      <Container>{children}</Container>
      <Footer />
    </>
  )
}

const PageBody = _PageBody

export default PageBody
