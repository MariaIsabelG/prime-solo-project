import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import breathingGif from '../Images/breathing.gif';


function StudentLanding(){

    const student = useSelector( store => store.user)
    const history = useHistory();

    function handleNext() {

        history.push('/emotions')
    };


    return (
        <div>
            <h1 className="student-text">Breathing</h1>
            <img className="student-bubbleposition" width="500" src={breathingGif} alt="giraffe-gif"/>
            <center><iframe src="https://giphy.com/embed/IbOcZwrkzTTyLtnRUs" width="400" height="230" frameBorder="0" className="student-gif" allowFullScreen></iframe></center>
            <h3 className="student-text">Click Next when you are done!</h3>
            <div>
            <button className="student-btn" onClick={handleNext}>Next</button>
            </div>
        </div>
    )

};

export default StudentLanding;