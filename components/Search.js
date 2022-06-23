import { useState } from 'react'
import styled from 'styled-components'

const SearchWrapper = styled.div`
  padding: 100px 0 20px 0;
`

const Input = styled.input`
  max-width: 238.2px;
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

const Button = styled.button`
  border: none;
  border-radius: 6px;
  padding: 4px 12px;
  font-size: 12px;
  height: 32px;
  width: 71px;
  color: #fff;
  margin-left: 8px;
  background-color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  box-sizing: border-box;
`

export default function Search() {
  const [keyword, setKeyword] = useState('')

  const handleChange = (e) => {
    setKeyword(e.target.value)
  }

  const handleSearch = () => {
    // console.log('---->Search')
  }

  return (
    <SearchWrapper>
      <Input
        type="text"
        placeholder="Find a repository…"
        value={keyword}
        onChange={handleChange}
      />
      <Button onClick={handleSearch}>Search</Button>
    </SearchWrapper>
  )
}
