import {StyleSheet} from 'react-native';
import {moderateScale, verticalScale} from '../../../utils/scaling';
import colors from '../..//../theme/colors';

const {mako, turquoise} = colors;
export default StyleSheet.create({
  topContainer: {
    flex: 1,
    marginRight: verticalScale(10),
  },
  topSubContainer: {
    padding: moderateScale(15),
  },
  labelStyle: {
    fontSize: moderateScale(12),
    color: mako,
    marginTop: verticalScale(10),
  },
  subLabelStyle: {
    fontSize: moderateScale(14),
    color: mako,
    fontWeight: 'bold',
  },
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  countryLabelStyle: {
    color: turquoise,
  },
});
