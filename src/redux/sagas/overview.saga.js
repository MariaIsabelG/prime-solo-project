import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function OverviewData (){
    try{
<<<<<<< HEAD
        const response = yield axios.get('/api/students');
        yield put({ type: 'SET_STUDENTS', payload: response.data });
=======
        const response = yield axios.get('/api/states/overview');
        yield put({ type: 'SET_OVERVIEW_DATA', payload: response.data });
>>>>>>> feature-overview-chart
    }catch(error) {
        console.log('Error in getting students:', error);
  }
};

function* OverviewSaga() {
    yield takeLatest('FETCH_STUDENTS', OverviewData);
  }
  
  export default OverviewSaga;
<<<<<<< HEAD
}
=======
>>>>>>> feature-overview-chart
