import {FETCH, STORAGE} from './actionTypes';

export function fetchEntityStart(payload) {
  return {
    type: FETCH.ENTITY.START,
    payload,
  }
}
export function fetchEntitySuccess(payload) {
  return {
    type: FETCH.ENTITY.SUCCESS,
    payload,
  }
}
export function fetchEntityFailure(error) {
  return {
    type: FETCH.ENTITY.ERROR,
    error,
  }
}
export function updateProductStart(payload) {
  return {
    type: STORAGE.UPDATE_PRODUCT.START,
    payload,
  }
}
