import LogOutButton from "../LogOutButton/LogOutButton";
import { useHistory } from "react-router-dom";
import { useEffect } from 'react';
import { useSelector } from 'react-redux';


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
        <h3> Thanks for sharing your emotion and sensation. </h3>
        <h3>Keep doing the best you can!</h3>
        <LogOutButton />
        </div>
    )
};

export default Thanks;