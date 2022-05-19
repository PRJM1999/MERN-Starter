// import './Message.css';
import { setMessage } from '../../features/messages/messageSlice'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

function MessageForm() {
  const [text, setText] = useState('')
  
  const dispatch = useDispatch()

  const onSubmit = e => {
      e.preventDefault()

      dispatch(setMessage({text}))
      setText('')
  }

  return (
    <div>
      <form className="form__container" onSubmit={onSubmit} >
          <input type='text' name='messageText' id='messageText' value={text} onChange={(e) => setText(e.target.value)} />
          <button type="submit" className='button-board'>Submit</button>
      </form>
    </div>
  )
}

export default MessageForm
