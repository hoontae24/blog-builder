import Head from "next/head"

type OwnProps = {
  title?: string
}

type Props = OwnProps

const _PageHead = (props: Props) => {
  const { title } = props
  return <Head>{title && <title>{title}</title>}</Head>
}

const PageHead = _PageHead

export default PageHead
