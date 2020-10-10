
import React from 'react';

import 'react-native-gesture-handler';
// import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'

import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';


const Stack = createStackNavigator();

// function App() {
//   return (

//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="LoginScreen" component={LoginScreen} />
//         <Stack.Screen name="Register" component={RegisterScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>

//   );
// }

function App() {


import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen'



const Stack = createStackNavigator();

function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name='LoginScreen'
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='RegisterScreen'
          component={RegisterScreen}
        />

        <Stack.Screen
          name='HomeScreen'
          component={HomeScreen}

        />



      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
