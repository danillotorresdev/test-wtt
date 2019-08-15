import { takeLatest, all } from 'redux-saga/effects';
import { Types } from '../actionCreators';
import { getBreeds } from './breeds';
import { getImageBreeds } from './imageBreed';
import { getUsers } from './users';

export default function* rootSaga() {
  yield all([
    takeLatest(Types.GET_BREEDS_REQUEST, getBreeds),
    takeLatest(Types.GET_IMAGE_BREED_REQUEST, getImageBreeds),
    takeLatest(Types.GET_USERS_REQUEST, getUsers),
  ]);
}
