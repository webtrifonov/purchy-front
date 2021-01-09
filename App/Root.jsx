import React from 'react';
import {AsyncStorage} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Orientation from 'react-native-orientation';
import {Provider} from 'react-redux';
import {useEffect} from 'react';
import store from './store/store';
import {createStackNavigator} from '@react-navigation/stack';
import {setShoppings} from './store/actions/productActions';
import RightDrawer from './drawers/RightDrawer';

const Stack = createStackNavigator();

const initStorage = async (dispatch) => {
  // TODO ↓
  const purchyStorage = await AsyncStorage.getItem('purchy_storage');
  console.log('purchyStorage = ', purchyStorage);

  if (purchyStorage) {
    const shoppings = JSON.stringify(purchyStorage);
    dispatch(setShoppings(shoppings));
  } else {
    dispatch(setShoppings([]));
  }
}

const Root = () => {
  // const dispatch = useDispatch();

  useEffect(() => {
    Orientation.lockToPortrait();
  }, []);

  // useEffect(async () => {
  //   await initStorage(dispatch);
  // }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="RightDrawer" component={RightDrawer} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default Root;
