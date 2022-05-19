import React, {useState, useEffect} from 'react'
import DatePicker from "react-datepicker";
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import "react-datepicker/dist/react-datepicker.css";

function DateForm() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [startDate, setStartDate] = useState(new Date());
    const {user} = useSelector((state) => state.auth);


  return (
    <div>
      <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} /> 
    </div>
  )
}

export default DateForm
