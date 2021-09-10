import Head from "next/head"

import { useEnv } from "@/hooks/env"

type OwnProps = {
  title?: string
}

type Props = OwnProps

const _PageHead = (props: Props) => {
  const env = useEnv()
  const { title = env.BLOG_TITLE } = props

  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}

const PageHead = _PageHead

export default PageHead
