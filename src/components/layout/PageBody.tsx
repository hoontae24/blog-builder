import { PropsWithChildren } from "react"

import Appbar from "@/components/layout/Appbar"
import Container from "@/components/layout/Container"
import Footer from "@/components/layout/Footer"

import cls from "./PageBody.module.scss"

type OwnProps = {}

type Props = PropsWithChildren<OwnProps>

const _PageBody = (props: Props) => {
  const { children } = props

  return (
    <>
      <Appbar />
      <Container className={cls.container}>{children}</Container>
      <Footer />
    </>
  )
}

const PageBody = _PageBody

export default PageBody
