import './error-message.styles.scss'

const ErrorMessage = ({error}) => {
  const {
    msg,
    toggle
  } = error
  return (
    <div className={`error-message ${toggle}`}>
      {msg}
    </div>
  )
}

export default ErrorMessage;
