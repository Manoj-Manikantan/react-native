/*
Name: Masum Modi and Manoj Manikantan Muralidharan
Group No: 6
Description : List of patients screen
*/

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import maleAvatarIcon from '../src/images/ic_avatar_male.png'
import rightArrowIcon from '../src/images/ic_right_arrow.png'
import femaleAvatarIcon from '../src/images/ic_avatar_female.png'
import floatingButtonIcon from '../src/images/ic_floating_button.png'
import { StyleSheet, Image, TouchableOpacity, Text, View } from 'react-native';

export default function PatientsList({ navigation }) {
  return (
    <View style={styles.containerBody}>
      <StatusBar style="auto" />
      <View style={styles.containerForm}>
        <View style={styles.containerInput}>
          <Image style={styles.listIcon} source={femaleAvatarIcon} />
          <View style={styles.containerLabel}>
            <Text style={styles.labelUsername}> Anna Watson  </Text>
            <Text style={styles.labelMobile}>+1 226 338 0980</Text>
            <Text style={styles.labelVisit}>Last visited March 23, 2020</Text>
          </View>
          <Image style={styles.listSmallIcon} source={rightArrowIcon} />
        </View>
        <View style={styles.containerInput}>
          <Image style={styles.listIcon} source={maleAvatarIcon} />
          <View style={styles.containerLabel}>
            <Text style={styles.labelUsername}> John Snow  </Text>
            <Text style={styles.labelMobile}>+1 226 669 9980</Text>
            <Text style={styles.labelVisit}>Last visited Feb 22, 2020</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("PatientInformation")}>
            <Image style={styles.listSmallIcon} source={rightArrowIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.containerInput}>
          <Image style={styles.listIcon} source={maleAvatarIcon} />
          <View style={styles.containerLabel}>
            <Text style={styles.labelUsername}> Agent Hunt  </Text>
            <Text style={styles.labelMobile}>+1 226 667 8900</Text>
            <Text style={styles.labelVisit}>Last visited Jan 01, 2020</Text>
          </View>
          <Image style={styles.listSmallIcon} source={rightArrowIcon} />
        </View>
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
    marginTop: 5,
    fontSize: 16,
    color: '#78909c',
  },
  labelVisit: {
    fontSize: 14,
    color: '#78909c',
    fontWeight: '100',
  },
});