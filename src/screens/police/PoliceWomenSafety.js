import React, { useContext, useState } from 'react';

import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { AuthContext } from '../navigation/AuthProvider';
import firestore from '@react-native-firebase/firestore';
import { Card } from 'react-native-elements';

const MyComplaint = () => {
    const { user } = useContext(AuthContext);
    var complaintsLocal = [];
    firestore().collection("complaints").where("cUID", "==", user.uid)
        .get()
        .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                complaintsLocal.push(doc.data());
                window.temp = complaintsLocal.slice()
            });
        })
        .catch(function (error) {
            console.log("Error getting documents: ", error);
        });
    return (
        <ScrollView style={styles.scrview}>
            <View style={styles.container}>
                {window.temp.map((data) => {
                    return (
                        <Card title={data.cType}>
                            <Text>Women Name : {data.cName}</Text>
                            <Text>Complaintant Mobile Number : {data.cMobile}</Text>
                            <Text>Date : {data.cDate}</Text>
                            <Text>Place of Occurence : {data.cPlace}</Text>
                            <Text>Type of Complaint : {data.cType}</Text>
                            <Text>Complaintant Address : {data.cAddress}</Text>
                            <Text>Complaint Description : {data.cDesc}</Text>
                            <Text>Remarks : {data.cRemarks}</Text>
                        </Card>
                    )
                })}
            </View>
        </ScrollView>
    )

}
const styles = StyleSheet.create({
    scrview: {
        flex: 1
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 40,
        backgroundColor: '#ecf0f1',
    },
    paragraph: {
        flex: 1,
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
    },
});
export default MyComplaint