
const overviewReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_OVERVIEW_DATA':
        return action.payload;
        
      default:
        return state;
    }
  };


export default overviewReducer;