import React from 'react';
import Providers from './src/navigation';

import React, { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth'
// import firestore from '@react-native-firebase/firestore'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';
import AddNewRecord from './src/screens/Police/AddNewRecord';
// import { View, Text } from 'react-native';


const Stack = createStackNavigator();

function App() {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (

    <NavigationContainer>
      <Stack.Navigator>
        {/* If this is true ? executeThis() : orElseThis() */}
        {user ? (
          <Stack.Screen name="HomeScreen" >
            {props => <HomeScreen {...props} extraData={user} />}
          </Stack.Screen>
        ) : (
            <>
              <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
              <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }} />
              <Stack.Screen name="AddNewRecord" component={AddNewRecord} options={{ headerShown: false }} />
            </>
          )}
      </Stack.Navigator>
    </NavigationContainer>

    // Satu bhai kaa navContainer
    // <NavigationContainer >
    //   <Stack.Navigator >
    //     <Stack.Screen
    //       name='LoginScreen'
    //       component={LoginScreen}
    //       options={{ headerShown: false }}
    //     />
    //     <Stack.Screen
    //       name='RegisterScreen'
    //       component={RegisterScreen}
    //       options={{ headerShown: false }}
    //     // options={{ title:'SignUp'}}
    //     />

    //     <Stack.Screen
    //       name='HomeScreen'
    //       component={HomeScreen}
    //     />

    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};


export default App;
export default function App() {
    return <Providers />;
}
