/*
Name: Masum Modi and Manoj Manikantan Muralidharan
Group No: 6
Description : List of patients screen
*/

import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import maleAvatarIcon from '../src/images/ic_avatar_male.png'
import rightArrowIcon from '../src/images/ic_right_arrow.png'
import floatingButtonIcon from '../src/images/ic_floating_button.png'
import { StyleSheet, Image, TouchableOpacity, Text, View } from 'react-native';
import { API_URL } from '../constants/apiURL'

export default function PatientsList({ navigation }) {

  const [patientList, setPatientList] = useState([""]);

  useEffect(() => {
    getAllPatients()
  }, []);

  const getAllPatients = () => {
    try {
      fetch(API_URL + "/patients", {
        method: 'GET',
        mode: 'no-cors',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      })
        .then(response => response.json())
        .then(responseJson =>{
          setPatientList(responseJson)
          arrayCheck()
        })
        .catch(error => console.log(error))
    } catch (e) {
      console.log(e)
    }

  }

  const arrayCheck = () => {
    if (patientList != "") {
      console.log("I'm here: " + patientList)
      patientList.map((resultValue) =>
        console.log(resultValue.fullName + "\n" + resultValue.age+ "\n" + resultValue.mobileNum)
      )
    }
  }

  return (
    <View style={styles.containerBody}>
      <StatusBar style="auto" />
      <View style={styles.containerForm}>
        {patientList.map((resultValue, index) =>
        <View key={index}>
        <View style={styles.containerInput}>
          <Image style={styles.listIcon} source={maleAvatarIcon} />
          <View style={styles.containerLabel}>
            <Text style={styles.labelUsername}>Name : {resultValue.fullName}</Text>
            <Text style={styles.labelAge}>Age : {resultValue.age}</Text>
            <Text style={styles.labelMobile}>Phone Number : {resultValue.mobileNum}</Text>
          </View>
          <Image style={styles.listSmallIcon} source={rightArrowIcon} />
        </View>
        </View>
        )}
      </View>
      <View style={styles.containerFloating}>
        <TouchableOpacity onPress={() => navigation.navigate("AddPatient")}>
          <Image style={styles.listIcon} source={floatingButtonIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerBody: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerForm: {
    flex: 1,
    margin: 10,
  },
  containerLabel: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 20,
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomWidth: 0.7,
    borderBottomColor: '#78909c',
  },
  containerFloating: {
    alignItems: "flex-end",
    padding: 20
  },
  listIcon: {
    width: 60,
    height: 60,
  },
  listSmallIcon: {
    width: 30,
    height: 30,
  },
  title: {
    fontSize: 18,
    marginTop: 20,
    color: '#4dd0e1',
  },
  labelUsername: {
    fontSize: 18,
    color: '#78909c',
    fontWeight: '700',
  },
  labelMobile: {
    fontSize: 14,
    color: '#78909c',
  },
  labelAge: {
    fontSize: 14,
    color: '#78909c',
    fontWeight: '100',
  },
});