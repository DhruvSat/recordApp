import React, { useContext, useState } from 'react';
import { createStackNavigator, } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import PoliceWomenSafety from '../screens/police/PoliceWomenSafety';
import ProfileScreen from '../screens/ProfileScreen';
import SafteyGrid1 from '../screens/SafteyGrid1';
import SafteyGrid2 from '../screens/SafteyGrid2';
import SafteyGrid3 from '../screens/SafteyGrid3';
import ComplaintRegister from '../screens/ComplaintRegister';
import ReportCrime from '../screens/ReportCrime';
import ViewFirDetail from '../screens/ViewFirDetail';
import ContactDetails from '../screens/ContactDetails';
import SuccessPage from '../components/SuccessPage';
import FileFIR from '../screens/police/FileFIR';
import ReportMissingPerson from '../screens/ReportMissingPerson';
import SearchMissingPerson from '../screens/police/SearchMissingPerson';
import NOC from '../screens/NOC';
import PVC from '../screens/PVC';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Entypo';
import { AuthContext } from './AuthProvider';
import firestore from '@react-native-firebase/firestore';
import { AuthProvider } from './AuthProvider';
// import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function HomeStack({ navigation }) {
  const { user } = useContext(AuthContext);
  const [isPolice, setIsPolice] = useState(false)
  var hsTitle = 'Gujarat Citizen'
  // fetching user data by user id
  firestore()
    .collection('users')
    .doc(user.uid)
    .get()
    .then(documentSnapshot => {
      if (documentSnapshot.exists) {
        setIsPolice(documentSnapshot.data().isPolice)
      }
    });

  if (isPolice) hsTitle = 'Gujarat Police'





  return (

    <Stack.Navigator>
      <Stack.Screen name='HomeScreen' component={HomeScreen}
        options={{
          headerLeft: () => (
            <Icon name="ios-menu" size={32} style={{ marginLeft: 12, color: '#fff' }}
              onPress={() => navigation.openDrawer()}></Icon>
          ),
          headerRight: () => (
            <Icon2 name="dots-three-vertical" size={22} style={{ marginRight: 8, color: '#fff' }}
              onPress={() => navigation.openDrawer()}></Icon2>
          ),

          title: `${hsTitle}`,
          headerStyle: {
            backgroundColor: '#0f3460',

          },
          headerTitleStyle: {
            color: '#ffffff'
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen name='AuthProvider' component={AuthProvider} />
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
      {isPolice ?
        (
          <Stack.Screen name='WOMEN SAFETY' component={PoliceWomenSafety}
            options={{
              title: 'POLICE WOMEN SAFETY',
              headerStyle: {
                backgroundColor: '#0f3460',
              },
              headerTitleStyle: {
                color: '#ffffff'
              },
              headerTitleAlign: 'center',
              headerTintColor: 'white'
            }} />
        )
        :
        (
          <Stack.Screen name='TRAVEL SAFTEY' component={SafteyGrid1}
            options={{
              title: 'TRAVEL SAFTEY',
              headerStyle: {
                backgroundColor: '#0f3460',
              },
              headerTitleStyle: {
                color: '#ffffff'
              },
              headerTitleAlign: 'center',
              headerTintColor: 'white'
            }} />
        )}

      <Stack.Screen name='WOMEN SAFTEY2' component={SafteyGrid2}
        options={{
          title: 'WOMEN SAFTEY2',
          headerStyle: {
            backgroundColor: '#0f3460',
          },
          headerTitleStyle: {
            color: '#ffffff'
          },
          headerTitleAlign: 'center',
          headerTintColor: 'white'
        }} />
      <Stack.Screen name='WOMEN SAFTEY3' component={SafteyGrid3}
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
      <Stack.Screen name='FileFIR' component={FileFIR}
        options={{
          title: 'REPORT FIR',
          headerStyle: {
            backgroundColor: '#0f3460',
          },
          headerTitleStyle: {
            color: '#ffffff'
          },
          headerTitleAlign: 'center',
          headerTintColor: 'white'
        }} />
      <Stack.Screen name='ContactDetails' component={ContactDetails}
        options={{
          title: 'HELPLINES',
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
      <Stack.Screen name='SearchMissingPerson' component={SearchMissingPerson}
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
