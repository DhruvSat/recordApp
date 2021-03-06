import React  from "react";
import {
    Text,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
} from 'react-native';
// import { AuthContext } from '../../navigation/AuthProvider';
// import firestore from '@react-native-firebase/firestore';

const SearchMissingPerson = () => {    
    return (
        <View style={styles.container}>
            <ScrollView keyboardShouldPersistTaps="handled">
                <KeyboardAvoidingView enabled>
                    
                    <TextInput style={styles.inputBox}
                     placeholder = '*Missing Person Name'
                     placeholderTextColor='#ffffff'                     
                     underlineColorAndroid={'transparent'}
                    />
                    <TextInput style={styles.inputBox}
                     placeholder = '*Select City'
                     placeholderTextColor='#ffffff'                     
                     underlineColorAndroid={'transparent'}
                    />
                    <TextInput style={styles.inputBox}
                     placeholder = '*Select Police Station'
                     placeholderTextColor='#ffffff'                     
                     underlineColorAndroid={'transparent'}
                    />
                    <TextInput style={styles.inputBox}
                     placeholder = '*Select Gender'
                     placeholderTextColor='#ffffff'                     
                     underlineColorAndroid={'transparent'}
                    />
                    <TextInput style={styles.inputBox}
                     placeholder = '*Age'
                     placeholderTextColor='#ffffff'
                     keyboardType='number-pad'                     
                     underlineColorAndroid={'transparent'}
                    />
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}> SEARCH </Text>
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

export default SearchMissingPerson;
