import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import s from './ButtonStyles';

const Button = (props) => {
  const {title, onPress} = props;
  return (
    <View style={s.container}>
      <TouchableOpacity onPress={onPress} style={s.button}>
        <Text style={s.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
