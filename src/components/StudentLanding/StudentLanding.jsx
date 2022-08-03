import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function StudentLanding(){

    const student = useSelector( store => store.user)
    const history = useHistory();

    function handleNext() {

        history.push('/breathing')
    };


    return (
        <div>
            <iframe src="https://giphy.com/embed/E1w0yvMxBIv5M8WkL8" width="300" height="300" frameBorder="0" className="welcome" allowFullScreen></iframe>
            <h1> Welcome, {student.full_name}!</h1>
            <h3>Thanks for stopping by. Please take a moment to get comfortable.</h3>
            <h3>When you are ready to begin your check in, click the Next button!</h3>
            <button onClick={handleNext}>Next</button>
        </div>
    )

};

export default StudentLanding;