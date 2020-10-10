
import React from 'react';

import 'react-native-gesture-handler';
<<<<<<< HEAD



=======
// import { createAppContainer } from 'react-navigation';
>>>>>>> ec884da322a3eaaf458690eec677a0f4a10a09df
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'

import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen'



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


<<<<<<< HEAD
=======
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen'



const Stack = createStackNavigator();

function App() {


>>>>>>> ec884da322a3eaaf458690eec677a0f4a10a09df
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name='LoginScreen'
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='RegisterScreen'
          component={RegisterScreen}
          options={{ headerShown: false }}
          // options={{ title:'SignUp'}}
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
