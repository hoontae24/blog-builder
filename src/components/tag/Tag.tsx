import clsx from "clsx"

import { HasClassName } from "@/types/component"

import cls from "./Tag.module.scss"

type OwnProps = {
  tag: string
}

type Props = OwnProps & HasClassName

const _Tag = (props: Props) => {
  const { className, tag } = props

  return <span className={clsx(cls.root, className)}>{tag}</span>
}

const Tag = _Tag

export default Tag
