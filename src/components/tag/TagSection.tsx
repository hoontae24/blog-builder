import clsx from "clsx"

import Tag from "@/components/tag/Tag"
import { HasClassName } from "@/types/component"

import cls from "./TagSection.module.scss"

type OwnProps = {
  tags: string[]
} & HasClassName

type Props = OwnProps

const _TagSection = (props: Props) => {
  const { className, tags } = props

  return (
    <div className={clsx(cls.root, className)}>
      {tags.map((tag) => (
        <Tag key={tag} className={cls.tag} tag={tag} />
      ))}
    </div>
  )
}

const TagSection = _TagSection

export default TagSection
