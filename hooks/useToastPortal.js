import { useState, useEffect } from 'react'
import uuid from '../utils/uuid'

export default function useToastPortal() {
  const [loaded, setLoaded] = useState(false)
  const [portalId] = useState(`toast-portal-${uuid()}`)

  useEffect(() => {
    const div = document.createElement('div')
    div.id = portalId
    div.style = 'position: absolute; top: 10px; right: 10px;'
    document.getElementsByTagName('body')[0].prepend(div)
    setLoaded(true)

    return () => document.getElementsByTagName('body')[0].removeChild
  }, [portalId])

  // two things we will need from this hook
  return { loaded, portalId }
}
