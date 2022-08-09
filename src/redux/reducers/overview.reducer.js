
const overviewReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_OVERVIEW_DATA':
        console.log('This are the recent inputs from each student:', action.payload);
        return action.payload;
        
        
      default:
        return state;
    }
  };


export default overviewReducer;