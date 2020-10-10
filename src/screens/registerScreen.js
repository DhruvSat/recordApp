import React, { useState } from 'react';

import { firebase } from '../firebase/config'
import {

    Text,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView
} from 'react-native';


const RegisterScreen = ({ navigation }) => {

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const onRegisterPress = () => {
        if (password != confirmPassword) {
            alert("Password does not match")
            return
        }

        //creating user
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const data = {
                    id: uid,
                    email,
                    fullName,
                    phone
                };

                const usersRefs = firebase.firestore().collection('users')
                usersRefs.doc(email).set(data).then(() => {
                    navigation.navigate('HomeScreen')
                }).catch((error) => {
                    alert(error)
                });


            }).catch((error) => {
                alert(error)
            });


    }

    return (
        <View style={styles.container}>
            <ScrollView keyboardShouldPersistTaps="handled">
                <KeyboardAvoidingView enabled>

                    <Text style={styles.signupText}>SignUp!</Text>

                    <TextInput style={styles.inputBox}
                        underlinecolorAndroid='rgba(0,0,0,0)'
                        placeholder='Name'
                        placeholderTextColor='#ffffff'
                        onChangeText={(text) => setFullName(text)}
                        value={fullName}
                    />

                    <TextInput style={styles.inputBox}
                        underlinecolorAndroid='rgba(0,0,0,0)'
                        placeholder='Email'
                        placeholderTextColor='#ffffff'
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                    />

                    <TextInput style={styles.inputBox}
                        underlinecolorAndroid='rgba(0,0,0,0)'
                        placeholder='Mobile No.'
                        placeholderTextColor='#ffffff'
                        onChangeText={(text) => setPhone(text)}
                        value={phone}
                    />

                    <TextInput style={styles.inputBox}
                        underlinecolorAndroid='rgba(0,0,0,0)'
                        placeholder='Password'
                        secureTextEntry={true}
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        placeholderTextColor='#ffffff'
                    />

                    <TextInput style={styles.inputBox}
                        underlinecolorAndroid='rgba(0,0,0,0)'
                        placeholder='Confirm Password'
                        secureTextEntry={true}
                        onChangeText={(text) => setConfirmPassword(text)}
                        value={confirmPassword}
                        placeholderTextColor='#ffffff'
                    />


                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => onRegisterPress()}>
                        <Text style={styles.buttonText}> Register Account </Text>
                    </TouchableOpacity>

                    <View style={styles.registerHere}>
                        <Text style={styles.inputText}>Already have an Account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}><Text style={styles.registerButton}> Login </Text></TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
<<<<<<< HEAD
        flexGrow:1,
        backgroundColor: '#000000',

=======

        flexGrow:1,

    },

    signupText: {
        fontSize: 30,

        color:'#ffffff',
>>>>>>> ec884da322a3eaaf458690eec677a0f4a10a09df
    },

    buttonText: {
        fontSize:15,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
    },

    button: {
<<<<<<< HEAD
        backgroundColor:'#00008b',
=======
        backgroundColor:'rgba(255,255,255,0.3)',
>>>>>>> ec884da322a3eaaf458690eec677a0f4a10a09df
        borderRadius: 40,
        color: '#ffffff',
        marginVertical: 15,
        textAlign:'center',
<<<<<<< HEAD
=======

>>>>>>> ec884da322a3eaaf458690eec677a0f4a10a09df
        paddingVertical: 9,
        height: 40,
        width: 120,
        marginTop: 20,
        marginBottom: 20,
        alignSelf:'center'
    },

    inputBox1:{
        marginTop:30,
        alignSelf:'center',
        width:300,
        backgroundColor:'rgba(255,255,255,0.3)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 12,
        color: '#ffffff',
        marginVertical: 10,
        textAlign:'left'
    },

    inputBox: {
<<<<<<< HEAD
        alignSelf:'center',
        width:300,
        backgroundColor:'rgba(255,255,255,0.3)',
=======

        width:300,
        backgroundColor:'rgba(255,255,255,0.3)',

>>>>>>> ec884da322a3eaaf458690eec677a0f4a10a09df
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 12,
        color: '#ffffff',
        marginVertical: 10,
        textAlign:'left'
    },

    registerHere: {
        flexGrow: 1,
        alignItems: 'flex-end',
<<<<<<< HEAD
        justifyContent:'center',
        paddingVertical: 10,
        flexDirection:'row',
=======

        justifyContent:'center',
        paddingVertical: 10,
        flexDirection:'row',
        marginTop:150,
>>>>>>> ec884da322a3eaaf458690eec677a0f4a10a09df
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
    
<<<<<<< HEAD
=======

>>>>>>> ec884da322a3eaaf458690eec677a0f4a10a09df
})


export default RegisterScreen;