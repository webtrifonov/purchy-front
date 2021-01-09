import {DRAWER} from './actionTypes';

export const setRightDrawer = (payload) => {
  return {
    type: DRAWER.RIGHT,
    payload,
  }
}
export const setLeftDrawer = (payload) => {
  return {
    type: DRAWER.LEFT,
    payload,
  }
}
