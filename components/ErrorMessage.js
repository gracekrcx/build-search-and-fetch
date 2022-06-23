import styled from 'styled-components'

const ErrorMessageWrapper = styled.div`
  width: 100%;
  max-height: 200px;
  margin: 0 auto;
  text-align: center;
  line-height: 200px;
  font-size: 14px;
  color: #57606a;
`

export default function ErrorMessage() {
  return <ErrorMessageWrapper>無查詢結果 Sorry~</ErrorMessageWrapper>
}
