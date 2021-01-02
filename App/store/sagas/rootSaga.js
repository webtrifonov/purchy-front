import { all } from 'redux-saga/effects';
import entitySaga from './entitySaga';
import productSaga from './productSaga';

export default function* () {
  yield all([
    entitySaga(),
    productSaga()
  ]);
}
