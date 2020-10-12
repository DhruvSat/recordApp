import React  from 'react';
import {
    Text,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
} from 'react-native';

const SearchCriminals = () => {
    
    return (
        <View style={styles.container}>
            <ScrollView keyboardShouldPersistTaps="handled">
                <KeyboardAvoidingView enabled>

                    <Text style={{fontSize:25,color:'#ffffff',alignSelf:'center',marginTop:90}}>SEARCH CRIMINALS</Text>

                    <TextInput style={styles.inputBox}
                        underlinecolorAndroid='rgba(0,0,0,0)'
                        placeholder='Name'
                        placeholderTextColor='#ffffff'
                    />

                    <TextInput style={styles.inputBox}
                        underlinecolorAndroid='rgba(0,0,0,0)'
                        placeholder='FIR Number'
                        placeholderTextColor='#ffffff'
                    />

                    <TextInput style={styles.inputBox}
                        underlinecolorAndroid='rgba(0,0,0,0)'
                        placeholder='Section Of Law'
                        placeholderTextColor='#ffffff'
                    />

                    <TextInput style={styles.inputBox}
                        underlinecolorAndroid='rgba(0,0,0,0)'
                        placeholder='Aadhar Number'
                        placeholderTextColor='#ffffff'
                    />

                    <TextInput style={styles.inputBox}
                        underlinecolorAndroid='rgba(0,0,0,0)'
                        placeholder='Act'
                        placeholderTextColor='#ffffff'
                    />

                     <TextInput style={styles.inputBox}
                        underlinecolorAndroid='rgba(0,0,0,0)'
                        placeholder='Act'
                        placeholderTextColor='#ffffff'
                    />

                     <TextInput style={styles.inputBox}
                        underlinecolorAndroid='rgba(0,0,0,0)'
                        placeholder='Gender'
                        placeholderTextColor='#ffffff'
                    />

                     <TextInput style={styles.inputBox}
                        underlinecolorAndroid='rgba(0,0,0,0)'
                        placeholder='Age'
                        placeholderTextColor='#ffffff'
                    />

                     <TextInput style={styles.inputBox}
                        underlinecolorAndroid='rgba(0,0,0,0)'
                        placeholder='Height'
                        placeholderTextColor='#ffffff'
                    />

                     <TextInput style={styles.inputBox}
                        underlinecolorAndroid='rgba(0,0,0,0)'
                        placeholder='Weight'
                        placeholderTextColor='#ffffff'
                    />

                     <TextInput style={styles.inputBox}
                        underlinecolorAndroid='rgba(0,0,0,0)'
                        placeholder='Address'
                        placeholderTextColor='#ffffff'
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
        backgroundColor: '#000',
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
        textAlign:'left'
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
        height: 45,
        marginTop: 20,
        marginBottom: 20,
        width:100,
        alignSelf:'center',
    },
})

export default SearchCriminals;
