import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomBar from '../components/BottomBar/BottomBar';
import SvgCheckList from '../components/icons/SvgCheckList';
import SvgLibrary from '../components/icons/SvgLibrary';
import ShoppingStackScreen from './ShoppingStack';
import LibraryStackScreen from './LibraryStack';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      tabBar={BottomBar}
    >
      <BottomTab.Screen
        name="Shopping"
        component={ShoppingStackScreen}
        options={{
          tabBarIcon: ({focuced}) => <SvgCheckList />,
          tabBarLabel: 'Shopping List'
        }}
      />
      <BottomTab.Screen
        name="Library"
        component={LibraryStackScreen}
        options={{
          tabBarIcon: ({focuced}) => <SvgLibrary />,
          tabBarLabel: 'Library'
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
