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


const ReportMissingPerson = () => {    
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
                     placeholder = '*Date of Birth (DD/MM/YYYY)'
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
                    <TextInput style={styles.inputBox}
                     placeholder = 'Marks on Body (If Any?)'
                     placeholderTextColor='#ffffff'                    
                     underlineColorAndroid={'transparent'}
                    />
                    <TextInput style={styles.inputBox}
                     placeholder = '*Address of Missing Person'
                     placeholderTextColor='#ffffff'                    
                     underlineColorAndroid={'transparent'}
                    />
                    <TextInput style={styles.inputBox}
                     placeholder = '*Place of Missing'
                     placeholderTextColor='#ffffff'                    
                     underlineColorAndroid={'transparent'}
                    />

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}> REPORT </Text>
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

export default ReportMissingPerson;
