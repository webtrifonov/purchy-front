import {StyleSheet} from 'react-native';
import Colors from '../../utils/constants/colors';
import Constants from '../../utils/constants/constants';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  button: {
    paddingHorizontal: 12,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.success,
    borderWidth: 1,
    borderRadius: Constants.borderRadius,
  },
  buttonText: {
    color: '#fafafa',
  }
});
