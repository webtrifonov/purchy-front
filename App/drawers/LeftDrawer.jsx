import React from 'react';
import BottomTabNavigator from '../navigation/BottomTabNavigator';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContentLeft from '../components/DrawerContentLeft/DrawerContentLeft';

const Drawer = createDrawerNavigator();

const LeftDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={DrawerContentLeft}
    >
      <Drawer.Screen name="App" component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
}
export default LeftDrawer;
