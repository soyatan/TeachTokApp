import {Dimensions, Platform} from 'react-native';

/**
 * Helper function to check if the device is an iPhone X.
 * @returns {boolean}
 */
export const isIphoneX = (): boolean => {
  const {width, height} = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTV &&
    (height === 780 ||
      width === 780 ||
      height === 812 ||
      width === 812 ||
      height === 844 ||
      width === 844 ||
      height === 896 ||
      width === 896 ||
      height === 926 ||
      width === 926)
  );
};
