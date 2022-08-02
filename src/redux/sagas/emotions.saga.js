import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchEmotions(){
    try{
        const response = yield axios.get('/api/states');
        yield put({ type: 'SET_EMOTIONS', payload: response.data });
    }catch(error) {
        console.log('Error in getting emotions:', error);
  }
};


function* emotionsSaga() {
    yield takeLatest('FETCH_EMOTIONS', fetchEmotions);
  }
  
  export default emotionsSaga;