import { all, takeLatest } from 'redux-saga/effects';
import { LOAD_REQUEST_ACTION } from './repositories/types';
import { load } from './repositories/saga';

export default function* rootSaga() {
  return yield all([
    takeLatest(LOAD_REQUEST_ACTION, load),
  ]);
}
