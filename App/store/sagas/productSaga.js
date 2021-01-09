import { call, put, select } from 'redux-saga/effects';
import axios from '../../utils/server';
import {
  fetchShoppingsSuccess, fetchShoppingsFailure,
} from '../actions/productActions';
import { FETCH } from '../actions/actionTypes';
import {sagaGenerator} from '../../utils/store';
import {productsSelector} from '../selectors/productSelector';

const HANDLERS = {
  // * [FETCH.SHOPPINGS.START]({payload: {id}}) {
  //   try {
  //     const response = yield call(axios, {
  //       method: 'GET',
  //       url: `/posts/${id}`,
  //       // headers: {
  //       //   'Accept': 'application/json',
  //       //   'Content-Type': 'application/json',
  //       //   'Authorization': `Token ${token}`,
  //       // },
  //       // data: formDataObject,
  //     });
  //     const entity = response.data;
  //
  //     yield put(fetchEntitySuccess({entity: entity}));
  //   } catch (error) {
  //     yield put(fetchEntityFailure(error?.message));
  //   }
  // },
  * [FETCH.SHOPPINGS.START]() {
    try {
      const shoppings = select(productsSelector());

      yield put(fetchShoppingsSuccess({ shoppings }));
    } catch (error) {
      yield put(fetchShoppingsFailure(error?.message));
    }
  }
}
export default sagaGenerator(HANDLERS);
