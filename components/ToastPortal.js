import { useState, forwardRef, useImperativeHandle } from 'react'
import useToastPortal from '../hooks/useToastPortal'
import PropTypes from 'prop-types'
import ReactDom from 'react-dom'
import styled from 'styled-components'
import Toast from '../components/Toast'
import uuid from '../utils/uuid'
import useToastAutoClose from '../hooks/useToastAutoClose'

const ToastContainer = styled.div`
  cursor: pointer;
`

const ToastPortal = ({ autoClose, autoCloseTime = 5000 }, ref) => {
  const [toasts, setToasts] = useState([])
  const { loaded, portalId } = useToastPortal()

  const removeToast = (id) => {
    setToasts(toasts.filter((i) => i.id !== id))
  }
  // custom hook: 自動移除 toast
  useToastAutoClose({
    toasts,
    setToasts,
    autoClose,
    autoCloseTime,
  })

  // 如何從 app.js 呼叫，增加這個檔案的 toasts
  useImperativeHandle(ref, () => ({
    addMessage(toast) {
      setToasts([...toasts, { ...toast, id: uuid() }])
    },
  }))

  return loaded
    ? ReactDom.createPortal(
        <ToastContainer>
          {toasts.map((i) => (
            <Toast key={i.id} onClose={() => removeToast(i.id)} {...i} />
          ))}
        </ToastContainer>,
        document.getElementById(portalId)
      )
    : null
}

ToastPortal.propTypes = {
  autoClose: PropTypes.func,
  autoCloseTime: PropTypes.string,
}

export default forwardRef(ToastPortal)
