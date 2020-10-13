
import React, { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth'
// import firestore from '@react-native-firebase/firestore'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SettingScreen from './src/screens/SettingScreen';
import ServiceScreen from './src/screens/ServiceScreen';
// import { View, Text } from 'react-native';

const Drawer = createDrawerNavigator();

const AppTabs = createBottomTabNavigator();

const ProfileStack = createStackNavigator();
const ProfileStackNav = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
      <ProfileStack.Screen name="SettingScreen" component={SettingScreen} />
    </ProfileStack.Navigator>)
}

const AppTabsScreen = () => {
  return (
    <AppTabs.Navigator>
      <AppTabs.Screen name="HomeScreen" component={ProfileStackNav} />
      <AppTabs.Screen name="ServiceScreen" component={ServiceScreen} />
    </AppTabs.Navigator>
  )

}

const AuthStack = createStackNavigator();
const AuthStackNav = () => {

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


    <AuthStack.Navigator>
      {/* If this is true ? executeThis() : orElseThis() */}
      {user ? (
        <>
          <ProfileStack.Screen name="HomeScreen"  >
            {props => <HomeScreen {...props} extraData={user} />}
          </ProfileStack.Screen>
          <ProfileStack.Screen name="ProfileScreen" component={AppTabsScreen} />
        </>
      ) : (
          <>
            <AuthStack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
            <AuthStack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }} />
          </>
        )}
    </AuthStack.Navigator>
  )
}

function App() {

  return (
    <NavigationContainer>
      <AuthStackNav />
    </NavigationContainer>

  )
}

// const [initializing, setInitializing] = useState(true);
// const [user, setUser] = useState();

// // Handle user state changes
// function onAuthStateChanged(user) {
//   setUser(user);
//   if (initializing) setInitializing(false);
// }

// useEffect(() => {
//   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//   return subscriber; // unsubscribe on unmount
// }, []);

// if (initializing) return null;

// return (

//   <NavigationContainer>
//     <Stack.Navigator>
//       {/* If this is true ? executeThis() : orElseThis() */}
//       {user ? (
//         <>
//           <Stack.Screen name="HomeScreen" >
//             {props => <HomeScreen {...props} extraData={user} />}
//           </Stack.Screen>
//           <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
//         </>
//       ) : (
//           <>
//             <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
//             <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }} />
//           </>
//         )}
//     </Stack.Navigator>
//   </NavigationContainer>

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
//   );
// };


export default App;
