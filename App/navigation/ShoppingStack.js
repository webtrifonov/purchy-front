import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ShoppingScreen from '../screens/ShoppingScreen/ShoppingScreen';
import ProductsScreen from '../screens/ProductsScreen/ProductsScreen';

const ShoppingStack = createStackNavigator();
const INITIAL_ROUTE_NAME = 'Shopping';

const ShoppingStackScreen = () => {
  return (
    <ShoppingStack.Navigator headerMode="none">
      <ShoppingStack.Screen name={INITIAL_ROUTE_NAME} component={ShoppingScreen}  />
      <ShoppingStack.Screen name="ProductsScreen" component={ProductsScreen} />
    </ShoppingStack.Navigator>
  )
}
export default ShoppingStackScreen;
