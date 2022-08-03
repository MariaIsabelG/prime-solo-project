
const sensationsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_SENSATIONS':
        return action.payload;
        
      default:
        return state;
    }
  };



export default sensationsReducer;