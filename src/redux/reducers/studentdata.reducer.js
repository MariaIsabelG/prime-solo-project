const studentdataReducer = (state = [], action) => {
    
    switch (action.type) {
      case 'SET_STUDENT_DATA':
        return action.payload;
        
      default:
        return state;
    }
  };


export default studentdataReducer;