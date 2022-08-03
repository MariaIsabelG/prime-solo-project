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
        <div className="grey-div">
            <h3>Sensations available:</h3>
                {sensations.map((sensation) => {
                    return <SensationsItem key={sensation.id} sensation={sensation} />
                })}
        </div>
    )

};

export default SensationsList;