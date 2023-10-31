import React from 'react';

import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {PlaylistIcon, RightArrow} from '../Assets/Pngs';
import {colors} from '../Constants/colors';
import {fonts} from '../Constants/fonts';
import {getHeight, getWidth} from '../Helpers/Responsive';

type Props = {text: string; onPress: () => void};

const PlayList = ({text, onPress}: Props) => {
  return (
    <View style={styles.container}>
      <Image source={PlaylistIcon} />
      <Text style={styles.whiteTextLight} numberOfLines={1}>
        {text}
      </Text>
      <TouchableOpacity onPress={onPress}>
        <Image source={RightArrow} />
      </TouchableOpacity>
    </View>
  );
};

export default PlayList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: getHeight(16),
    paddingVertical: getWidth(10),
    alignItems: 'center',
    marginTop: getWidth(12),

    backgroundColor: colors.black2,
  },

  whiteTextLight: {
    fontFamily: fonts.regular,
    fontWeight: '600',
    textAlign: 'left',

    flex: 1,
    fontSize: getHeight(13),
    color: colors.white,
    lineHeight: getHeight(16),
    paddingHorizontal: getHeight(7),
  },
  whiteTextBold: {
    fontFamily: fonts.regular,
    fontWeight: '600',
    fontSize: getHeight(16),
    color: colors.white,
    lineHeight: getHeight(22),
  },
});
