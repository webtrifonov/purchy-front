import { combineReducers } from 'redux';
import entityReducer from './entityReducer';
import productReducer from './productReducer';

export default combineReducers({
  entityReducer,
  productReducer,
});
