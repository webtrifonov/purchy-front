import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import s from'./DrawerContentLeftStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DrawerContentLeft = (props) => {
  const {navigation} = props;

  const onClose = () => {
    navigation.closeDrawer();
  }
  return (
    <View style={s.container}>
      <Text style={{color: '#fafafa'}}>Left Content</Text>
      <TouchableOpacity onPress={onClose}>
        <Icon
          style={s.checkBox}
          name={'close'}
          color="#fafafa"
          size={36}
        />
      </TouchableOpacity>

    </View>
  );
};

export default DrawerContentLeft;
