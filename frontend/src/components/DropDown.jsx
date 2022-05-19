import React, {useSelector} from 'react'
import Select from 'react-select'
import places from '../data/hiking.json'

function DropDown() {
    const [dropdvalue, setdropValue] = React.useState({});

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

