import React from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ViewStyle,
} from 'react-native';

const Screen = ({ children, style }: { children: any; style?: ViewStyle }) => {
  return (
    <SafeAreaView style={[styles.container, style]}>
      <StatusBar barStyle={"dark-content"} />
      {children}</SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
