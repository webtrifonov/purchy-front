import React from 'react';
import {View, StyleSheet} from 'react-native';
import CheckItem from '../CheckItem/CheckItem';

const CheckList = ({list}) => {
  return (
    <View style={s.container}>
      {
        list.map((item) => {
          return (
            <CheckItem
              key={item.id}
              item={item}
            />
          )
        })
      }
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    marginBottom: 8,
  }
})

export default CheckList;
