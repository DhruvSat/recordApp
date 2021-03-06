import React, { useState, useContext } from "react";
import {
    Text,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
} from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';
import firestore from '@react-native-firebase/firestore';


const ComplaintRegister = ({ navigation }) => {

    const { user } = useContext(AuthContext);

    const [cName, setCName] = useState('')
    const [cMobile, setCMobile] = useState('')
    const [cDate, setCDate] = useState('')
    const [cPlace, setCPlace] = useState('')
    const [cType, setCType] = useState('')
    const [cAddress, setCAddress] = useState('')
    const [cDesc, setCDesc] = useState('')
    const [cRemarks, setCRemarks] = useState('')

    const uploader = (formData) => {
        firestore().collection("complaints").doc(formData.id).set(formData).then(function () {
            console.log("Document successfully written!");
            navigation.navigate('Success');
        });
    }

    const resetForm = () => {
        setCName('');
        setCMobile('');
        setCDate('');
        setCPlace('');
        setCType('');
        setCAddress('');
        setCDesc('');
        setCRemarks('');
    }

    const onSubmitPress = () => {


        var formData = {
            cUID: user.uid,
            cName: cName,
            cMobile: cMobile,
            cDate: cDate,
            cPlace: cPlace,
            cType: cType,
            cAddress: cAddress,
            cDesc: cDesc,
            cRemarks: cRemarks,
        }
        uploader(formData);
        resetForm();
    }


    return (
        <View style={styles.container}>
            <ScrollView keyboardShouldPersistTaps="handled">
                <KeyboardAvoidingView enabled>

                    <TextInput style={styles.inputBox}
                        placeholder='*Complaintant Name'
                        placeholderTextColor='#ffffff'
                        underlineColorAndroid={'transparent'}
                        onChangeText={(text) => setCName(text)}
                        value={cName}
                    />
                    <TextInput style={styles.inputBox}
                        placeholder='*Complaintant Mobile Number'
                        placeholderTextColor='#ffffff'
                        keyboardType='number-pad'
                        maxLength={10}
                        underlineColorAndroid={'transparent'}
                        onChangeText={(text) => setCMobile(text)}
                        value={cMobile}
                    />
                    <TextInput style={styles.inputBox}
                        placeholder='*Date (DD/MM/YYYY)'
                        placeholderTextColor='#ffffff'
                        underlineColorAndroid={'transparent'}
                        onChangeText={(text) => setCDate(text)}
                        value={cDate}
                    />
                    <TextInput style={styles.inputBox}
                        placeholder='*Place of Occurence'
                        placeholderTextColor='#ffffff'
                        underlineColorAndroid={'transparent'}
                        onChangeText={(text) => setCPlace(text)}
                        value={cPlace}
                    />
                    <TextInput style={styles.inputBox}
                        placeholder='*Type of Complaint'
                        placeholderTextColor='#ffffff'
                        underlineColorAndroid={'transparent'}
                        onChangeText={(text) => setCType(text)}
                        value={cType}
                    />
                    <TextInput style={styles.inputBox}
                        placeholder='*Complaintant Address'
                        placeholderTextColor='#ffffff'
                        underlineColorAndroid={'transparent'}
                        onChangeText={(text) => setCAddress(text)}
                        value={cAddress}
                    />

                    <TextInput style={styles.inputBox}
                        placeholder='*Complaint Description'
                        placeholderTextColor='#ffffff'
                        underlineColorAndroid={'transparent'}
                        onChangeText={(text) => setCDesc(text)}
                        value={cDesc}
                    />

                    <TextInput style={styles.inputBox}
                        placeholder='*Remarks'
                        placeholderTextColor='#ffffff'
                        underlineColorAndroid={'transparent'}
                        onChangeText={(text) => setCRemarks(text)}
                        value={cRemarks}
                    />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => onSubmitPress()}
                    >
                        <Text style={styles.buttonText}> SUBMIT </Text>
                    </TouchableOpacity>

                </KeyboardAvoidingView>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow:1,
        backgroundColor: '#1a1a2e',
        paddingVertical:30
    },

    inputBox: {
        alignSelf: 'stretch',
        color: '#ffffff',
        height: 40,
        marginTop: 20,
        borderBottomColor: '#ffffff',
        borderBottomWidth: 1,
        width: 330,
        alignSelf: 'center'
    },

    buttonText: {
        fontSize: 15,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },

    button: {
        backgroundColor:'#e94560',
        borderRadius: 8,
        color: '#ffffff',
        marginVertical: 15,
        textAlign: 'center',
        paddingVertical: 9,
        height: 40,
        marginTop: 30,
        marginBottom: 20,
        width: 100,
        alignSelf: 'center',
    },
})

export default ComplaintRegister;
