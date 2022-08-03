const edit = (state = {}, action) => {
    switch (action.type) {
        case 'SET_EDIT_STUDENT':
        return action.payload;
        
        default:
        return state;
    }

};