import {DRAWER} from '../actions/actionTypes';
import {reducerGenerator} from '../../utils/store';

const initialState = {
  rightDrawer: 'closed',
  leftDrawer: 'closed',
};

const HANDLERS = {
  [DRAWER.RIGHT]: (state, payload) => {
    return {
      ...state,
      rightDrawer: payload.status,
    }
  }
}

export default reducerGenerator(initialState, HANDLERS);
