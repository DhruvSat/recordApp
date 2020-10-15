import React, { useState, useContext } from 'react';
import { AuthContext } from '../navigation/AuthProvider';
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
    const { register } = useContext(AuthContext);

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

        register(email, password, fullName, phone)


    }

    return (
        <View style={styles.container}>
            <ScrollView keyboardShouldPersistTaps="handled">
                <KeyboardAvoidingView enabled>

                    <Text style={{ fontSize: 25, color: '#ffffff', alignSelf: 'center', marginTop: 90 }}>SignUp</Text>

                    <TextInput style={styles.inputBox1}
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
                        <Text style={styles.buttonText}> Sign Up </Text>
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
        flexGrow: 1,
        backgroundColor: '#000000',

    },

    signupText: {
        fontSize: 30,
        color: '#ffffff',
    },
    buttonText: {
        fontSize: 15,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },

    button: {
        backgroundColor: '#00008b',
        borderRadius: 40,
        color: '#ffffff',
        marginVertical: 15,
        textAlign: 'center',
        paddingVertical: 9,
        height: 40,
        width: 100,
        marginTop: 20,
        marginBottom: 20,
        alignSelf: 'center'
    },

    inputBox1: {
        marginTop: 30,
        alignSelf: 'center',
        width: 300,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 12,
        color: '#ffffff',
        marginVertical: 10,
        textAlign: 'left'
    },

    inputBox: {
        alignSelf: 'center',
        width: 300,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 12,
        color: '#ffffff',
        marginVertical: 10,
        textAlign: 'left'
    },

    registerHere: {
        flexGrow: 1,
        alignItems: 'flex-end',
        // marginTop:150/,
        justifyContent: 'center',
        paddingVertical: 20,
        flexDirection: 'row',
    },

    inputText: {
        fontSize: 16,
        color: '#ffffff',
    },

    registerButton: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },

})


export default RegisterScreen;