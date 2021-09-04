import { PropsWithChildren } from "react"

import PageHeader from "@/components/PageLayout/PageHeader"

import cls from "./index.module.scss"

type OwnProps = {
  title?: string
}

type Props = PropsWithChildren<OwnProps>

const _PageLayout = (props: Props) => {
  const { title, children } = props
  return (
    <>
      <PageHeader title={title} />
      <div className={cls.root}>
        <div className={cls.appbar}>appbar</div>
        <div className={cls.container}>{children}</div>
        <div className={cls.footer}>footer</div>
      </div>
    </>
  )
}

const PageLayout = _PageLayout

export default PageLayout
