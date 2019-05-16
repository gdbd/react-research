import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { Api_fetchMessage } from './api'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchMessage(action:any) {
   try {
      const msg = yield call(Api_fetchMessage, action.id);
      yield put({type: "SET_MSG_COMPLETE", message: msg});
   } catch (e) {
      yield put({type: "SET_MSG_FAIL", message: "error" });
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery("SET_MSG_START", fetchMessage);
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
/*
function* mySaga() {
  yield takeLatest("USER_FETCH_REQUESTED", fetchMessage);
}*/

export default mySaga;