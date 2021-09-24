import Head from "next/head"

import OpenGraphs from "@/components/OpenGraphs"
import config from "@/config.json"

type OwnProps = {
  url?: string
  title?: string
  description?: string
  image?: string
}

type Props = OwnProps

const _PageHead = (props: Props) => {
  const { url, title = config.site_name, description, image } = props

  return (
    <Head>
      <title>{title}</title>

      <OpenGraphs
        url={url}
        title={title}
        description={description}
        image={image}
      />
    </Head>
  )
}

const PageHead = _PageHead

export default PageHead
