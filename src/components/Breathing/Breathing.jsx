import { useHistory } from 'react-router-dom';
import breathingGif from '../Images/breathing.gif';

function StudentLanding(){

    const history = useHistory();

    // view push to emotions page
    function handleNext() {

        history.push('/emotions')
    };

    // view push back to student landing page
    function handleBack() {

        history.push('/studentlanding')
    };

    return (

        <div>
            <h1 className="student-text">Breathing</h1>
            <div className="student-breathing-container">
                <div>
                    <img className="student-breathing-bubbleposition" width="330" src={breathingGif} alt="giraffe-gif"/>
                </div>
                <div className="student-gif">
                    <center><iframe src="https://giphy.com/embed/IbOcZwrkzTTyLtnRUs" width="450" height="250" frameBorder="0" className="student-gif" allowFullScreen></iframe></center>
                </div>
                <h5 className="student-text">Click Next when you are done!</h5>
                <div>
                    <button className="back-btn" onClick={handleBack}>Back</button>
                    <button className="student-btn" onClick={handleNext}>Next</button>
                </div>
            </div>
        </div>
    )
};

export default StudentLanding;