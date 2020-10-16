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

const ComplaintRegister = () => {
    
    return (
        <View style={styles.container}>
            <ScrollView keyboardShouldPersistTaps="handled">
                <KeyboardAvoidingView enabled>
                    
                    <TextInput style={styles.inputBox}
                     placeholder = '*Complaintant Name'
                     placeholderTextColor='#ffffff'                     
                     underlineColorAndroid={'transparent'}
                    />
                    <TextInput style={styles.inputBox}
                     placeholder = '*Complaintant Mobile Number'
                     placeholderTextColor='#ffffff'
                     keyboardType='number-pad'                     
                     underlineColorAndroid={'transparent'}
                    />
                    <TextInput style={styles.inputBox}
                     placeholder = '*Date (DD/MM/YYYY)'
                     placeholderTextColor='#ffffff'
                     underlineColorAndroid={'transparent'}
                    />
                    <TextInput style={styles.inputBox}
                     placeholder = '*Place of Occurence'
                     placeholderTextColor='#ffffff'                     
                     underlineColorAndroid={'transparent'}
                    />
                    <TextInput style={styles.inputBox}
                     placeholder = '*Type of Complaint'
                     placeholderTextColor='#ffffff'                     
                     underlineColorAndroid={'transparent'}
                    />
                    <TextInput style={styles.inputBox}
                     placeholder = '*Complaintant Address'
                     placeholderTextColor='#ffffff'                     
                     underlineColorAndroid={'transparent'}
                    />
                    
                    <TextInput style={styles.inputBox}
                     placeholder = '*Complaint Description'
                     placeholderTextColor='#ffffff'                     
                     underlineColorAndroid={'transparent'}
                    />

                    <TextInput style={styles.inputBox}
                     placeholder = '*Remarks'
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
        paddingVertical:30
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

export default ComplaintRegister;
