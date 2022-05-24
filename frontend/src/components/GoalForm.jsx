import {useState, useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import {createGoal} from '../features/goals/goalSlice';
import {useNavigate} from 'react-router-dom'
import React from 'react'
import DropDown from './DropDown';
import DateForm from './DateForm';



export default function GoalForm() {

    const [text, setText] = useState('')
    const dispatch = useDispatch()

    const onSubmit = e => {
        e.preventDefault()
        dispatch(createGoal({text}))
        setText('')
    }

    const {user} = useSelector((state) => state.auth)

    useEffect(() => {
        if(!user) {
            console.log('Goal Form useEffect')
          return
        }
      }, [user, dispatch, onSubmit])
    

  return (
    <>
    <section className='form'>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="text">Trips</label>
                <input type="text" name="text" id="text" value={text} onChange={(e) => setText(e.target.value)}/>
                {/* Date Form & dropdown not currently working - will next next release */}
                <DateForm />
                <DropDown />
            </div>
            <div className="form-group">
                <button className="btn btn-block" type='submit'>Add Trip</button>
            </div>
        </form>
    </section>
    </>
  )
}

