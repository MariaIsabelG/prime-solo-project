
const emotionValueReducer = (state = {}, action) => {
    switch (action.type) {
        case 'EMOTION_VALUE':
            return action.payload

        case 'EMOTION_CLEAR':
            return {emotion_value: '', emotion_name: ''};
        
      default:
        return state;
    }
  };

export default emotionValueReducer;