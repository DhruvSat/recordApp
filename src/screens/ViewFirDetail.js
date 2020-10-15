import React  from "react";
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


const ViewFirDetail = () => {    
    return (
        <View style={styles.container}>
            <ScrollView keyboardShouldPersistTaps="handled">
                <KeyboardAvoidingView enabled>

                    <Image style={{ width: 250, height:90, resizeMode: 'contain', marginTop: 70, marginBottom: 40, alignSelf: 'center' }}
                        source={require('../../assets/logo.png')}
                    />
                    
                    <TextInput style={styles.inputBox}
                     placeholder = '*Enter FIR Number'
                     placeholderTextColor='#ffffff'                     
                     underlineColorAndroid={'transparent'}
                    />
                    <TextInput style={styles.inputBox}
                     placeholder = '*Select Year'
                     placeholderTextColor='#ffffff'                     
                     underlineColorAndroid={'transparent'}
                    />
                    <TextInput style={styles.inputBox}
                     placeholder = '*Select District'
                     placeholderTextColor='#ffffff'                     
                     underlineColorAndroid={'transparent'}
                    />
                    <TextInput style={styles.inputBox}
                     placeholder = '*Select Police Station'
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
        backgroundColor: '#000',
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
        backgroundColor:'#00008d',
        borderRadius: 40,
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

export default ViewFirDetail;
