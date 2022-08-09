import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* StudentData (action){
    try{
        const response = yield axios.get(`/api/states/student/${action.payload}`);
        yield put({ type: 'SET_STUDENT_DATA', payload: response.data });

    }catch(error) {
        console.log('Error in getting students:', error);
  }
};

function* studentdataSaga() {
    yield takeLatest('GET_STUDENT_DATA', StudentData);
  }
  
  export default studentdataSaga;

