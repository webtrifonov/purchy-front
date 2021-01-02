import React from 'react';
import {View} from 'react-native';

const MainLayout = ({children}) => {
  return (
    <View style={{background: 'grey'}}>
      {children}
    </View>
  );
};

export default MainLayout;
