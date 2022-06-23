import Image from 'next/image'
import styled from 'styled-components'

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export default function Spinner() {
  return (
    <SpinnerWrapper>
      <Image src="/spinner.svg" alt="" width="100" height="70" />
    </SpinnerWrapper>
  )
}
