import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* submitInput(action){
    try{
        yield axios.post('/api/students/input', action.payload );
    }catch(error) {
        console.log('Error in posting input:', error);
  }
};

function* submitSaga() {
    yield takeLatest('SUBMIT_INPUT', submitInput);
  }
  
  export default submitSaga;