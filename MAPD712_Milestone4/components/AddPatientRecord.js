/*
Name: Masum Modi and Manoj Manikantan Muralidharan
Group No: 6
Description : Add Patient Record Screen
*/

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Text, View } from 'react-native';

export default function AddPatientRecord({ navigation }) {
    return (
        <View style={styles.containerBody}>
            <StatusBar style="auto" />
            <View style={styles.containerForm}>
                <View style={styles.containerInput}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Blood Pressure (X/Y mmHg)'}
                        placeholderTextColor="#78909c" />
                </View>
                <View style={styles.containerInput}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Respiratory Rate (X/min)'}
                        placeholderTextColor="#78909c" />
                </View>
                <View style={styles.containerInput}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Blood Oxygen Level (X%)'}
                        placeholderTextColor="#78909c" />
                </View>
                <View style={styles.containerInput}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Heartbeat Rate (X/min)'}
                        placeholderTextColor="#78909c" />
                </View>
            </View>
            <TouchableOpacity style={styles.containerButton}>
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
        margin:20
    },
    containerInput: {
        margin:20,
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
