import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CheckItem from '../CheckItem/CheckItem';

const ProductList = ({list}) => {
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
    marginBottom: 12,
  }
})

export default ProductList;
