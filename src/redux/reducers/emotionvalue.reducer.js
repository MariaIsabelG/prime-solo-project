
const emotionValueReducer = (state = {}, action) => {
    switch (action.type) {
        case 'EMOTION_VALUE':
            return action.payload
        
        case 'CLEAR_EMOTION':
              return {};
        
      default:
        return state;
    }
  };

export default emotionValueReducer;