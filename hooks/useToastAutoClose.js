import { useState, useEffect } from 'react'

export default function useToastAutoClose({
  toasts,
  setToasts,
  autoClose,
  autoCloseTime,
}) {
  const [removing, setRemoving] = useState('')
  useEffect(() => {
    if (removing) {
      setToasts((t) => t.filter((i) => i.id !== removing))
    }
  }, [removing, setToasts])

  useEffect(() => {
    if (autoClose && toasts.length) {
      const id = toasts[toasts.length - 1].id
      setTimeout(() => {
        setRemoving(id)
      }, autoCloseTime)
    }
  }, [toasts, autoCloseTime, autoClose])
}
