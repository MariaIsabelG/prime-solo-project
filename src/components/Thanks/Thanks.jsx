import LogOutButton from "../LogOutButton/LogOutButton";
import { useHistory } from "react-router-dom";
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import thanksGif from '../Images/thanks.gif';


function Thanks (){

// if not a user history.push to /
    const history = useHistory();
    const user = useSelector( (store)=> store.user);

    useEffect(()=>{
        
        if (!user.id){
            history.push('/login');
        }
    },[user])



    return (
        <div>
        <h1 className="student-text">{user.full_name}</h1>
        <img className="student-bubbleposition" src={thanksGif} width="500"alt="thanks-gif"/>
        <center><iframe src="https://giphy.com/embed/osjgQPWRx3cac" width="300" height="300" frameBorder="0" className="student-gif" allowFullScreen></iframe></center>
        <LogOutButton className="logout-btn" />
        </div>
    )
};

export default Thanks;