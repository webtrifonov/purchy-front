import {StyleSheet} from 'react-native';
import Constants from '../../utils/constants/constants';
import Colors from '../../utils/constants/colors';

export default StyleSheet.create({
  container: {
    width: '100.5%',
    flexDirection: 'row',
    height: Constants.headerHeight,
    borderColor: Colors.third,
    borderBottomWidth: Constants.borderWidth,
    borderLeftWidth: Constants.borderWidth,
    borderRightWidth: Constants.borderWidth,
    justifyContent: 'space-between',

    marginHorizontal: -Constants.borderWidth,
    borderBottomLeftRadius: Constants.borderRadius,
    borderBottomRightRadius: Constants.borderRadius,
  },
  title: {
    color: '#fafafa',
    textAlign: 'center',
  },
  centerHeader: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 0,
    borderWidth: 1,
    borderColor: '#fff',
  },
  sideHeader: {
    width: Constants.headerHeight,
    height: Constants.headerHeight,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fff',
  },
  emptyHeader: {
    width: Constants.headerHeight,
    height: Constants.headerHeight,
    borderWidth: 1,
    borderColor: '#fff',
  }
})
