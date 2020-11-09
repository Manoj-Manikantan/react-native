/*
Name: Masum Modi and Manoj Manikantan Muralidharan
Group No: 6
Description : Sign up screen
*/

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import logoIcon from '../src/images/app_logo.png'
import usernameIcon from '../src/images/ic_user.png'
import emailIcon from '../src/images/ic_email.png'
import passwordIcon from '../src/images/ic_password.png'
import { StyleSheet, TextInput, Image, TouchableOpacity, Text, View } from 'react-native';

export default function Signup({ navigation }) {
  return (
    <View style={styles.containerBody}>
      <StatusBar style="auto" />
      <View style={styles.containerLogo}>
        <Image style={styles.tinyLogo} source={logoIcon} />
        <Text style={styles.title}>24x7 Medical Support</Text>
      </View>
      <View style={styles.containerForm}>
        <View style={styles.containerInput}>
          <Image style={styles.inputIcon} source={usernameIcon} />
          <TextInput
            style={styles.input}
            placeholder={'Username'}
            placeholderTextColor="#78909c" />
        </View>
        <View style={styles.containerInput}>
          <Image style={styles.inputIcon} source={emailIcon} />
          <TextInput
            style={styles.input}
            placeholder={'Email'}
            placeholderTextColor="#78909c" />
        </View>
        <View style={styles.containerInput}>
          <Image style={styles.inputIcon} source={passwordIcon} />
          <TextInput
            style={styles.input}
            placeholder={'Password'}
            placeholderTextColor="#78909c" />
        </View>
      </View>
      <TouchableOpacity style={styles.containerButton}>
        <Text onPress={() => navigation.navigate("Signup")} style={styles.buttonText}> Sign Up </Text>
      </TouchableOpacity>
      <View style={styles.containerLabel}>
        <Text style={styles.label}>Already have account?  </Text>
        <Text onPress={() => navigation.navigate("Login")} style={styles.signUpLabel}>Sign In</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerBody: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerLogo: {
    marginTop: 20,
    alignItems: 'center',
  },
  containerForm: {
    flex: 1,
    margin: 40,
  },
  containerLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 20,
    marginLeft: 40,
    marginRight: 40,
  },
  containerInput: {
    marginTop: 30,
    flexDirection: 'row',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#78909c',
  },
  containerButton: {
    backgroundColor: '#4dd0e1',
    borderRadius: 5,
    marginLeft: 40,
    marginRight: 40,
    padding: 15,
  },
  tinyLogo: {
    width: 150,
    height: 150,
  },
  inputIcon: {
    width: 30,
    height: 30,
  },
  title: {
    fontSize: 18,
    marginTop: 20,
    color: '#4dd0e1',
  },
  input: {
    fontSize: 18,
    marginLeft: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    color: '#000',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    color: '#78909c',
  },
  signUpLabel: {
    fontSize: 16,
    color: '#4dd0e1',
    borderBottomColor: '#4dd0e1',
    borderBottomWidth: 1,
  },
});
