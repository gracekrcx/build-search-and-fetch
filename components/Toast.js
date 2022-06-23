import styled from 'styled-components'

const ToastWrapper = styled.div`
  max-width: 350px;
  min-height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bgColor};
  color: #fff;
  margin-bottom: 6px;

  .message {
    font-size: 15px;
    padding: 0 20px;
  }
`

const bgColor = {
  success: '#83bd92',
  warning: '#bda883',
  error: '#bd8383',
  info: '#8398bd',
}

// 只有在 mode change 時 re-render
// 所以連續產生 10 個 mode: success 時，是不需要 re-render 的
// memoization
export default function Toast({ mode, onClose, message }) {
  return (
    <ToastWrapper onClick={onClose} bgColor={bgColor[mode]}>
      <div className="message">{message}</div>
    </ToastWrapper>
  )
}
