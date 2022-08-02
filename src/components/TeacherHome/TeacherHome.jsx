
import { useSelector } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import AddStudent from '../AddStudent/AddStudent';

function TeacherHome(){

    const user = useSelector((store) => store.user);
    
    return (
      <div className="container">
        <h2>Welcome, {user.username}!</h2>
        
        <AddStudent/>
        
        <LogOutButton className="btn" />
      </div>
    )
};

export default TeacherHome;