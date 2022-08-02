import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchSaga(){

    const response = yield axios.get('/api/user');
}





function* studentSaga() {
    yield takeLatest('FETCH_STUDENTS', fetchStudents);
  }
  
  export default studentSaga;