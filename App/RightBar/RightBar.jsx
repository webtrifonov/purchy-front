import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Constants from '../utils/constants/constants';
import Colors from '../utils/constants/colors';
import Icon from 'react-native-vector-icons/EvilIcons';

const RightBar = () => {
  return (
    <View style={s.sideHeader}>
      <Icon
        style={s.checkBox}
        name={'user'}
        color={Colors.success}
        size={42}
      />
    </View>
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
