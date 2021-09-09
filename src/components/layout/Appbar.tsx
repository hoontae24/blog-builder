import Link from "next/link"

import { useEnv } from "@/hooks/env"

import cls from "./Appbar.module.scss"

type OwnProps = {}

type Props = OwnProps

const _Appbar = (props: Props) => {
  const env = useEnv()

  return (
    <div className={cls.root}>
      <div className={cls.container}>
        <Link href="/">
          <a className={cls.logo}>{env.BLOG_TITLE}</a>
        </Link>
        <div className={cls.navs}>
          <a href={env.GITHUB_URL} target="_blank" title="Github">
            <img
              className={cls["nav-img"]}
              src={`${env.BASE_PATH}/assets/GitHub-Mark-32px.png`}
              alt="Github"
              width={30}
              height={30}
            />
          </a>
        </div>
      </div>
    </div>
  )
}

const Appbar = _Appbar

export default Appbar
