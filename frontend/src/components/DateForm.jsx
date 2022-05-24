import {useState, useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import DatePicker from "react-datepicker";
import {useNavigate} from 'react-router-dom'
import "react-datepicker/dist/react-datepicker.css";

function DateForm() {

    const [startDate, setStartDate] = useState(new Date());
    const {user} = useSelector((state) => state.auth)
    

    if(!user) {
      console.log('Goal Form useEffect')
      return
  }

  return (
    <div>
      <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} /> 
    </div>
  )
}

export default DateForm
