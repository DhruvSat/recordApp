
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import LoginScreen from './src/screens/loginScreen'


const HomeScreen = () => {

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor= "#000000"
        basstyle= "light-content"
      />
      <LoginScreen/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#000000',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent:'center'
  }
})
export default HomeScreen;
