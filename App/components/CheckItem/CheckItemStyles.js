import {StyleSheet} from 'react-native';
import Colors from '../../utils/constants/colors';
import Constants from '../../utils/constants/constants';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: Constants.borderWidth,
    borderColor: Colors.third,
    borderRadius: Constants.borderRadius,
    height: Constants.itemHeight,
    backgroundColor: Colors.secondary,
    marginTop: 8,
    zIndex: 2,
  },
  headContainer: {
    flex: 1,
    paddingVertical: 18,
  },
  head: {
    fontSize: 20,
    color: '#fafafa',
  },
  checkboxContainer: {
    paddingHorizontal: 12,
    paddingVertical: 12 + (2 * Constants.borderRadius),
  },
  checkBox: {
    marginRight: 4,
  },
  line: {
    height: Constants.borderWidth,
    backgroundColor: Colors.third,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: Constants.itemHeight / 2,
    zIndex: 1,
    marginHorizontal: -Constants.padding,
  }
});
