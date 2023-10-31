import React from 'react';

import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Correct, InCorrect} from '../Assets/Pngs';
import {colors} from '../Constants/colors';
import {fonts} from '../Constants/fonts';
import {getHeight} from '../Helpers/Responsive';

type Props = {
  choice: string;
  correctAnswer: boolean | undefined;
  wrongAnswer: boolean | undefined;
  selected: boolean;
  disabled: boolean;
  onPress: () => void;
};

const ChoiceBox = ({
  disabled,
  choice,
  wrongAnswer,
  correctAnswer,
  onPress,
  selected,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      disabled={disabled}
      style={[
        styles.container,
        selected === true
          ? {backgroundColor: colors.green}
          : correctAnswer && !selected
          ? {backgroundColor: colors.red}
          : {backgroundColor: colors.gray},
      ]}>
      <Text style={styles.whiteTextLight}>{choice}</Text>
      <View style={styles.imageBox}>
        {correctAnswer === true && selected === true ? (
          <Image source={Correct} style={styles.image} />
        ) : (
          correctAnswer === true && (
            <Image source={InCorrect} style={styles.image} />
          )
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ChoiceBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',

    justifyContent: 'space-between',
    padding: getHeight(12),
    marginBottom: getHeight(8),
    borderRadius: getHeight(8),
    minHeight: 30,
    alignItems: 'center',
  },
  image: {width: 30, height: 30},
  imageBox: {width: 30, minHeight: 30, height: '100%'},
  whiteTextLight: {
    fontFamily: fonts.regular,
    fontWeight: '400',
    flex: 1,
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
