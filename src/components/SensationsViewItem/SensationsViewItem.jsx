import { useDispatch } from 'react-redux';

function SensationsViewItem ({sensation}){

    const dispatch = useDispatch();

    function handleValue (sensation_value, sensation_name){

        dispatch({
            type: 'SENSATION_VALUE',
            payload: {sensation_value, sensation_name}
        })
        
    };

    return (
        <span>
           <button onClick={()=>handleValue(sensation.sensation_value, sensation.sensation_name)}>{sensation.sensation_name}</button>
        </span>

    )

};

export default SensationsViewItem;