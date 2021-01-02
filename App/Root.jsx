import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import Orientation from 'react-native-orientation';
import {Provider} from 'react-redux';
import {useEffect} from 'react';
import store from './store/store';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigator from './navigation/BottomTabNavigator';

const Stack = createStackNavigator();
const initStorage = async () => {
  // TODO ↓
  // if (await AsyncStorage.getItem('purchy_store.productReducer.shoppings')) {
  //   dispatch(setShoppings(AsyncStorage.getItem('')))
  // } else {
  //   dispatch(setShoppings([]))
  // }
}
const Root = () => {
  console.log('store = ', store);

  useEffect(() => {
    Orientation.lockToPortrait();
  }, []);

  useEffect(() => {

  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="App" component={BottomTabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default Root;
