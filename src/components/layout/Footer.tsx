import Container from "@/components/layout/Container"

import cls from "./Footer.module.scss"

type OwnProps = {}

type Props = OwnProps

const _Footer = (props: Props) => {
  return (
    <div className={cls.root}>
      <Container>
        <span>© hoontae24. All rights reserved.</span>
      </Container>
    </div>
  )
}

const Footer = _Footer

export default Footer
