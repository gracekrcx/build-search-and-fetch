import { useRef } from 'react'

const useCountRenders = () => {
  const count = useRef(0)
  console.log('renders:->', count.current++)
}

export default useCountRenders
