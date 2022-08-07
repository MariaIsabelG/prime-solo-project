
const sensationValueReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SENSATION_VALUE':
            return action.payload

        case 'CLEAR_SENSATION':
          return {}
        
      default:
        return state;
    }
  };

export default sensationValueReducer;