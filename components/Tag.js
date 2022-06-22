import styled from 'styled-components'

const TagContainer = styled.div`
  padding: 3px 12px;
  display: inline-block;
  margin-right: 6px;
  margin-bottom: 4px;
  border-radius: 24px;
  color: ${(props) => props.theme.colors.primary};
  background-color: #ddf4ff;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: ${(props) => props.theme.colors.primary};
  }
`

export default function Tag({ text }) {
  return <TagContainer>{text}</TagContainer>
}
