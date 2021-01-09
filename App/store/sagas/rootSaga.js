import { all } from 'redux-saga/effects';
import productSaga from './productSaga';

export default function* () {
  yield all([
    productSaga()
  ]);
}
