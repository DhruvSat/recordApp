import React, { useState } from "react";
import {
    Text,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const SafteyGrid3 = () => {
    const [isSelected, setSelection] = useState(false);
    
    return (
        <View style={styles.container}>
            <ScrollView keyboardShouldPersistTaps="handled">
                <KeyboardAvoidingView enabled>
                    
                    <Text style={styles.text}>Feel Safe. Travel Safe with Gujarat Police</Text>
                    
                 
                    <Text style={{fontSize:25,fontWeight:'bold',color:'#fff',alignSelf:'center'}}>
                         Travel Details </Text>
                    
                    <TextInput style={styles.inputBox}
                     placeholder = '*Name'
                     placeholderTextColor='#ffffff'                     
                     underlineColorAndroid={'transparent'}
                    />
                    <TextInput style={styles.inputBox}
                     placeholder = '*Mobile Number'
                     placeholderTextColor='#ffffff'                     
                     underlineColorAndroid={'transparent'}
                    />
                    <TextInput style={styles.inputBox}
                     placeholder = '*Address'
                     placeholderTextColor='#ffffff'                     
                     underlineColorAndroid={'transparent'}
                    />
                    <TextInput style={styles.inputBox}
                     placeholder = '*Place of Boarding'
                     placeholderTextColor='#ffffff'                     
                     underlineColorAndroid={'transparent'}
                    />
                    <TextInput style={styles.inputBox}
                     placeholder = '*Place of Destination'
                     placeholderTextColor='#ffffff'                     
                     underlineColorAndroid={'transparent'}
                    />
                    <TextInput style={styles.inputBox}
                     placeholder = '*Vehical Number (ex. GJ05AA0000)'
                     placeholderTextColor='#ffffff'                     
                     underlineColorAndroid={'transparent'}
                    />
                    <TextInput style={styles.inputBox}
                     placeholder = '*Emergency Contact Number'
                     keyboardType='number-pad'
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
        flexGrow:1,
        backgroundColor: '#1a1a2e',
    },

    text: {
        color:'#ffffff',
        alignSelf:'center',
        paddingTop:15,
        paddingBottom:50,
        fontSize:18
    },
    SMStext: {
        color:'#ffffff',
        paddingTop:5,
        fontSize:17
    },

    CheckBox: {
        backgroundColor:'#ffffff',
        alignSelf:'flex-end',
    },
    
    checkboxContainer: {
        color:'#ffffff',
        alignSelf:'center',
        flexDirection: "row",
        paddingBottom:10,
        marginTop: 20
      },
    
    inputBox: {
        alignSelf:'stretch',
        color:'#ffffff',
        height:40,
        marginTop:20,
        borderBottomColor:'#ffffff',
        borderBottomWidth:1,
        width:330,
        alignSelf:'center'
    },

    buttonText: {
        fontSize:15,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
    },

    button: {
        backgroundColor:'#e94560',
        borderRadius: 8,
        color: '#ffffff',
        marginVertical: 15,
        textAlign:'center',
        paddingVertical: 9,
        height: 40,
        marginTop: 30,
        marginBottom: 20,
        width:100,
        alignSelf:'center',
    },
})

export default SafteyGrid3;
