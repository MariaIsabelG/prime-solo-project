const editStudent = (state = {}, action) => {
    switch (action.type) {
        case 'SET_SELECTED_STUDENT':
            console.log( 'This is action.payload in set edit student:', action.payload );
            return action.payload;
    
        case 'EDIT_ONCHANGE':
            return {
                ...state,
                [action.payload.property] : action.payload.value
            }
        
        case 'EDIT_CLEAR':
            return { id:'', full_name: '', username: '', considerations: '' };
        
        default:
        return state;
    }

};

export default editStudent;