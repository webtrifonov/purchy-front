import {FETCH, STORAGE} from '../actions/actionTypes';
import {reducerGenerator} from '../../utils/store';

const initialState = {
  shoppings: [
    {
      id: 1,
      title: 'Магнит',
      completed: true,
      products: [
        {
          id: 1,
          title: 'Яйца',
          completed: true,
          group: 'Омлет',
        }, {
          id: 2,
          title: 'Молоко',
          completed: true,
          group: 'Омлет',
        }, {
          id: 3,
          title: 'Котлеты',
          completed: true,
          group: null,
        }, {
          id: 4,
          title: 'Лук 1шт.',
          completed: true,
          group: 'Зелень',
        },
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
  [STORAGE.SET_SHOPPINGS]: (state, payload) => {
    return {
      ...state,
      shoppings: payload
    }
  },
  [FETCH.SHOPPINGS.START]: (state) => {
    return {
      ...state,
      loading: true
    }
  },
  [FETCH.SHOPPINGS.SUCCESS]: (state, payload) => {
    return {
      ...state,
      loading: false,
      shoppings: payload.shoppings
    }
  },
  [FETCH.SHOPPINGS.ERROR]: (state, payload) => {
    return {
      ...state,
      loading: false,
      error: payload.error
    };
  },

}

export default reducerGenerator(initialState, HANDLERS);
