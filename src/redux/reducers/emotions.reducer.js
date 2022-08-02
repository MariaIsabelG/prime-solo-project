
const emotionsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_EMOTIONS':
        return action.payload;
        
      default:
        return state;
    }
  };



export default emotionsReducer;