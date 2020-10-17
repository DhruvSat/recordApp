import React from "react";
import {
    Text,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    Linking,
    Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AuthContext } from '../navigation/AuthProvider';
import firestore from '@react-native-firebase/firestore';


const ReportCrime = () => {

    dialCall = () => {

        let phoneNumber = '';
    
        if (Platform.OS === 'android') {
          phoneNumber = 'tel:${112}';
        }
        else {
          phoneNumber = 'telprompt:${112}';
        }
    
        Linking.openURL(phoneNumber);
      };
    
    return (
        <View style={styles.container}>
            <ScrollView keyboardShouldPersistTaps="handled">
                <KeyboardAvoidingView enabled>

                    <TouchableOpacity onPress={dialCall}>
                        <Text style={{textAlign:'center',height:30,fontSize:20,color:'#ffffff',backgroundColor:'red',alignSelf:'stretch'}}>Emergency Dial: 112</Text> 
                    </TouchableOpacity>

                    <TextInput
                        style={styles.inputBox}
                        placeholder='*Select Crime Type'
                        placeholderTextColor='#ffffff'
                        underlineColorAndroid={'transparent'}

                    />
                    <TextInput
                        style={styles.inputBox}
                        placeholder='*Remark'
                        placeholderTextColor='#ffffff'
                        underlineColorAndroid={'transparent'}
                    />
                    <TextInput
                        style={styles.inputBox}
                        placeholder='*Mobile Number'
                        placeholderTextColor='#ffffff'
                        keyboardType='number-pad'
                        maxLength={10}
                        underlineColorAndroid={'transparent'}
                    />
                    <TextInput
                        style={styles.inputBox}
                        placeholder='*Select Police District'
                        placeholderTextColor='#ffffff'
                        underlineColorAndroid={'transparent'}
                    />

                    <TextInput
                        style={styles.inputBox}
                        placeholder='*Select Police Station'
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

    imageBtn: {
        flex: 1,
        marginLeft: 35,
        paddingTop: 20,
        justifyContent: 'space-between'
    }
})

export default ReportCrime;
