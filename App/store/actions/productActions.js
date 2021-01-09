import {FETCH, STORAGE} from './actionTypes';

export function fetchShoppingsStart() {
  return {
    type: FETCH.SHOPPINGS.START,
  };
}
export function fetchShoppingsSuccess(payload) {
  return {
    type: FETCH.SHOPPINGS.SUCCESS,
    payload,
  };
}
export function fetchShoppingsFailure(error) {
  return {
    type: FETCH.SHOPPINGS.ERROR,
    error,
  };
}
export function updateProductStart(payload) {
  return {
    type: STORAGE.UPDATE_PRODUCT.START,
    payload,
  };
}

export function setShoppings(payload) {
  return {
    type: STORAGE.SET_SHOPPINGS,
    payload,
  };
}
