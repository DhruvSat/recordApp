import React, { useState } from 'react';
import { firebase } from '../firebase/config'
import {
    Text,
    StyleSheet,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    Button
} from 'react-native';





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
                        navigation.navigate('HomeScreen', { user })
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

                    <Button
                        title="LOGIN"
                        onPress={() => onLoginPress()}>

                    </Button>



                    <View style={styles.registerHere}>
                        <Text style={styles.inputText}>Don't have an account yet? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}><Text style={styles.registerButton}> Register </Text></TouchableOpacity>
                    </View>

                </KeyboardAvoidingView>


            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {

        flexGrow:1,
        backgroundColor: '#000000',

    },
    
    inputBox: {

        alignSelf:'center',
        width:300,
        backgroundColor:'rgba(255,255,255,0.3)',

        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 13,
        color: '#ffffff',
        marginVertical: 10,
        textAlign:'center'
    },
    
    buttonText: {
        fontSize:15,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
    },

    button: {
        // backgroundColor:'rgba(255,255,255,0.3)',
        backgroundColor:'#00008d.',
        borderRadius: 40,
        color: '#ffffff',
        marginVertical: 15,
        textAlign:'center',
        paddingVertical: 9,
        height: 45,
        marginTop: 20,
        marginBottom: 20,
        width:100,
        alignSelf:'center',
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

    forgotButton: {
        fontSize:14,
        color:'#ffffff',
        paddingHorizontal:10,
        fontStyle:'italic',
        marginLeft: 40,
    },
})


export default LoginScreen;