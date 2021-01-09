import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../../utils/constants/colors';
import Constants from '../../utils/constants/constants';

const BottomBar = (props) => {
  return (
    <View style={s.container}>
      <View style={s.box}>
        {
          props.state.routes &&
            props.state.routes.map((item) => {
              const {options: {tabBarIcon, tabBarLabel}, navigation} = props.descriptors[item.key];

              return (
                <TouchableOpacity
                  key={tabBarLabel}
                  style={s.buttonWrapper}
                  onPress={() => navigation.push(item.name)}
                >
                  <View style={s.button}>
                    {tabBarIcon({focused: true})}
                  </View>
                </TouchableOpacity>

              );
            })
        }
      </View>
      <View style={s.line} />
    </View>
  );
};
const s = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    zIndex: 1,
    backgroundColor: Colors.primary,
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  line: {
    position: 'absolute',
    top: 25,
    width: '100%',
    height: Constants.borderWidth,
    backgroundColor: Colors.third,
    zIndex: 2,
  },
  buttonWrapper: {
    zIndex: 3,
  },
  button: {
    borderWidth: Constants.borderWidth,
    borderColor: Colors.third,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
    borderRadius: 50,
    zIndex: 3,
  }
});
export default BottomBar;
