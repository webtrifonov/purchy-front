import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from '../utils/constants/constants';
import Colors from '../utils/constants/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const LeftBar = () => {
  const onPress = () => {
    console.log('menu')
  }
  return (
    <TouchableOpacity
      style={s.sideHeader}
      onPress={onPress()}
    >
      <Icon
        style={s.checkBox}
        name={'menu'}
        color={Colors.success}
        size={36}
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
export default LeftBar;
