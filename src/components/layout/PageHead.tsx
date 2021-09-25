import Head from "next/head"
import { NextSeo } from "next-seo"

import config from "@/config.json"

type OwnProps = {
  url?: string
  title?: string
  description?: string
  author?: string
  image?: string
  tags?: string[]
}

type Props = OwnProps

const _PageHead = (props: Props) => {
  const {
    url = config.site_url,
    title = config.site_name,
    description,
    author = config.author,
    image,
    tags,
  } = props

  return (
    <>
      <Head>
        {tags && <meta name="keywords" content={tags.join(", ")} />}
        <meta name="author" content={author} />

        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${config.ga_id}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: [
              `window.dataLayer = window.dataLayer || [];`,
              `function gtag(){dataLayer.push(arguments);}`,
              `gtag('js', new Date());`,
              `gtag('config', '${config.ga_id}');`,
            ].join("\n"),
          }}
        />
      </Head>
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
