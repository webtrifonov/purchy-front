import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../utils/constants/colors';
import s from './ProductItemStyles';

const ProductItem = ({item}) => {
  const navigation = useNavigation();
  const goToProducts = () => navigation.navigate('ProductsScreen', {
    id: item.id
  });
  const checkAllProducts = () => {
    console.log('checkAllProducts');
  }
  return (
    <View>
      <View
        style={s.container}
      >
        <TouchableOpacity style={s.checkboxContainer} onPress={checkAllProducts}>
          <Icon
            style={s.checkBox}
            name={item.completed ? 'checkbox-marked-circle-outline' : 'checkbox-blank-circle-outline'}
            color={item.completed ? Colors.disabled : Colors.success}
            size={36}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={goToProducts}
          style={ s.headContainer}
        >
          <Text style={s.head}>{item.title}</Text>
        </TouchableOpacity>
      </View>
      <View style={s.line} />
    </View>
  );
};

export default ProductItem;
