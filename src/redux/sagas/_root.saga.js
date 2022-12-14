import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import studentsSaga from './students.saga';
import emotionsSaga from './emotions.saga';
import sensationsSaga from './sensations.saga';
import editSaga from './edit.saga';
import deleteSaga from './delete.saga';
import submitSaga from './submit.saga';
import overviewSaga from './overview.saga';
import studentdataSaga from './studentdata.saga';


// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    studentsSaga(),
    emotionsSaga(), 
    sensationsSaga(),
    editSaga(),
    deleteSaga(),
    submitSaga(),
    overviewSaga(),
    studentdataSaga(),
  ]);
}
