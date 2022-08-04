import { useDispatch } from 'react-redux';
import { useState } from 'react';

function SensationsViewItem ({sensation}){

    const dispatch = useDispatch();
    const [sensationValue, setSensationValue] = useState({sensation_value: '', sensation_name: ''})

    function handleValue (value, name){

        setSensationValue({sensation_value: value, sensation_name: name})
        dispatch({
            type: 'SENSATION_VALUE',
            payload: sensationValue
        })
        
    };

    console.log('This is emotion value:', sensationValue);

    return (
        <span>
            <button onClick={(event) => handleValue(sensation.sensation_value, sensation.sensation_name)}>{sensation.sensation_name}</button>
        </span>

    )

};

export default SensationsViewItem;