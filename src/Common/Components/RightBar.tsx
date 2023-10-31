import React from 'react';

import {StyleSheet, View} from 'react-native';
import {Book, BookMark, Comments, Heart, Share} from '../Assets/Pngs';
import {colors} from '../Constants/colors';
import {fonts} from '../Constants/fonts';
import {getHeight} from '../Helpers/Responsive';
import Clickable from './Clickable';

type Props = {};

const RightBar = ({}: Props) => {
  return (
    <View style={styles.container}>
      <Clickable source={Book} plusIcon={true} />
      <Clickable source={Heart} plusIcon={false} count="87" />
      <Clickable source={Comments} plusIcon={false} count="2" />
      <Clickable source={BookMark} plusIcon={false} count="203" />
      <Clickable source={Share} plusIcon={false} count="17" last />
    </View>
  );
};

export default RightBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',

    alignItems: 'center',
  },

  whiteTextLight: {
    fontFamily: fonts.regular,
    fontWeight: '500',
    fontSize: getHeight(12),
    color: colors.white,
    lineHeight: getHeight(18),
    paddingLeft: getHeight(4),
  },
  whiteTextBold: {
    fontFamily: fonts.regular,
    fontWeight: '600',
    fontSize: getHeight(16),
    color: colors.white,
    lineHeight: getHeight(22),
  },
});
