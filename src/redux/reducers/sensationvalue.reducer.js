
const sensationValueReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SENSATION_VALUE':
            return action.payload

        case 'SENSATION_CLEAR':
            return {emotion_value: '', emotion_name: ''};
        
      default:
        return state;
    }
  };

export default sensationValueReducer;