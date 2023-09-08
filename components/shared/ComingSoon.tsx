import React from 'react';

import { StyleSheet } from 'react-native';

import View from './View';
import Text from './Text';

const ComingSoon = () => {
  return (
    <View style={styles.container}>
      <Text variant="heading">Coming Soon</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    height: '100%',
  },
});

export default ComingSoon;
