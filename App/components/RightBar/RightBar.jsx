import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from '../../utils/constants/constants';
import Colors from '../../utils/constants/colors';
import Icon from 'react-native-vector-icons/EvilIcons';
import {DrawerActions} from '@react-navigation/native';
import {setRightDrawer} from '../../store/actions/drawerActions';
import {useDispatch} from 'react-redux';

const RightBar = () => {
  const dispatch = useDispatch();
  const onPress = () => {
    dispatch(setRightDrawer({status: 'open'}));
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      style={s.sideHeader}
    >
      <Icon
        style={s.checkBox}
        name={'user'}
        color={Colors.success}
        size={42}
      />
    </TouchableOpacity>
  );
};
const s = StyleSheet.create({
  sideHeader: {
    width: Constants.headerHeight,
    height: Constants.headerHeight,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fff',
  },
  text: {
    color: '#fafafa',
  },
})
export default RightBar;
