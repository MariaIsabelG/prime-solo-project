import { takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* deleteStudent(action){
    try{
        console.log( 'this is my action payload in delete saga:', action.payload );
        yield axios.delete(`/api/students/delete/${action.payload}`);
        
    }catch(error) {
        console.log('Error in deleting student:', error);
  }
};


function* deleteSaga() {
    yield takeLatest('DELETE_STUDENT', deleteStudent);
  }
  
  export default deleteSaga;