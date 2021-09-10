import dayjs from "dayjs"

export const formatPostDate = (date: string | Date): string => {
  return dayjs(date).format("YYYY. M. D.")
}
