import {StyleSheet} from 'react-native';
import {moderateScale, verticalScale} from '../../../utils/scaling';
import colors from '../..//../theme/colors';

const {mako, turquoise} = colors;
export default StyleSheet.create({
  topContainer: {
    flex: 1,
    marginBottom: verticalScale(10),
  },
  topSubContainer: {
    padding: moderateScale(10),
  },
  labelStyle: {
    fontSize: moderateScale(16),
    color: mako,
    marginTop: verticalScale(10),
    textAlign: 'left',
  },
  subLabelStyle: {
    fontSize: moderateScale(18),
    color: mako,
    marginTop: verticalScale(6),
  },
  cardContainer: {
    flexDirection: 'row',
  },
  countryLabelStyle: {
    width: '100%',
    color: turquoise,
    fontSize: moderateScale(20),
    textAlign: 'left',
  },
  rowItem: {
    flex: 1,
  },
});
