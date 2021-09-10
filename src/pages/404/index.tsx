import PageLayout from "@/components/layout/PageLayout"
import { useEnv } from "@/hooks/env"

import cls from "./index.module.scss"

type OwnProps = {}

type Props = OwnProps

const _NotFound = (props: Props) => {
  const env = useEnv()

  return (
    <PageLayout>
      <div className={cls.root}>
        <img
          src={`${env.BASE_PATH}/assets/not-found.png`}
          alt="Not Found"
          width={250}
          height={250}
        />
        <p>존재하지 않는 페이지입니다.</p>
      </div>
    </PageLayout>
  )
}

const NotFound = _NotFound

export default NotFound
