import { PropsWithChildren } from "react"

import cls from "./Container.module.scss"

type OwnProps = {}

type Props = PropsWithChildren<OwnProps>

const _Container = (props: Props) => {
  const { children } = props
  return <div className={cls.root}>{children}</div>
}

const Container = _Container

export default Container
