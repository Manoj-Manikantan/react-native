/*
Name: Masum Modi and Manoj Manikantan Muralidharan
Group No: 6
Description : Sign up screen
*/

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import logoIcon from '../src/images/app_logo.png'
import usernameIcon from '../src/images/ic_user.png'
import emailIcon from '../src/images/ic_email.png'
import passwordIcon from '../src/images/ic_password.png'
import { StyleSheet, TextInput, Image, TouchableOpacity, Text, View, Alert } from 'react-native';
import { API_URL } from '../constants/apiURL'

export default function Signup({ navigation }) {

  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signUpClicked = () => {
    if (userName != '' && email != '' && password != '') {
      signupAPIrequest()
    }
    else {
      Alert.alert('Please fill all the fields before submitting.')
    }
  }

  const signupAPIrequest = async () => {
    const response = await fetch(API_URL + "/doctor/signup", {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName: userName,
        email: email,
        password: password
      })
    })
    const signupData = await response.json();
    if (signupData.statusCode == "201") {
      Alert.alert('Email id already in use')
      setUserName('')
      setEmail('')
      setPassword('')
    }
    else if (signupData.statusCode == "200") {
      Alert.alert('Doctor Sign Up successful.')
      navigation.navigate("Login")
    }
  }

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
            value={userName}
            onChangeText={txt => setUserName(txt)}
            placeholder={'Username'}
            placeholderTextColor="#78909c" />
        </View>
        <View style={styles.containerInput}>
          <Image style={styles.inputIcon} source={emailIcon} />
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={txt => setEmail(txt)}
            placeholder={'Email'}
            placeholderTextColor="#78909c" />
        </View>
        <View style={styles.containerInput}>
          <Image style={styles.inputIcon} source={passwordIcon} />
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={txt => setPassword(txt)}
            placeholder={'Password'}
            placeholderTextColor="#78909c" />
        </View>
      </View>
      <TouchableOpacity onPress={signUpClicked} style={styles.containerButton}>
        <Text style={styles.buttonText}> Sign Up </Text>
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
    margin: 40
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
