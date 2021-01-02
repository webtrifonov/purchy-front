import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../utils/constants/colors';
import s from './CheckItemStyles';
import PropTypes from 'prop-types';

const CheckItem = ({item}) => {
  const navigation = useNavigation();
  const [isEdit, setIsEdit] = useState(false);
  const goToProducts = () => navigation.push('ProductsScreen', {
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
        {
          isEdit ? (
            <TouchableOpacity
              onPress={goToProducts}
              style={s.headContainer}
            >
              <Text style={s.head}>Edit</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={goToProducts}
              style={s.headContainer}
            >
              <Text style={s.head}>{item.title}</Text>
            </TouchableOpacity>
          )
        }
      </View>
      <View style={s.line} />
    </View>
  );
};
CheckItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    completed: PropTypes.bool,
    group: PropTypes.string,
}).isRequired,
}
export default CheckItem;
