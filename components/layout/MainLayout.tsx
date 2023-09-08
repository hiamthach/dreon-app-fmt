import React from 'react';

import { StyleSheet } from 'react-native';

import TabBar from './TabBar';
import View from '../shared/View';
import { ScrollView } from 'react-native-gesture-handler';

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <View style={styles.layout}>
      <ScrollView>{children}</ScrollView>
      <TabBar />
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    height: '100%',
  },
});

export default MainLayout;
