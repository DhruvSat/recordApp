import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import WomenSaftey from '../screens/WomenSaftey';
import ComplaintRegister from '../screens/ComplaintRegister';
import ReportCrime from '../screens/ReportCrime';
import { color } from 'react-native-reanimated';

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='HomeScreen' component={HomeScreen}
            options={{
                title: 'Home Screen',
                headerStyle: {
                  backgroundColor: '#00008d',
                },
                headerTitleStyle: {
                  color:'#ffffff'
                },
                headerTitleAlign:'center',
              }} 
            />
            <Stack.Screen name='ProfileScreen' component={ProfileScreen}
            options={{
                title: 'Profile Section',
                headerStyle: {
                  backgroundColor: '#00008d',
                },
                headerTitleStyle: {
                  color:'#ffffff'
                },
                headerTitleAlign:'center',
                headerTintColor: 'white'
              }} />
            <Stack.Screen name='WOMEN SAFTEY' component={WomenSaftey} 
            options={{
                title: 'WOMEN SAFTEY',
                headerStyle: {
                  backgroundColor: '#00008d',
                },
                headerTitleStyle: {
                  color:'#ffffff'
                },
                headerTitleAlign:'center',
                headerTintColor: 'white'
              }}/>
            <Stack.Screen name='ComplaintRegister' component={ComplaintRegister} 
            options={{
                title: 'REGISTER COMPLAINT',
                headerStyle: {
                  backgroundColor: '#00008d',
                },
                headerTitleStyle: {
                  color:'#ffffff'
                },
                headerTitleAlign:'center',
                headerTintColor: 'white'
              }}/>
            <Stack.Screen name='ReportCrime' component={ReportCrime} 
            options={{
                title: 'ReportCrime',
                headerStyle: {
                  backgroundColor: '#00008d',
                },
                headerTitleStyle: {
                  color:'#ffffff'
                },
                headerTitleAlign:'center',
                headerTintColor: 'white'
              }}/>
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
            <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
        </Stack.Navigator>
    );
}
