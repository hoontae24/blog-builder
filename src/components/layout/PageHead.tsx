import { NextSeo } from "next-seo"

import config from "@/config.json"

type OwnProps = {
  url?: string
  title?: string
  description?: string
  image?: string
  tags?: string[]
}

type Props = OwnProps

const _PageHead = (props: Props) => {
  const {
    url = config.site_url,
    title = config.site_name,
    description,
    image,
    tags,
  } = props

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          type: "blog",
          url: url,
          site_name: config.site_name,
          images: image ? [{ url: image }] : [],
          article: { tags },
        }}
      />
    </>
  )
}

const PageHead = _PageHead

export default PageHead
