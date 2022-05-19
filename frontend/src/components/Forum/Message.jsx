import React from 'react'
import './Message.css'

const MessageBox = ({author, body }) => {
  return (
    <div className='message__container'>
        <div className='message__row'>
          <p className='message__author'>{author}</p>
        </div>
        <p className='message__body'>{body}</p>
    </div>
  )
}

export default MessageBox

