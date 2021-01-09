import { combineReducers } from 'redux';
import productReducer from './productReducer';
import drawerReducer from './drawerReducer';

export default combineReducers({
  productReducer,
  drawerReducer,
});
