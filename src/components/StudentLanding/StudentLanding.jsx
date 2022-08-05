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
            <h1 className='studentview-title'> Welcome, {student.full_name}!</h1>
            <center><iframe src="https://giphy.com/embed/E1w0yvMxBIv5M8WkL8" width="300" height="300" frameBorder="0" className="student-gif" allowFullScreen></iframe></center>
            {/* <h3 className='student-text'>Thanks for stopping by. Please take a moment to get comfortable.</h3> */}
            <h3 className='student-text'>Let's go on self-awareness journey!!!</h3>
            <div className='student-btn'>
                <button  onClick={handleNext}>Start!</button>
            </div>
        </div>
    )

};

export default StudentLanding;