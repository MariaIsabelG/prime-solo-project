import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function OverviewData (){
    try{
        const response = yield axios.get('/api/states/overview');
        yield put({ type: 'SET_OVERVIEW_DATA', payload: response.data });
    }catch(error) {
        console.log('Error in getting students:', error);
  }
};

function* OverviewSaga() {
    yield takeLatest('FETCH_STUDENTS', OverviewData);
  }
  
  export default OverviewSaga;
