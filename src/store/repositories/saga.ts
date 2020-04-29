import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import { LoadSuccesstAction, LoadFailuretAction } from './actions';

export function* load() {
  try {
    const response = yield call(api.get, 'users/erickpiazza/repos');
    yield put(LoadSuccesstAction(response.data));
  } catch (err) {
    yield put(LoadFailuretAction());
  }
}
