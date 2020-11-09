/*
Name: Masum Modi and Manoj Manikantan Muralidharan
Group No: 6
Description : Splash screen
*/

import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import logoIcon from '../src/images/app_logo.png'
import { StyleSheet, Image, Text, View } from 'react-native';

export default function SplashScreen({ navigation }) {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login")
    }, 2000);
  }, []);
  
  return (
    <View style={styles.container}>
       <Image
        style={styles.tinyLogo}
        source={logoIcon}
        />
      <Text style={styles.title}>24x7 Medical Support</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 18,
    marginTop: 50,
    color: '#4dd0e1',
  },
});
