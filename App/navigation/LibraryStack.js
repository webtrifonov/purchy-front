import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LibraryScreen from '../screens/LibraryScreen/LibraryScreen';
import {Text} from 'react-native';

const LibraryStack = createStackNavigator();
const INITIAL_ROUTE_NAME = 'Library';

const LibraryStackScreen = () => {
  return (
    <LibraryStack.Navigator headerMode="none">
      <LibraryStack.Screen name={INITIAL_ROUTE_NAME} component={LibraryScreen} />
    </LibraryStack.Navigator>
  )
}
export default LibraryStackScreen;
