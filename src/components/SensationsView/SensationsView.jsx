import { useDispatch, useSelector } from 'react-redux';
import SensationsViewItem from '../SensationsViewItem/SensationsViewItem';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function SensationsView (){

    const dispatch = useDispatch();
    const history = useHistory();
    const sensations = useSelector( store => store.sensations);
    const chosenOne = useSelector( store => store.sensationvalue);

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
            <img className="student-bubbleposition" src={} width="610" alt="sensation-gif"/>

<center></center>
<h3 className="student-text">Your sensastion: {chosenOne.sensation_name}</h3>
                {sensations.map((sensation) => {
                    return <SensationsViewItem key={sensation.id} sensation={sensation} />
                })}
            <div>   
                <button className="student-btn" onClick={handleNext}>Next</button>
            </div> 
        </div>
    )

};

export default SensationsView;