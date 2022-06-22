import styled from 'styled-components'
import { MOBILE } from '../constants/style'

const Bg = styled.div`
  background: rgb(246, 248, 250);
`

const ContainerWrapper = styled.div`
  max-width: 700px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 8px;
`

export default function Container({ children }) {
  return (
    <Bg>
      <ContainerWrapper>{children}</ContainerWrapper>
    </Bg>
  )
}
