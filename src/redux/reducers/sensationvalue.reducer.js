
const sensationValueReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SENSATION_VALUE':
            return action.payload
        
      default:
        return state;
    }
  };

export default sensationValueReducer;