import { useNotificationValue } from '../NotificationContext'

const Notification = () => {
  const style = {
    border: '3px solid #2a7a4b',
    backgroundColor: '#d3e3da',
    padding: 10,
    marginBottom: 5,
  }
  const notificationValue = useNotificationValue()
  return (
    true == notificationValue.visible && (
      <div style={style}>{notificationValue.message}</div>
    )
  )
}

export default Notification
