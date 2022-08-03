import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* editStudent(action){
    try{
        yield axios.put(`/api/students/edit/${action.payload.id}`, action.payload);
        yield put({ type: 'EDIT_CLEAR'});
    }catch(error) {
        console.log('Error in getting students:', error);
  }
};

function* editSaga() {
    yield takeLatest('EDIT_STUDENT', editStudent);
  }
  
  export default editSaga;