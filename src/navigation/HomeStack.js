import React from 'react';
import { StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import WomenSaftey from '../screens/WomenSaftey';
import ComplaintRegister from '../screens/ComplaintRegister';
import ReportCrime from '../screens/ReportCrime';
import ViewFirDetail from '../screens/ViewFirDetail';
import { color } from 'react-native-reanimated';
import SuccessPage from '../components/SuccessPage';
import ReportMissingPerson from '../screens/ReportMissingPerson';
import NOC from '../screens/NOC';
import PVC from '../screens/PVC';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (

    <Stack.Navigator>
      <Stack.Screen name='HomeScreen' component={HomeScreen}
        options={{
          title: 'Gujarat Citizen',
          headerStyle: {
            backgroundColor: '#0f3460',
          },
          headerTitleStyle: {
            color: '#ffffff'
          },
          headerTitleAlign: 'center',

        }}
      />
      <Stack.Screen name='ProfileScreen' component={ProfileScreen}
        options={{
          title: 'PROFILE',
          headerStyle: {
            backgroundColor: '#0f3460',
          },
          headerTitleStyle: {
            color: '#ffffff'
          },
          headerTitleAlign: 'center',
          headerTintColor: 'white'
        }} />
      <Stack.Screen name='WOMEN SAFTEY' component={WomenSaftey}
        options={{
          title: 'WOMEN SAFTEY',
          headerStyle: {
            backgroundColor: '#0f3460',
          },
          headerTitleStyle: {
            color: '#ffffff'
          },
          headerTitleAlign: 'center',
          headerTintColor: 'white'
        }} />
      <Stack.Screen name='ComplaintRegister' component={ComplaintRegister}
        options={{
          title: 'REGISTER COMPLAINT',
          headerStyle: {
            backgroundColor: '#0f3460',
          },
          headerTitleStyle: {
            color: '#ffffff'
          },
          headerTitleAlign: 'center',
          headerTintColor: 'white'
        }} />
      <Stack.Screen name='Success' component={SuccessPage}
        options={{
          title: 'Success ✅',
          headerStyle: {
            backgroundColor: '#0f3460',
          },
          headerTitleStyle: {
            color: '#ffffff'
          },
          headerTitleAlign: 'center',
          headerTintColor: 'white'
        }} />
      <Stack.Screen name='ReportCrime' component={ReportCrime}
        options={{
          title: 'REPORT CRIME',
          headerStyle: {
            backgroundColor: '#0f3460',
          },
          headerTitleStyle: {
            color: '#ffffff'
          },
          headerTitleAlign: 'center',
          headerTintColor: 'white'
        }} />
      <Stack.Screen name='ViewFirDetail' component={ViewFirDetail}
        options={{
          title: 'View FIR Detail',
          headerStyle: {
            backgroundColor: '#0f3460',
          },
          headerTitleStyle: {
            color: '#ffffff'
          },
          headerTitleAlign: 'center',
          headerTintColor: 'white'
        }} />
      <Stack.Screen name='ReportMissingPerson' component={ReportMissingPerson}
        options={{
          title: 'Report Missing Person',
          headerStyle: {
            backgroundColor: '#0f3460',
          },
          headerTitleStyle: {
            color: '#ffffff'
          },
          headerTitleAlign: 'center',
          headerTintColor: 'white'
        }} />
      <Stack.Screen name='NOC' component={NOC}
        options={{
          title: 'Apply For NOC',
          headerStyle: {
            backgroundColor: '#0f3460',
          },
          headerTitleStyle: {
            color: '#ffffff'
          },
          headerTitleAlign: 'center',
          headerTintColor: 'white'
        }} />
      <Stack.Screen name='PVC' component={PVC}
        options={{
          title: 'Police Verification Certificate',
          headerStyle: {
            backgroundColor: '#0f3460',
          },
          headerTitleStyle: {
            color: '#ffffff'
          },
          headerTitleAlign: 'center',
          headerTintColor: 'white'
        }} />

    </Stack.Navigator>
  );
}
