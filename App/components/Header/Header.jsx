import React from 'react';
import {View, Text} from 'react-native';
import s from './HeaderStyles';

const Header = ({ Left, Center, Right}) => {
  const renderCenter = () => {
    if (Center && typeof Center === 'string') {
      return (
        <View style={s.centerHeader}>
          <Text style={s.title}>{Center}</Text>
        </View>
      );
    } else if (Center && typeof Center === 'function') {
      return <Center />
    } else {
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
