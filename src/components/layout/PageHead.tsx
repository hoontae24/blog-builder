import Head from "next/head"

import config from "@/config.json"

type OwnProps = {
  title?: string
}

type Props = OwnProps

const _PageHead = (props: Props) => {
  const { title = config.site_name } = props

  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}

const PageHead = _PageHead

export default PageHead
