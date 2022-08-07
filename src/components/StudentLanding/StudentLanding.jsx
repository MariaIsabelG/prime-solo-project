import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import welcomeGif from '../Images/journey.gif';



function StudentLanding(){

    const student = useSelector( store => store.user)
    const history = useHistory();

    function handleNext() {

        history.push('/breathing')
    };



    return (
        <div>
            <h1 className="student-text"> Welcome, {student.full_name}!</h1>
                <div className="student-landing-container">
                    <div className="student-landing-bubbleposition">
                        <img  src={welcomeGif} width="430" alt="journey"/>
                    </div>
                    <div className="student-gif">
                        <center><iframe src="https://giphy.com/embed/RJEBGVo2mrGxsujtAE" width="250" height="250" frameBorder="0" allowFullScreen></iframe></center>
                    </div>
                    <div>
                        <button className='student-btn' onClick={handleNext}>Start!</button>
                    </div>
                </div>
        </div>

    )

};

export default StudentLanding;