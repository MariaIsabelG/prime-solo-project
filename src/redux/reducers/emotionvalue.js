
const emotionValueReducer = (state = {}, action) => {
    switch (action.type) {
        case 'EMOTION_VALUE':
        return action.payload;
        
      default:
        return state;
    }
  };



export default emotionValueReducer;