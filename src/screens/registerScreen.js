import React from 'react';
import {
    Text, 
    StyleSheet, 
    View, 
    TextInput, 
    TouchableOpacity,
    ScrollView, 
    KeyboardAvoidingView } from 'react-native';

 
const RegisterScreen = ({navigation})=>{
    return(
        <View style={styles.container}>
            <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView enabled> 

                <Text style={styles.signupText}>SignUp!</Text>

                <TextInput style={styles.inputBox} 
                underlinecolorAndroid='rgba(0,0,0,0)' 
                placeholder='Name'
                placeholderTextColor='#ffffff'
                />

                <TextInput style={styles.inputBox} 
                underlinecolorAndroid='rgba(0,0,0,0)' 
                placeholder='Email'
                placeholderTextColor='#ffffff'
                />

                <TextInput style={styles.inputBox} 
                underlinecolorAndroid='rgba(0,0,0,0)' 
                placeholder='Mobile No.'
                placeholderTextColor='#ffffff'
                />

                <TextInput style={styles.inputBox} 
                underlinecolorAndroid='rgba(0,0,0,0)' 
                placeholder='Password'
                secureTextEntry={true}
                placeholderTextColor='#ffffff'
                />
                
                <TextInput style={styles.inputBox} 
                underlinecolorAndroid='rgba(0,0,0,0)' 
                placeholder='Confirm Password'
                secureTextEntry={true}
                placeholderTextColor='#ffffff'
                />
                

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}> Register Account </Text>
                </TouchableOpacity>

                <View style={styles.registerHere}>
                    <Text style={styles.inputText}>Already have an Account? </Text>
                    <TouchableOpacity onPress={()=> navigation.navigate('LoginScreen')}><Text style={styles.registerButton}> Login </Text></TouchableOpacity>                                                                                   
                </View>
            </KeyboardAvoidingView>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flexGrow:1,
    },

    signupText: {
        fontSize: 30,
        color:'#ffffff',
    },

    buttonText: {
        fontSize:15,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
    },

    button: {
        backgroundColor:'rgba(255,255,255,0.3)',
        borderRadius: 40,
        color: '#ffffff',
        marginVertical: 15,
        textAlign:'center',
        paddingVertical: 9,
        height: 45,
        marginLeft: 100,
        marginRight: 100,
        marginTop: 20,
        marginBottom: 20
    },

    inputBox: {
        width:300,
        backgroundColor:'rgba(255,255,255,0.3)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#ffffff',
        marginVertical: 10
    },

    registerHere: {
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent:'center',
        paddingVertical: 10,
        flexDirection:'row',
        marginTop:150,
    },

    inputText: {
        fontSize:16,
        color:'#ffffff',
    },

    registerButton: {
        color:'#ffffff',
        fontSize: 16,
        fontWeight:'bold',  
    },
    
})

export default RegisterScreen;