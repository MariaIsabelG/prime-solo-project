import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchStudents(){
    try{
        const response = yield axios.get('/api/students');
        yield put({ type: 'SET_STUDENTS', payload: response.data });
    }catch(error) {
        console.log('Error in getting students:', error);
  }
};

function* studentsSaga() {
    yield takeLatest('FETCH_STUDENTS', fetchStudents);
  }
  
  export default studentsSaga;