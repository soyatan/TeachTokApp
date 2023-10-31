import React from 'react';

import {Image, StyleSheet, Text, View} from 'react-native';
import {Clock, Search} from '../Assets/Pngs';
import {colors} from '../Constants/colors';
import {fonts} from '../Constants/fonts';
import {getHeight, getWidth} from '../Helpers/Responsive';

type Props = {time: number};

const HeaderComponent = ({time}: Props) => {
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;
  return (
    <View style={styles.container}>
      <View style={styles.clockContainer}>
        <Image source={Clock} />
        <Text style={styles.whiteTextLight}>
          {('0' + minutes).slice(-2)} {('0' + seconds).slice(-2)}
        </Text>
      </View>
      <View style={styles.forYouContainer}>
        <Text style={styles.whiteTextBold}>For You</Text>
        <View style={styles.whiteLine}></View>
      </View>
      <Image source={Search} />
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: getHeight(8),
    alignItems: 'center',
  },
  clockContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  forYouContainer: {flexDirection: 'column', justifyContent: 'space-between'},
  whiteLine: {
    width: getWidth(30),
    marginTop: getHeight(3),
    height: getHeight(4),
    alignSelf: 'center',
    backgroundColor: colors.white,
  },
  whiteTextLight: {
    fontFamily: fonts.regular,
    fontWeight: '400',
    fontSize: getHeight(14),
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
