/*
Name: Masum Modi and Manoj Manikantan Muralidharan
Group No: 6
Description : View patient's information screen
*/

import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import maleAvatarIcon from '../src/images/ic_avatar_male.png'
import { StyleSheet, Image, TouchableOpacity, Text, View, ActivityIndicator } from 'react-native';
import { API_URL } from '../constants/apiURL'

export default function PatientInformation({ route, navigation }) {

    const [isLoading, setLoading] = useState(true);
    const [patientInfo, setPatientInfo] = useState({});

    useEffect(() => {
        getPatientById()
    }, []);

    const getPatientById = () => {
        try {
            fetch(API_URL + "/patients/detail", {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    patientId: route.params,
                })
            })
                .then(response => response.json())
                .then(responseJson => {
                    setPatientInfo(responseJson)
                })
                .catch(error => console.log(error))
                .finally(() => setLoading(false))
        } catch (e) {
            console.log(e)
        }
    }

    if (typeof (patientInfo.statusCode) != 'undefined') {
        if (patientInfo.statusCode == '200') {
            return (
                <View style={styles.containerBody}>
                    <StatusBar style="auto" />
                    {isLoading ? <ActivityIndicator /> : (
                        <View style={styles.containerForm}>
                            <View style={styles.containerInput}>
                                <View style={styles.containerImage}>
                                    <Image style={styles.imageIcon} source={maleAvatarIcon} />
                                </View>
                                <Text style={styles.labelPatientName}>{patientInfo.patient.fullName}</Text>
                            </View>
                            <View style={styles.containerInformationBody}>
                                <View style={styles.containerInformationLabel}>
                                    <Text style={styles.labelHeadings}>Email Id :</Text>
                                    <Text style={styles.labelHeadings}>Phone Number :</Text>
                                    <Text style={styles.labelHeadings}>Age :</Text>
                                    <Text style={styles.labelHeadings}>Blood Group :</Text>
                                    <Text style={styles.labelHeadings}>Address :</Text>
                                </View>
                                <View style={styles.containerInformation}>
                                    <Text style={styles.labelPatientInfo}>{patientInfo.patient.fullName}</Text>
                                    <Text style={styles.labelPatientInfo}>{patientInfo.patient.mobileNum}</Text>
                                    <Text style={styles.labelPatientInfo}>{patientInfo.patient.age}</Text>
                                    <Text style={styles.labelPatientInfo}>{patientInfo.patient.bloodType}</Text>
                                    <Text style={styles.labelPatientInfo}>{patientInfo.patient.address}</Text>
                                </View>
                            </View>

                            <View style={styles.containerBottom}>
                                <TouchableOpacity onPress={() => navigation.navigate("PatientRecord", patientInfo.patient._id)} style={styles.containerButton}>
                                    <Text style={styles.buttonText}>View Records</Text>
                                </TouchableOpacity>
                            </View>
                        </View>)}
                </View>
            );

        }
    }
    else {
        return (
            <ActivityIndicator />
        )
    }
}

const styles = StyleSheet.create({
    containerBody: {
        flex: 1,
    },
    containerForm: {
        flex: 1,
        margin: 10,
        alignItems: 'center',
    },
    containerImage: {
        alignItems: "center",
        padding: 20
    },
    imageIcon: {
        width: 90,
        height: 90,
    },
    labelPatientName: {
        fontSize: 18,
        color: '#78909c',
        fontWeight: '700',
        alignSelf: 'stretch',
        textAlign:'center'
    },
    containerInput: {
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
        borderBottomWidth: 1.2,
        marginBottom: 40,
        borderBottomColor: '#78909c',
        alignSelf: 'stretch'
    },
    containerInformationBody: {
        flex: 1,
        flexDirection: 'row',
    },
    containerBottom: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 20,
    },
    containerInformationLabel: {
        flex:1,
        flexDirection: 'column',
    },
    containerInformation: {
        flex:1,
        flexDirection: 'column',
    },
    labelHeadings: {
        alignItems: 'flex-start',
        fontSize: 16,
        padding: 10,
        color: '#78909c',
        fontWeight: '700',
        textAlign: 'right'
    },
    labelPatientInfo: {
        fontSize: 14,
        padding: 10,
        color: '#78909c',
        marginTop: 2,
        fontWeight: '300',
    },
    containerButton: {
        backgroundColor: '#78909c',
        borderRadius: 5,
        marginLeft: 40,
        marginRight: 40,
        padding: 15,
        flex: 1
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    mainContainer: {
        alignItems: 'center',
        backgroundColor: '#fff',
    }
});