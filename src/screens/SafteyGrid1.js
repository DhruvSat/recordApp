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
import DropDownPicker from 'react-native-dropdown-picker';
const SafteyGrid1 = () => {

    const { user } = useContext(AuthContext);

    const [wsName, setWsName] = useState('')
    const [wsMobile, setWsMobile] = useState('')
    const [wsAddress, setWsAddress] = useState('')
    const [bordPlace, setBordPlace] = useState('')
    const [destPlace, setDestPlace] = useState('')
    const [vhNum, setVhNum] = useState('')
    const [emCon, setEmCon] = useState('')


    const uploader = (formData) => {
        firestore().collection("womensafety").doc(formData.id).set(formData).then(function () {
            console.log("Document successfully written!");
            navigation.navigate('Success');
        });
    }

    const resetForm = () => {
        setWsName('');
        setWsMobile('');
        setWsAddress('');
        setBordPlace('');
        setDestPlace('');
        setVhNum('');
        setEmCon('');
    }

    const onSubmitPress = () => {


        var formData = {
            wsUID: user.uid,
            wsName: cName,
            wsMobile: cMobile,
            wsAddress: cAddress,
            bordPlace: cDate,
            destPlace: cPlace,
            vhNum: cType,
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

                    <Text style={styles.text}>Feel Safe. Travel Safe with Gujarat Police</Text>


                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#fff', marginTop: -15, alignSelf: 'center' }}>
                        Travel Details </Text>

                    <TextInput style={styles.inputBox}
                        placeholder='*Name'
                        placeholderTextColor='#ffffff'
                        underlineColorAndroid={'transparent'}
                        onChangeText={(text) => setWsName(text)}
                        value={wsName}
                    />
                    <TextInput style={styles.inputBox}
                        placeholder='*Mobile Number'
                        placeholderTextColor='#ffffff'
                        underlineColorAndroid={'transparent'}
                        onChangeText={(text) => setWsMobile(text)}
                        value={wsMobile}
                    />
                    <TextInput style={styles.inputBox}
                        placeholder='*Address'
                        placeholderTextColor='#ffffff'
                        underlineColorAndroid={'transparent'}
                        onChangeText={(text) => setWsAddress(text)}
                        value={wsAddress}
                    />
                    <TextInput style={styles.inputBox}
                        placeholder='*Place of Boarding'
                        placeholderTextColor='#ffffff'
                        underlineColorAndroid={'transparent'}
                        onChangeText={(text) => setBordPlace(text)}
                        value={bordPlace}
                    />

                    <TextInput style={styles.inputBox}
                        placeholder='*Place of Destination'
                        placeholderTextColor='#ffffff'
                        underlineColorAndroid={'transparent'}
                        onChangeText={(text) => setDestPlace(text)}
                        value={destPlace}
                    />

                    <TextInput style={styles.inputBox}
                        placeholder='*Vehical Number (ex. GJ05AA0000)'
                        placeholderTextColor='#ffffff'
                        underlineColorAndroid={'transparent'}
                        onChangeText={(text) => setVhNum(text)}
                        value={vhNum}
                    />
                    <TextInput style={styles.inputBox}
                        placeholder='*Emergency Contact Number'
                        keyboardType='number-pad'
                        placeholderTextColor='#ffffff'
                        underlineColorAndroid={'transparent'}
                        onChangeText={(text) => setEmCon(text)}
                        value={emCon}
                    />

                    <TouchableOpacity style={styles.button} onPress={() => onSubmitPress()}>
                        <Text style={styles.buttonText}> SUBMIT </Text>
                    </TouchableOpacity>

                </KeyboardAvoidingView>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#1a1a2e',
    },

    text: {
        color: '#ffffff',
        alignSelf: 'center',
        paddingTop: 15,
        paddingBottom: 50,
        fontSize: 15
    },
    SMStext: {
        color: '#ffffff',
        paddingTop: 5,
        fontSize: 17
    },

    CheckBox: {
        backgroundColor: '#ffffff',
        alignSelf: 'flex-end',
    },

    checkboxContainer: {
        color: '#ffffff',
        alignSelf: 'center',
        flexDirection: "row",
        paddingBottom: 10,
        marginTop: 20
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
        backgroundColor: '#e94560',
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

export default SafteyGrid1;
