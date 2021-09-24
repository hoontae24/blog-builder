import config from "@/config.json"

type OwnProps = {
  url?: string
  title?: string
  description?: string
  image?: string
}

type Props = OwnProps

const OpenGraphs = (props: Props) => {
  const { title, url, image, description } = props
  return (
    <>
      <meta property="og:url" content={url || config.site_url} />
      <meta property="og:type" content="blog" />
      <meta property="og:site_name" content={config.site_name} />
      <meta property="og:title" content={title || config.site_name} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </>
  )
}

export default OpenGraphs
