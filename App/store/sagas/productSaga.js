import { call, put, select } from 'redux-saga/effects';
import axios from '../../utils/server';
import {
  fetchEntitySuccess, fetchEntityFailure,
} from '../actions/entityActions';
import { FETCH } from '../actions/actionTypes';
import {sagaGenerator} from '../../utils/store';
import {productsSelector} from '../selectors/productSelector';

const HANDLERS = {
  * [FETCH.SHOPPING_LIST.START]({payload: {id}}) {
    try {
      const response = yield call(axios, {
        method: 'GET',
        url: `/posts/${id}`,
        // headers: {
        //   'Accept': 'application/json',
        //   'Content-Type': 'application/json',
        //   'Authorization': `Token ${token}`,
        // },
        // data: formDataObject,
      });
      const entity = response.data;

      yield put(fetchEntitySuccess({entity: entity}));
    } catch (error) {
      yield put(fetchEntityFailure(error?.message));
    }
  },
  * [FETCH.SHOPPING_LIST.START]({payload}) {
    try {
      const shoppingList = select(productsSelector(payload.id));

      yield put(fetchEntitySuccess({entity: entity}));
    } catch (error) {
      yield put(fetchEntityFailure(error?.message));
    }
  }
}
export default sagaGenerator(HANDLERS);
