import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import LogOutButton from '../LogOutButton/LogOutButton';

function TeacherHome(){

    const user = useSelector((store) => store.user);
    const history = useHistory();
    
    return (
      <div className="container">
        <h2>Welcome, {user.username}!</h2>
        <div className="add-student">
            <h2>Add a student</h2>
            <button onClick={history.push('/registration')}>Add student</button>
        </div>
        
        <LogOutButton className="btn" />
      </div>
    )
};

export default TeacherHome;