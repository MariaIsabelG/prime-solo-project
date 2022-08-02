
const studentsReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_STUDENTS':
        return action.payload;
      case 'UNSET_USER':
        return {};
      default:
        return state;
    }
  };









export default studentsReducer;