const editStudent = (state = {}, action) => {
    switch (action.type) {
        case 'SET_EDIT_STUDENT':
            console.log( 'This is action.payload in set edit student:', action.payload );
            return action.payload;
    
        case 'EDIT_ONCHANGE':
            return 
        
        default:
        return state;
    }

};

export default editStudent;