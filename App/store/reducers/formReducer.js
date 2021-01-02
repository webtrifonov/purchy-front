import { FETCH } from '../actions/actionTypes';
import {reducerGenerator} from '../../utils/store';

const initialState = {
  shoppingList: [
    {
      id: 1,
      title: 'Magnit',
      completed: true,
      products: [
        {
          id: 1,
          title: 'kotletka',
          completed: true,
        }, {
          id: 2,
          title: 'pureshka',
          completed: true,
        }
      ]
    },{
      id: 2,
      title: '5-ka',
      completed: false,
      products: [
        {
          id: 1,
          title: 'kotletka_2',
          completed: true,
        }, {
          id: 2,
          title: 'pureshka_2',
          completed: true,
        }
      ]
    },
  ],
  loading: false,
};

const HANDLERS = {
  [FETCH.SHOPPING_LIST.START]: (state) => {
    return {
      ...state,
      loading: true
    }
  },
  [FETCH.SHOPPING_LIST.SUCCESS]: (state, payload) => {
    return {
      ...state,
      loading: false,
      shoppingList: payload.shoppings
    }
  },
  [FETCH.SHOPPING_LIST.ERROR]: (state, payload) => {
    return {
      ...state,
      loading: false,
      error: payload.error
    };
  },

}

export default reducerGenerator(initialState, HANDLERS);
