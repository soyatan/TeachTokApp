import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../Constants/colors';
import {fonts} from '../Constants/fonts';
import {getHeight, widthPercentage} from '../Helpers/Responsive';

type Props = {question: String};

const QuestionBox = ({question}: Props) => {
  const BGText = (props: any) => {
    return (
      <Text
        style={{
          backgroundColor: colors.black,
          ...props.style,
          borderRadius: 20,
        }}>
        {props.children}
      </Text>
    );
  };

  return (
    <View style={styles.container}>
      <BGText style={styles.whiteTextBold}>{question}</BGText>
    </View>
  );
};

export default QuestionBox;

const styles = StyleSheet.create({
  container: {
    opacity: 0.6,
    maxWidth: widthPercentage(85),
    alignItems: 'flex-start',
    marginTop: getHeight(40),
    borderRadius: 20,
  },

  whiteTextBold: {
    fontFamily: fonts.regular,

    fontWeight: '500',
    fontSize: getHeight(22),
    textAlignVertical: 'auto',
    color: colors.white,
    lineHeight: getHeight(34),
    padding: 6,
  },
});
