import {useState, useSelector, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {createGoal} from '../features/goals/goalSlice';
import places from '../data/hiking.json'
import React from 'react'
import Select from 'react-select'
import DropDown from './DropDown';
import DateForm from './DateForm';



export default function GoalForm() {

    const onSubmit = e => {
        e.preventDefault()
        dispatch(createGoal({text}))
        setText('')
    }

    useEffect(() => {},);

    const [text, setText] = useState('')

    const dispatch = useDispatch()

  return (
    <>
    <section className='form'>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="text">Trips</label>
                <input type="text" name="text" id="text" value={text} onChange={(e) => setText(e.target.value)}/>
                {/* Date Form & dropdown not currently working - will next next release */}
                {/* <DateForm /> */}
                {/* <DropDown /> */}
            </div>
            <div className="form-group">
                <button className="btn btn-block" type='submit'>Add Trip</button>
            </div>
        </form>
    </section>
    </>
  )
}

