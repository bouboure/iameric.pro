import React from 'react'

type ToastProps = {
  message: string
  type?: 'success' | 'error' | 'info'
}

const Toast: React.FC<ToastProps> = ({ message, type = 'info' }) => {
  const bgColor = type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500'

  return (
    <div className={`fixed bottom-4 right-4 ${bgColor} text-white px-4 py-2 rounded shadow-lg`}>
      {message}
    </div>
  )
}

export default Toast