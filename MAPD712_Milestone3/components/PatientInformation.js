/*
Name: Masum Modi and Manoj Manikantan Muralidharan
Group No: 6
Description : View patient's information screen
*/

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import maleAvatarIcon from '../src/images/ic_avatar_male.png'
import { StyleSheet, Image, TouchableOpacity, Text, View } from 'react-native';

export default function PatientsList({ navigation }) {
    return (
        <View style={styles.containerBody}>
            <StatusBar style="auto" />
            <View style={styles.containerForm}>
                <View style={styles.containerInput}>
                    <View style={styles.containerImage}>
                        <Image style={styles.imageIcon} source={maleAvatarIcon} />
                    </View>
                    <Text style={styles.labelPatientName}>John Snow</Text>
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
                        <Text style={styles.labelPatientInfo}>Johnsnow@gmail.com</Text>
                        <Text style={styles.labelPatientInfo}>+1 226 776 3389</Text>
                        <Text style={styles.labelPatientInfo}>30</Text>
                        <Text style={styles.labelPatientInfo}>A+</Text>
                        <Text style={styles.labelPatientInfo}>46, Spruce Street, Waterloo, ON</Text>
                    </View>
                </View>
            
                <View style={styles.containerBottom}>
                    <TouchableOpacity onPress={() => navigation.navigate("PatientRecord")} style={styles.containerButton}>
                        <Text style={styles.buttonText}>View Records</Text>
                    </TouchableOpacity>
                </View>
        
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
        alignItems: 'center'
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
    },
    containerInput: {
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
        borderBottomWidth: 0.7,
        marginBottom: 40,
        borderBottomColor: '#78909c'
    },
    containerInformationBody: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    containerBottom: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom:20,
    },
    containerInformationLabel: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    containerInformation: {
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    labelHeadings: {
        alignItems: 'flex-start',
        fontSize: 16,
        padding: 10,
        color: '#78909c',
        fontWeight: '700',
    },
    labelPatientInfo: {
        alignItems: 'flex-start',
        fontSize: 14,
        padding: 10,
        color: '#78909c',
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
    }
});