import Link from "next/link"

import { useEnv } from "@/hooks/env"

import cls from "./Appbar.module.scss"

type OwnProps = {}

type Props = OwnProps

const _Appbar = (props: Props) => {
  const env = useEnv()

  const navs = [
    { href: env.GITHUB_URL, content: <a target="_blank">GITHUB</a> },
  ]

  return (
    <div className={cls.root}>
      <div className={cls.container}>
        <Link href="/">
          <a className={cls.logo}>{env.BLOG_TITLE}</a>
        </Link>
        <div className={cls.navs}>
          {navs.map(
            (nav) => nav.href && <Link href={nav.href}>{nav.content}</Link>
          )}
        </div>
      </div>
    </div>
  )
}

const Appbar = _Appbar

export default Appbar
