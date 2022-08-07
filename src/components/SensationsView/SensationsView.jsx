import { useDispatch, useSelector } from 'react-redux';
import SensationsViewItem from '../SensationsViewItem/SensationsViewItem';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import sensationGif from '../Images/sensations.gif';

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

        if(!chosenOne.sensation_name){
            alert('You must choose an sensation');
        }else{
        history.push('/review')
        }
    };

    function handleBack() {

        history.push('/emotions')
    };

    return (
        <div>
            <h1 className="student-text">Sensations</h1>
            <img className="student-bubbleposition" src={sensationGif} width="500" alt="sensation-gif"/>

        <center><iframe src="https://giphy.com/embed/6kM2H4WisBNJwoLJqW" width="150" height="150" frameBorder="0" className="student-gif" allowFullScreen></iframe></center>
        <h5 className="student-text">Your sensastion: {chosenOne.sensation_name}</h5>
            <div className="sensation-container">
                {sensations.map((sensation) => {
                    return <SensationsViewItem key={sensation.id} sensation={sensation} />
                })}
            </div>
            <div> 
                <button className='back-btn' onClick={handleBack}>Back</button>  
                <button className="student-btn" onClick={handleNext}>Next</button>
            </div> 
        </div>
    )

};

export default SensationsView;