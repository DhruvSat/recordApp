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
import Icon from 'react-native-vector-icons/FontAwesome';


const ReportCrime = () => {
    
    return (
        <View style={styles.container}>
            <ScrollView keyboardShouldPersistTaps="handled">
                <KeyboardAvoidingView enabled>

                    <TouchableOpacity >
                        <Text style={{textAlign:'center',height:30,fontSize:20,color:'#ffffff',backgroundColor:'red',alignSelf:'stretch'}}>Emergency Dial: 112</Text> 
                    </TouchableOpacity>
                    
                    <TextInput style={styles.inputBox}
                     placeholder = '*Select Crime Type'
                     placeholderTextColor='#ffffff'                     
                     underlineColorAndroid={'transparent'}

                    />
                    <View>
                        <TouchableOpacity>
                            <Text style={styles.imageBtn}>
                                <Icon name="camera" size={30} color="#ffffff"/>
                                <Icon name="video-camera" size={30} color="#ffffff" />
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <TextInput style={styles.inputBox}
                     placeholder = '*Remark'
                     placeholderTextColor='#ffffff'                     
                     underlineColorAndroid={'transparent'}
                    />
                    <TextInput style={styles.inputBox}
                     placeholder = '*Mobile Number'
                     placeholderTextColor='#ffffff' 
                     keyboardType='number-pad'                    
                     underlineColorAndroid={'transparent'}
                    />
                    <TextInput style={styles.inputBox}
                     placeholder = '*Select Police District'
                     placeholderTextColor='#ffffff'                     
                     underlineColorAndroid={'transparent'}
                    />
                    
                    <TextInput style={styles.inputBox}
                     placeholder = '*Select Police Station'
                     placeholderTextColor='#ffffff'                     
                     underlineColorAndroid={'transparent'}
                    />

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}> SAVE </Text>
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
        alignSelf:'stretch'
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

    imageBtn:{
        flex:1,
        alignSelf:'center',
        paddingTop:20,
        justifyContent:'space-between'
    }


})

export default ReportCrime;
