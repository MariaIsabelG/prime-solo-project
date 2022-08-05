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
            <h3 className="student-text">Please take three deep breaths with our friend the giraffe.</h3>
            
            <center><iframe src="https://giphy.com/embed/IbOcZwrkzTTyLtnRUs" width="480" height="270" frameBorder="0" className="breathing" allowFullScreen></iframe></center>
            <h3 className="student-text">Click Next when you are done!</h3>
            <div>
            <button className="student-btn" onClick={handleNext}>Next</button>
            </div>
        </div>
    )

};

export default StudentLanding;