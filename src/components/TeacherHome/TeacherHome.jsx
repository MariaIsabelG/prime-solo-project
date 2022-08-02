
import { useSelector } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import AddStudent from '../AddStudent/AddStudent';
import StudentList from '../StudentList/StudentList';
import EmotionsList from '../EmotionsList/EmotionsList';

function TeacherHome(){

    const user = useSelector((store) => store.user);
    
    return (
      <div className="container">
        <h2>Welcome, {user.username}!</h2>
        
        <AddStudent/>
        <StudentList/>
        <EmotionsList/>
        
        <LogOutButton className="btn" />
      </div>
    )
};

export default TeacherHome;