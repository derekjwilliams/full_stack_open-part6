import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector((state) => {
    return state.notification
  })
  const style = {
    border: '3px solid #2a7a4b',
    backgroundColor: '#d3e3da',
    padding: 10,
  }
  if (!notification.message) {
    return null
  }
  return <div style={style}>{notification.message}</div>
}

export default Notification
