import {StyleSheet} from 'react-native';
import colors from '../..//theme/colors';
import {moderateScale, verticalScale} from '../../utils/scaling';

const {turquoise, mako} = colors;

export default StyleSheet.create({
  subContainer: {
    flex: 1,
  },
  viewMoreContainer: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: verticalScale(5),
  },
  viewMore: {
    width: '100%',
    fontSize: moderateScale(18),
    color: turquoise,
    textAlign: 'right',
  },
  searchText: {
    color: mako,
    fontSize: moderateScale(16),
    width: '100%',
    minHeight: 30,
  },
  sortContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});
