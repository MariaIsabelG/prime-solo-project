import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* OverviewData (){
    try{
        const response = yield axios.get('/api/states/overview');
        yield put({ type: 'SET_OVERVIEW_DATA', payload: response.data });

    }catch(error) {
        console.log('Error in getting students:', error);
  }
};

function* overviewSaga() {
    yield takeLatest('GET_OVERVIEW_DATA', OverviewData);
  }
  
  export default overviewSaga;

