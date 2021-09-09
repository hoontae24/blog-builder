import Tag from "@/components/tag/Tag"

import cls from "./TagSection.module.scss"

type OwnProps = {
  tags: string[]
}

type Props = OwnProps

const _TagSection = (props: Props) => {
  const { tags } = props

  return (
    <span>
      {tags.map((tag) => (
        <Tag key={tag} className={cls.tag} tag={tag} />
      ))}
    </span>
  )
}

const TagSection = _TagSection

export default TagSection
