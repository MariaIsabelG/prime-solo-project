import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function StudentLanding(){

    const student = useSelector( store => store.user)
    const history = useHistory();

    function handleNext() {

        history.push('/emotions')
    };


    return (
        <div>
            <h3>{student.full_name}, please take three deep breaths with our friend the giraffe.</h3>
            <h3>When you finish your three breaths, please click the Next button!</h3>
            <iframe src="https://giphy.com/embed/IbOcZwrkzTTyLtnRUs" width="480" height="270" frameBorder="0" className="breathing" allowFullScreen></iframe>
            <div>
            <button onClick={handleNext}>Next</button>
            </div>
        </div>
    )

};

export default StudentLanding;