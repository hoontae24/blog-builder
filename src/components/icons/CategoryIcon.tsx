import clsx from "clsx"
import { memo } from "react"

import { HasClassName } from "@/types/component"

type OwnProps = {}

type Props = OwnProps & HasClassName

const _CategoryIcon = (props: Props) => {
  return <i className={clsx("fas fa-sitemap", props.className)} />
}

const CategoryIcon = memo(_CategoryIcon)

export default CategoryIcon
