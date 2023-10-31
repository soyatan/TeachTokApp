import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../Constants/colors';
import {fonts} from '../Constants/fonts';
import {getHeight} from '../Helpers/Responsive';

type Props = {title: string; text: string};

const QuestionDetails = ({title, text}: Props) => {
  return (
    <View style={[styles.container]}>
      <Text style={styles.whiteTextBold}>{title}</Text>
      <Text style={styles.whiteTextLight}>{text}</Text>
    </View>
  );
};

export default QuestionDetails;

const styles = StyleSheet.create({
  container: {
    paddingVertical: getHeight(12),
    marginTop: getHeight(0),

    alignItems: 'flex-start',
  },

  whiteTextLight: {
    fontFamily: fonts.regular,
    fontWeight: '400',
    fontSize: getHeight(13),
    color: colors.white,
    lineHeight: getHeight(18),
  },
  whiteTextBold: {
    fontFamily: fonts.regular,
    fontWeight: '600',
    fontSize: getHeight(15),
    color: colors.white,
    lineHeight: getHeight(22),
    paddingBottom: getHeight(6),
  },
});
