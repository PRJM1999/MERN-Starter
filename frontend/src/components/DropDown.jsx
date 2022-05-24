import {useState, useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import places from '../data/hiking.json';

function DropDown() {
    const [dropdvalue, setdropValue] = useState();
    const {user} = useSelector((state) => state.auth);

    if(!user) {
      console.log('Goal Form useEffect')
      return
  }

    return (
        <Select
          className="input-drop"
          name="accounts"
          options={places}
          value={dropdvalue}
          onChange={setdropValue}
          getOptionLabel={(places) => places.label}
          getOptionValue={(places) => places.value} // It should be unique value in the options. E.g. ID
        />
    );
}

export default DropDown

