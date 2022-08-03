import { useDispatch, useSelector } from 'react-redux';
import SensationsViewItem from '../SensationsViewItem/SensationsViewItem';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function SensationsView (){

    const dispatch = useDispatch();
    const history = useHistory();
    const sensations = useSelector( store => store.sensations);

    useEffect(() => { 
       
            dispatch({
                type: 'FETCH_SENSATIONS'
            })
    },[])

    function handleNext() {
        history.push('/review')
    };

    return (
        <div>
            <h3>What sensation can you recognize at this moment?</h3>
                {sensations.map((sensation) => {
                    return <SensationsViewItem key={sensation.id} sensation={sensation} />
                })}
            <div>   
                <button onClick={handleNext}>Next</button>
            </div> 
        </div>
    )

};

export default SensationsView;