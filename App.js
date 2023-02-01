import React from 'react';
import {StatusBar, Text} from 'react-native';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';
import Header from './src/components/Header';
import {colors} from './src/global/styles';
import SignInScreen from './src/screens/AuthScreens/SignInScreen';
import SignInWelcomeScreen from './src/screens/AuthScreens/SignInWelcomeScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.statusbar} />
      {/* <SignInScreen /> */}
      <SignInWelcomeScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
