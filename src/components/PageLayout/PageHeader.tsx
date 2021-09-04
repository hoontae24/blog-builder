import Head from "next/head"

type OwnProps = {
  title?: string
}

type Props = OwnProps

const _PageHeader = (props: Props) => {
  const { title } = props
  return <Head>{title && <title>{title}</title>}</Head>
}

const PageHeader = _PageHeader

export default PageHeader
