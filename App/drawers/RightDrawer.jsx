import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {setRightDrawer} from '../store/actions/drawerActions';
import {DrawerActions} from '@react-navigation/native';
import LeftDrawer from './LeftDrawer';
import DrawerContentRight from '../components/DrawerContentRight/DrawerContentRight';

const Drawer = createDrawerNavigator();

const RightDrawer = ({navigation}) => {
  const dispatch = useDispatch();
  const {rightDrawer} = useSelector((state) => state.drawerReducer);

  useEffect(() => {
    if (rightDrawer === 'open') {
      navigation.dispatch(DrawerActions.openDrawer());
      dispatch(setRightDrawer({status: 'opened'}));
    }
  }, [rightDrawer === 'open']);

  return (
    <Drawer.Navigator
      drawerContent={DrawerContentRight}
      initialRouteName="drawer"
      drawerPosition="right"
    >
      <Drawer.Screen name="LeftDrawer" component={LeftDrawer} />
    </Drawer.Navigator>
  );
}
export default RightDrawer;
