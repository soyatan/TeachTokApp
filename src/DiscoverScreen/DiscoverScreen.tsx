import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';

import {RouteProp} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../Common/Constants/colors';
import {RootStackParamList} from '../Common/Helpers/RootStackParamList';

type Props = {
  navigation: NativeStackScreenProps<RootStackParamList, 'Discover'>;
  route: RouteProp<RootStackParamList, 'Discover'>;
};

const DiscoverScreen = ({route, navigation}: Props) => {
  return (
    <View style={styles.container}>
      <Text>HELLO WORLDY</Text>
    </View>
  );
};

export default DiscoverScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: colors.red,
  },
});
