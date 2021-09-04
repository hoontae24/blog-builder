import clsx from "clsx"
import { memo } from "react"

import { HasClassName } from "@/types/component"

type OwnProps = {}

type Props = OwnProps & HasClassName

const _CalendarAltIcon = (props: Props) => {
  return <i className={clsx("far fa-calendar-alt", props.className)} />
}

const CalendarAltIcon = memo(_CalendarAltIcon)

export default CalendarAltIcon
