import styled from 'styled-components'

export const SearchWrapper = styled.div`
  padding: 100px 0 20px 0;
`

export const Input = styled.input`
  width: 300px;
  height: 32px;
  padding: 5px 12px;
  background-color: #f6f8fa;
  border: 1px solid #d0d7de;
  border-radius: 6px;
  outline: none;
  box-sizing: border-box;
  font-size: 14px;
  color: #24292f;
`

export const Button = styled.button`
  border: none;
  border-radius: 6px;
  padding: 4px 12px;
  font-size: 12px;
  height: 32px;
  width: 71px;
  color: #fff;
  margin-left: 8px;
  background-color: ${(props) =>
    props.disabled ? '#9b9b9b' : props.theme.colors.primary};
  cursor: ${(props) => (props.disabled ? 'wait' : 'pointer')};
  box-sizing: border-box;
`
