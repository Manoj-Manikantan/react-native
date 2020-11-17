/*
Name: Masum Modi and Manoj Manikantan Muralidharan
Group No: 6
Description : Records of patient screen
*/

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import floatingButtonIcon from '../src/images/ic_floating_button.png'
import { API_URL } from '../constants/apiURL'

export default function PatientRecord({ navigation }) {

    return (
        <View style={styles.containerBody}>
            <StatusBar style="auto" />
            <View style={styles.containerForm}>
                <View style={styles.containerInput}>
                    <View style={styles.containerLabel}>
                        <Text style={styles.labelHeadings}>Blood Pressure :</Text>
                        <Text style={styles.labelHeadings}>Respiratory Rate :</Text>
                        <Text style={styles.labelHeadings}>Blood Oxygen Level :</Text>
                        <Text style={styles.labelHeadings}>Heartbeat Rate :</Text>
                    </View>
                    <View style={styles.containerLabel}>
                        <Text style={styles.labelRecords}>90/60 mm</Text>
                        <Text style={styles.labelRecords}>12/min</Text>
                        <Text style={styles.labelRecords}>98%</Text>
                        <Text style={styles.labelRecords}>80/min</Text>
                    </View>
                    <View style={styles.containerLabel}>
                        <Text style={styles.labelDate}>March 23, 2020</Text>
                    </View>
                </View>
                <View style={styles.containerInput}>
                    <View style={styles.containerLabel}>
                        <Text style={styles.labelHeadings}>Blood Pressure :</Text>
                        <Text style={styles.labelHeadings}>Respiratory Rate :</Text>
                        <Text style={styles.labelHeadings}>Blood Oxygen Level :</Text>
                        <Text style={styles.labelHeadings}>Heartbeat Rate :</Text>
                    </View>
                    <View style={styles.containerLabel}>
                        <Text style={styles.labelRecords}>120/50 mm</Text>
                        <Text style={styles.labelRecords}>12/min</Text>
                        <Text style={styles.labelRecords}>98%</Text>
                        <Text style={styles.labelRecords}>82/min</Text>
                    </View>
                    <View style={styles.containerLabel}>
                        <Text style={styles.labelDate}>Feb 22, 2020</Text>
                    </View>
                </View>
                <View style={styles.containerInput}>
                    <View style={styles.containerLabel}>
                        <Text style={styles.labelHeadings}>Blood Pressure :</Text>
                        <Text style={styles.labelHeadings}>Respiratory Rate :</Text>
                        <Text style={styles.labelHeadings}>Blood Oxygen Level :</Text>
                        <Text style={styles.labelHeadings}>Heartbeat Rate :</Text>
                    </View>
                    <View style={styles.containerLabel}>
                        <Text style={styles.labelRecords}>90/60 mm</Text>
                        <Text style={styles.labelRecords}>12/min</Text>
                        <Text style={styles.labelRecords}>98%</Text>
                        <Text style={styles.labelRecords}>80/min</Text>
                    </View>
                    <View style={styles.containerLabel}>
                        <Text style={styles.labelDate}>Jan 01, 2020</Text>
                    </View>
                </View>
            </View>
            <View style={styles.containerFloating}>
                <TouchableOpacity onPress={() => navigation.navigate("AddPatientRecord")}>
                    <Image style={styles.listIcon} source={floatingButtonIcon} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerBody: {
        flex: 1,
        backgroundColor: '#fff'
    },
    containerForm: {
        flex: 1,
        margin: 10
    },
    containerLabel: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: 20
    },
    containerInput: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 0.7,
        borderBottomColor: '#78909c'
    },
    containerFloating: {
        alignItems: "flex-end",
        padding: 20
    },
    listIcon: {
        width: 60,
        height: 60
    },
    labelHeadings: {
        fontSize: 14,
        color: '#78909c',
        fontWeight: '700'
    },
    labelRecords: {
        fontSize: 12,
        color: '#78909c',
        fontWeight: '300'
    },
    labelDate: {
        fontSize: 11,
        color: '#78909c',
        fontWeight: '300'
    }
});