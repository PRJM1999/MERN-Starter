import {useState, useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import {createGoal} from '../features/goals/goalSlice';
import {useNavigate} from 'react-router-dom'
import React, {Component} from 'react'
import DropDown from './DropDown';
import DateForm from './DateForm';
import Select from 'react-select';
import places from '../data/hiking.json';
import DatePicker from "react-datepicker";



export default function GoalForm() {
    

    
    const [text, setText] = useState('')
    const dispatch = useDispatch()
    const [startDate, setStartDate] = useState(new Date());
    const [dropdvalue, setdropValue] = useState();


    const {user} = useSelector((state) => state.auth)

    const onSubmit = e => {
        e.preventDefault()
        const data = [text, dropdvalue.name, (startDate.getDate() + "/" + startDate.getMonth() + "/" + startDate.getFullYear())]
        dispatch(createGoal(data))
        setText('')
        console.log(data)
    }
    
    useEffect(() => {
        if(!user) {
            console.log('Goal Form useEffect')
          return
        }
      }, [user, dispatch, onSubmit])


    if(!user) {
        console.log('Goal Form useEffect')
        return
    }

  return (
    <>
    <section className='form'>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="text">Trips</label>
                <input type="text" name="text" id="text" value={text} onChange={(e) => setText(e.target.value)}/>
                {/* Date Form & dropdown not currently working - will next next release */}
                {/* <DateForm dropdvalue={value}/> */}
                {/* <DropDown /> */}
                <Select
                    className="input-drop"
                    name="accounts"
                    options={places}
                    value={dropdvalue}
                    onChange={setdropValue}
                    getOptionLabel={(places) => places.label}
                    getOptionValue={(places) => places.value} // It should be unique value in the options. E.g. ID
                />
                <div>
                    <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} /> 
                </div>
            </div>
            <div className="form-group">
                <button className="btn btn-block" type='submit'>Add Trip</button>
            </div>
        </form>
    </section>
    </>
  )
}

