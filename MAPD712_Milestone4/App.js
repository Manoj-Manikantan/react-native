/*
Name: Masum Modi and Manoj Manikantan Muralidharan
Assignment: Milestone 2: Prototype, interface implementation, implementing selected functionality
Group No: 6
*/

import React from 'react';
import SplashScreen from './components/SplashScreen'
import Login from './components/Login'
import Signup from './components/Signup'
import PatientsList from './components/PatientsList';
import AddPatient from './components/AddPatient';
import PatientInformation from './components/PatientInformation';
import PatientRecord from './components/PatientRecord';
import AddPatientRecord from './components/AddPatientRecord';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';

const { Navigator, Screen} = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
     <Navigator>
       <Screen name="SplashScreen" component={SplashScreen} />
       <Screen name="Login" component={Login} />
       <Screen name="Signup" component={Signup} />
       <Screen name="PatientsList" component={PatientsList} />
       <Screen name="AddPatient" component={AddPatient} />
       <Screen name="PatientInformation" component={PatientInformation} />
       <Screen name="PatientRecord" component={PatientRecord} />
       <Screen name="AddPatientRecord" component={AddPatientRecord} />
     </Navigator>
   </NavigationContainer>
  );
}