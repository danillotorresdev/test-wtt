import axios from 'axios';
import { put } from 'redux-saga/effects';
import ActionCreators from '../actionCreators';
import { baseUrl } from '../../service/API';

export function* getBreeds() {
  const url = `${baseUrl}/breeds/list/all`;
  const breeds = yield axios.get(url);
  yield put(ActionCreators.getBreedsSuccess(breeds.data));
}
