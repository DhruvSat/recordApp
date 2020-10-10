import React, { useState } from 'react';
import { firebase } from '../../firebase/config'
import {
    Text,
    StyleSheet,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onLoginPress = () => {

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((response) => {
                const email = response.user.email
                const usersRef = firebase.firestore().collection('users')
                usersRef.doc(email).get()
                    .then(firestoreDocument => {
                        if (!firestoreDocument.exists) {
                            alert("User does not exist anymore.")
                            return;
                        }
                        const user = firestoreDocument.data()
                        navigation.navigate('Home', { user })
                    })
                    .catch(error => {
                        alert(error)
                    });
            })
            .catch(error => {
                alert(error)
            })
    }



    return (
        <View style={styles.container}>
            <ScrollView keyboardShouldPersistTaps="handled">
                <KeyboardAvoidingView enabled>

                    <Image style={{ width: 250, height: 200, resizeMode: 'contain', margin: 30, marginTop: 90, marginBottom: 40 }}
                        source={require('../../assets/logo.png')}
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
                        placeholder='Password'
                        secureTextEntry={true}
                        placeholderTextColor='#ffffff'
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                    />
                    <TouchableOpacity >
                        <Text style={styles.forgotButton}>Forgot Password ?</Text>
                    </TouchableOpacity>

                <View style={styles.registerHere}>
                    <Text style={styles.inputText}>Don't have an account yet? </Text>
                    <TouchableOpacity><Text style={styles.registerButton}> Register </Text></TouchableOpacity>                                                                                   
                </View>
                {/* <View style={{flexDirection:'row'}}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => onLoginPress()}
                    >
                        <Text style={styles.buttonText}> Login </Text>
                    </TouchableOpacity>

                    <View style={styles.registerHere}>
                        <Text style={styles.inputText}>Don't have an account yet? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}><Text style={styles.registerButton}> Register </Text></TouchableOpacity>
                    </View>
                    {/* <View style={{flexDirection:'row'}}>
                <TouchableOpacity>
                     <Text style={styles.socialButton1}>
                     <FontAwesome5 name={'facebook'} size={40} color="#3b5998"/>
                     </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                     <Text style={styles.socialButton2}>
                     <FontAwesome5 name={'google'} size={40} color="#db3236"/>
                     </Text>
                </TouchableOpacity>
                </View> */}
                </KeyboardAvoidingView>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow:1,
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

    buttonText: {
        fontSize: 15,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },

    button: {
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 40,
        color: '#ffffff',
        marginVertical: 15,
        textAlign: 'center',
        paddingVertical: 9,
        height: 45,
        marginLeft: 100,
        marginRight: 100,
        marginTop: 20,
        marginBottom: 20
    },

    registerHere: {
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical: 10,
        flexDirection: 'row',
        marginTop: 150,
    },

    inputText: {
        fontSize: 16,
        color: '#ffffff',
    },

    registerButton: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight:'bold',
        
    },
    forgotButton: {
        fontSize: 14,
        color: '#ffffff',
        paddingHorizontal: 10,
        fontStyle: 'italic'
    },

    //   socialButton1:{
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     paddingVertical: 8,
    //     marginRight:50
    //   },

    //   socialButton2:{
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     paddingVertical: 8,
    //   },
})

export default LoginScreen;