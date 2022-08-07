
import { useSelector } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import AddStudent from '../AddStudent/AddStudent';
import StudentList from '../StudentList/StudentList';
import EmotionsList from '../EmotionsList/EmotionsList';
import SensationsList from '../SensationsList/SensationsList';
import OverviewChart from '../OverviewChart/OverviewChart';
import Nav from '../Nav/Nav';

function TeacherHome(){

    const user = useSelector((store) => store.user);
    
    return (
      <div >
        <Nav />
        <h1 className='student-text'>Welcome, {user.username}!</h1>
        
      <div className="teacher-home-container" >
        <StudentList/>
        <OverviewChart/>
        <EmotionsList/>
        
        </div>

      </div>
    )
};

export default TeacherHome;