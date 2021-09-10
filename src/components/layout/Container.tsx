import clsx from "clsx"
import { PropsWithChildren } from "react"

import { HasClassName } from "@/types/component"

import cls from "./Container.module.scss"

type OwnProps = {}

type Props = PropsWithChildren<OwnProps> & HasClassName

const _Container = (props: Props) => {
  const { className, children } = props
  return <div className={clsx(cls.root, className)}>{children}</div>
}

const Container = _Container

export default Container
