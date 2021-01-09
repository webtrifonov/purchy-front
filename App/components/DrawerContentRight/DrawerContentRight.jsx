import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import s from'./DrawerContentRightStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DrawerContentRight = (props) => {
  const {navigation} = props;

  const onClose = () => {
    navigation.closeDrawer();
  }
  return (
    <View style={s.container}>
      <Text style={{color: '#fafafa'}}>Right Content</Text>
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

export default DrawerContentRight;
