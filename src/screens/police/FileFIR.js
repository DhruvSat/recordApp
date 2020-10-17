import React from "react";
import {
    Text,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    Image
} from 'react-native';
// import { AuthContext } from '../navigation/AuthProvider';
// import firestore from '@react-native-firebase/firestore';


const FileFIR = () => {
    return (
        <View style={styles.container}>
            <ScrollView keyboardShouldPersistTaps="handled">
                <KeyboardAvoidingView enabled>

                    <TextInput
                        style={styles.inputBox}
                        placeholder='*Enter FIR Number'
                        placeholderTextColor='#ffffff'
                        underlineColorAndroid={'transparent'}
                    />
                    <TextInput
                        style={styles.inputBox}
                        placeholder='*Name'
                        placeholderTextColor='#ffffff'
                        underlineColorAndroid={'transparent'}
                    />
                    <TextInput
                        style={styles.inputBox}
                        placeholder='*Age'
                        keyboardType='number-pad'
                        maxLength={2}
                        placeholderTextColor='#ffffff'
                        underlineColorAndroid={'transparent'}
                    />
                    <TextInput
                        style={styles.inputBox}
                        placeholder='*Address'
                        placeholderTextColor='#ffffff'
                        underlineColorAndroid={'transparent'}
                    />
                    <TextInput
                        style={styles.inputBox}
                        placeholder='*FIR Register Date (DD/MM/YYYY)'
                        placeholderTextColor='#ffffff'
                        underlineColorAndroid={'transparent'}
                    />
                    <TextInput
                        style={styles.inputBox}
                        placeholder='*Enter City'
                        placeholderTextColor='#ffffff'
                        underlineColorAndroid={'transparent'}
                    />
                    <TextInput
                        style={styles.inputBox}
                        placeholder='*Enter Police Station'
                        placeholderTextColor='#ffffff'
                        underlineColorAndroid={'transparent'}
                    />
                    <TextInput
                        style={styles.inputBox}
                        placeholder='*Description of Crime'
                        placeholderTextColor='#ffffff'
                        underlineColorAndroid={'transparent'}
                    />

                    <TouchableOpacity style={styles.button}>
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

export default FileFIR;
