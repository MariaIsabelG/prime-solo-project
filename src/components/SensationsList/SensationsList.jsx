import { useDispatch, useSelector } from 'react-redux';
import SensationsItem from '../SensationsItem/SensationsItem';
import { useEffect } from 'react';

function SensationsList (){

    const dispatch = useDispatch();
    const sensations = useSelector( store => store.sensations);

    useEffect(() => { 
        dispatch({
            type: 'FETCH_SENSATIONS'
        })
    },[])

    return (
        <div >
            <h5>Sensations:</h5>
                {sensations.map((sensation) => {
                    return <SensationsItem key={sensation.id} sensation={sensation} />
                })}
        </div>
    )

};

export default SensationsList;