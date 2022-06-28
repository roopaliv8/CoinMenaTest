import {StyleSheet} from 'react-native';
import {scale} from '../../../utils/scaling';
import colors from '../..//../theme/colors';

const {turquoise} = colors;

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  titleStyle: {
    color: turquoise,
  },
  cardSpacing: {
    marginHorizontal: scale(10),
  },
});
