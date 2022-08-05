import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import logo from '../Images/';



function StudentLanding(){

    const student = useSelector( store => store.user)
    const history = useHistory();

    function handleNext() {

        history.push('/breathing')
    };


    return (
        <div>
            <h1 className='studentview-title'> Welcome, {student.full_name}!</h1>
            <center><iframe src="https://giphy.com/embed/RJEBGVo2mrGxsujtAE" width="200" height="200" frameBorder="0" className="student-gif" allowFullScreen></iframe></center>
            <img src={logo} alt="journey"/>
            <h3 className='student-text'>Let's go on self-awareness journey!!!</h3>
            <button className='student-btn' onClick={handleNext}>Start!</button>
            </div>

    )

};

export default StudentLanding;