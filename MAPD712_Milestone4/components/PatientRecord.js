/*
Name: Masum Modi and Manoj Manikantan Muralidharan
Group No: 6
Description : Records of patient screen
*/

import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
import floatingButtonIcon from '../src/images/ic_floating_button.png'
import refreshIcon from '../src/images/ic_refresh.png'
import { API_URL } from '../constants/apiURL'

export default function PatientRecord({ navigation }) {

    const [isLoading, setLoading] = useState(true);
    const [patientRecords, setpatientRecords] = useState({});

    useEffect(() => {
        getAllPatients()
    }, []);

    const getAllPatients = () => {
        try {
            fetch(API_URL + "/patients/getRecords", {
                method: 'GET',
                mode: 'no-cors',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            })
                .then(response => response.json())
                .then(responseJson => {
                    setpatientRecords(responseJson)
                })
                .catch(error => console.log(error))
                .finally(() => setLoading(false))
        } catch (e) {
            console.log(e)
        }
    }

    if (typeof (patientRecords.statusCode) != 'undefined') {
        if (patientRecords.statusCode == '200') {
            return (
                <View style={styles.containerBody}>
                    <StatusBar style="auto" />
                    <View style={styles.containerForm}>
                        {isLoading ? <ActivityIndicator /> : (
                            <FlatList
                                data={patientRecords.record}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item }) => (
                                    <ListItem item={item} />
                                )}
                            />
                        )}
                    </View>
                    <View style={styles.containerFloating}>
                        <TouchableOpacity onPress={() => navigation.navigate("AddPatientRecord")}>
                            <Image style={styles.listIcon} source={floatingButtonIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
            );
        }
    }
    else {
        return (
            <View style={styles.containerBody}>
                <StatusBar style="auto" />
                <View style={styles.containerFloating}>
                    <TouchableOpacity onPress={() => navigation.navigate("AddPatientRecord")}>
                        <Image style={styles.listIcon} source={floatingButtonIcon} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

function ListItem(props) {
    return (
        <View style={styles.containerInput}>
            <View style={styles.containerLabel}>
                <Text style={styles.labelHeadings}>Blood Pressure :</Text>
                <Text style={styles.labelHeadings}>Respiratory Rate :</Text>
                <Text style={styles.labelHeadings}>Blood Oxygen Level :</Text>
                <Text style={styles.labelHeadings}>Heartbeat Rate :</Text>
            </View>
            <View style={styles.containerLabel}>
                <Text style={styles.labelRecords}>{props.item.bloodPressure} mm</Text>
                <Text style={styles.labelRecords}>{props.item.respiratoryRate}/min</Text>
                <Text style={styles.labelRecords}>{props.item.oxygenLevel}%</Text>
                <Text style={styles.labelRecords}>{props.item.heartbeatRate}/min</Text>
            </View>
            <View style={styles.containerLabel}>
                <Text style={styles.labelDate}>March 23, 2020</Text>
            </View>
        </View>
    )
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