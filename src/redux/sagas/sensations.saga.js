import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchSensations(){
    try{
        const response = yield axios.get('/api/states/sensations');
        yield put({ type: 'SET_SENSATIONS', payload: response.data });
    }catch(error) {
        console.log('Error in getting sensations:', error);
  }
};


function* sensationsSaga() {
    yield takeLatest('FETCH_SENSATIONS', fetchSensations);
  }
  
  export default sensationsSaga;