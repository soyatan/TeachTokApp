import React from 'react';

import {Image, ImageProps, StyleSheet, Text, View} from 'react-native';
import {Plus} from '../Assets/Pngs';
import {colors} from '../Constants/colors';
import {fonts} from '../Constants/fonts';
import {getHeight, getWidth} from '../Helpers/Responsive';

type Props = {
  count?: string;
  last?: boolean;
  source: ImageProps['source'];
  plusIcon?: boolean;
};

const Clickable = ({count, last, source, plusIcon}: Props) => {
  return (
    <View style={[styles.container, last && {marginBottom: 0}]}>
      <Image source={source} />
      {count && <Text style={styles.whiteTextLight}>{count}</Text>}
      {plusIcon && (
        <View style={styles.plusIconBox}>
          <Image source={Plus} />
        </View>
      )}
    </View>
  );
};

export default Clickable;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: getWidth(15),
    alignItems: 'center',
  },
  plusIconBox: {
    backgroundColor: colors.lightGreen,
    padding: getWidth(4),
    borderRadius: getHeight(30),
    position: 'absolute',
    bottom: getWidth(-5),
  },

  whiteTextLight: {
    fontFamily: fonts.regular,
    fontWeight: '500',
    fontSize: getHeight(12),
    color: colors.white,
    lineHeight: getHeight(18),
  },
  whiteTextBold: {
    fontFamily: fonts.regular,
    fontWeight: '600',
    fontSize: getHeight(16),
    color: colors.white,
    lineHeight: getHeight(22),
  },
});
