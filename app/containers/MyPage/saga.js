import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import { REQUEST_API_DATA, receiveApiData, RECEIVE_API_DATA } from './actions';
import { fetchUsers } from './api';

function* getApiData(action) {
  try {
    // do api call
    const data = yield call(fetchUsers());
    console.log('data received', data);
    yield put(receiveApiData(data));
  } catch (e) {
    console.log(e);
  }
}

export default function* mySaga() {
  yield takeLatest(RECEIVE_API_DATA, getApiData);
}
