import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {Dimensions} from 'react-native';
import {isIphoneX} from './isIphoneX';

const BASE_WIDTH = 390;
const BASE_HEIGHT = 844;

export const getWidth = (size: number) => {
  const percentage = (size * 100) / BASE_WIDTH;
  return wp(percentage);
};

export const getHeight = (size: number) => {
  const percentage = (size * 100) / BASE_HEIGHT;
  return hp(percentage);
};

export const {width, height} = Dimensions.get('screen');

export function heightPercentage(value: number) {
  const cc = isIphoneX() ? value : value + 1;
  return (height * cc) / 100;
}

export function widthPercentage(value: number) {
  return (width * value) / 100;
}
