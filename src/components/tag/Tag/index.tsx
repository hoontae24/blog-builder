import { HasClassName } from "@/types/component"

type OwnProps = {
  tag: string
}

type Props = OwnProps & HasClassName

const _Tag = (props: Props) => {
  const { className, tag } = props

  return <span className={className}>{tag}</span>
}

const Tag = _Tag

export default Tag
