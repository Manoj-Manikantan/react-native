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
import refreshIcon from '../src/images/ic_refresh.png'
import { StyleSheet, Image, TouchableOpacity, Text, View, ActivityIndicator, FlatList } from 'react-native';
import { API_URL } from '../constants/apiURL'

export default function PatientsList({ route, navigation }) {

  const [isLoading, setLoading] = useState(true);
  const [patientResponse, setPatientResponse] = useState({});
  const [doctorId, setDoctorId] = useState("  ")

  useEffect(() => {
    setDoctorId(route.params)
    getAllPatients()
  }, []);

  const getAllPatients = () => {
    try {
      fetch(API_URL + "/patients", {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          doctorId: doctorId,
        })
      })
        .then(response => response.json())
        .then(responseJson => {
          console.log(responseJson)
          setPatientResponse(responseJson)
        })
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    } catch (e) {
      console.log(e)
    }
  }

  const refreshPatientListAPI = () => {
    getAllPatients()
  }

  const arrowOnClick = (userId) => {
    navigation.navigate("PatientInformation", userId)
  }

  const AddRefreshPatient = () => {
    return (
      <View style={styles.containerFloating}>
        <TouchableOpacity onPress={() => refreshPatientListAPI()}>
          <Image style={styles.listIconRefresh} source={refreshIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("AddPatient", doctorId)}>
          <Image style={styles.listIconRefresh} source={floatingButtonIcon} />
        </TouchableOpacity>
      </View>
    )
  }

  const ListItem = (props) => {
    return (
      <View style={styles.listContainer}>
        <Image style={styles.listIcon} source={maleAvatarIcon} />
        <View style={styles.listDetails}>
          <Text style={styles.labelUsername}>Name : {props.item.fullName}</Text>
          <Text style={styles.labelAge}>Age : {props.item.age}</Text>
          <Text style={styles.labelMobile}>Number : {props.item.mobileNum}</Text>
        </View>
        <TouchableOpacity onPress={() => arrowOnClick(props.item._id)}>
          <Image style={styles.listSmallIcon} source={rightArrowIcon} />
        </TouchableOpacity>
      </View>
    )
  }

  if (typeof (patientResponse.statusCode) != 'undefined') {
    if (patientResponse.statusCode == '200') {
      return (
        <View style={styles.containerBody}>
          <StatusBar style="auto" />
          <View style={styles.containerForm}>
            {isLoading ? <ActivityIndicator /> : (
              <FlatList
                data={patientResponse.patients}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <ListItem item={item} />
                )}
              />
            )}
          </View>
          <AddRefreshPatient />
        </View>
      )
    } else {
      return (
        <AddRefreshPatient />
      )
    }
  } else {
    return (
      <AddRefreshPatient />
    )
  }
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
  containerFloating: {
    alignItems: "flex-end",
    alignSelf: "flex-end",
    flexDirection: 'row',
    padding: 20
  },
  listIcon: {
    width: 60,
    height: 60,
    marginRight: 20
  },
  listIconRefresh: {
    width: 50,
    height: 50,
    margin: 10,
  },
  listSmallIcon: {
    width: 30,
    height: 30
  },
  labelUsername: {
    fontSize: 18,
    color: '#78909c',
    fontWeight: '700'
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
  listContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 0.7,
    borderBottomColor: '#78909c'
  },
  listDetails: {
    width: 240,
    height: 50
  }
});