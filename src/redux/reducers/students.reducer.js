
const studentsReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_STUDENTS':
        console.log('students', action.payload);
        return action.payload;
        
      default:
        return state;
    }
  };



export default studentsReducer;