import Tag from "@/components/tag/Tag"

type OwnProps = {
  tags: string[]
}

type Props = OwnProps

const _TagSection = (props: Props) => {
  const { tags } = props

  return (
    <span>
      {tags.map((tag) => (
        <Tag key={tag} tag={tag} />
      ))}
    </span>
  )
}

const TagSection = _TagSection

export default TagSection
