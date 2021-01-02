import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import s from './HeaderStyles';
import Constants from '../../utils/constants/constants';

const Header = ({ Left, Center, Right}) => {
  console.log('typeof Center = ', typeof Center);
  console.log('typeof Left = ', typeof Left);
  const renderCenter = () => {
    if (Center && typeof Center === 'string') {
      console.log('1');
      return (
        <View style={s.centerHeader}>
          <Text style={s.title}>{Center}</Text>
        </View>
      );
    } else if (Center && typeof Center === 'function') {
      console.log('2');
      return <Center />
    } else {
      console.log('3');
      return <View style={s.emptyHeader} />
    }
  }
  return (
    <View style={s.container}>
      {
        Left ? <Left /> : <View style={s.emptyHeader} />
      }
      {renderCenter()}
      {
        Right ? <Right /> : <View style={s.emptyHeader} />
      }
    </View>
  );
};

export default Header;
