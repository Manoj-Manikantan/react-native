/*
Name: Masum Modi and Manoj Manikantan Muralidharan
Group No: 6
Description : Add Patient Record Screen
*/

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Text, View, Alert } from 'react-native';
import { API_URL } from '../constants/apiURL'

export default function AddPatientRecord({ navigation }) {

    const [bloodPressure, setbloodPressure] = useState('');
    const [respiratoryRate, setrespiratoryRate] = useState('');
    const [oxygenLevel, setoxygenLevel] = useState('');
    const [heartbeatRate, setheartbeatRate] = useState('');

    const addPatientRecordClicked = () => {
        if (bloodPressure != "" && respiratoryRate != "" && oxygenLevel != "" && heartbeatRate != "") {
            try {
                fetch(API_URL + "/patients/addRecord", {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        bloodPressure: bloodPressure,
                        respiratoryRate: respiratoryRate,
                        oxygenLevel: oxygenLevel,
                        heartbeatRate: heartbeatRate
                    })
                })
                    .then(response => response.json())
                    .catch(error => console.log(error))
            } catch (e) {
                console.log(e)
            }
            Alert.alert('Patient record added successfully.')
            navigation.navigate("PatientRecord")
        }
        else {
            Alert.alert('Please fill all the fields before submitting.')
        }
    }

    return (
        <View style={styles.containerBody}>
            <StatusBar style="auto" />
            <View style={styles.containerForm}>
                <View style={styles.containerInput}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Blood Pressure (X/Y mmHg)'}
                        onChangeText={txt => setbloodPressure(txt)}
                        placeholderTextColor="#78909c" />
                </View>
                <View style={styles.containerInput}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Respiratory Rate (X/min)'}
                        onChangeText={txt => setrespiratoryRate(txt)}
                        placeholderTextColor="#78909c" />
                </View>
                <View style={styles.containerInput}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Blood Oxygen Level (X%)'}
                        onChangeText={txt => setoxygenLevel(txt)}
                        placeholderTextColor="#78909c" />
                </View>
                <View style={styles.containerInput}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Heartbeat Rate (X/min)'}
                        onChangeText={txt => setheartbeatRate(txt)}
                        placeholderTextColor="#78909c" />
                </View>
            </View>
            <TouchableOpacity onPress={addPatientRecordClicked} style={styles.containerButton}>
                <Text style={styles.buttonText}> Add Record </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    containerBody: {
        flex: 1,
        backgroundColor: '#fff',
    },
    containerForm: {
        margin: 20
    },
    containerInput: {
        margin: 20,
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
        marginBottom: 30,
    },
    input: {
        fontSize: 18,
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        color: '#000',
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    }
});
