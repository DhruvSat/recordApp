import React from 'react';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'


const SettingScreen = ({ navigation }) => {
    return (
        <View>
            <Text>
                SETTINGS!!!!!!!!!
            </Text>
            <TouchableOpacity style={styles.button}
                onPress={() => { navigation.navigate('ProfileScreen') }}>
                <Text style={styles.buttonText}> GO TO Profile </Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexGrow:1,
        backgroundColor: '#1a1a2e',
    },
    button: {
        backgroundColor: '#e94560',
        borderRadius: 8,
        color: '#ffffff',
        marginVertical: 15,
        textAlign: 'center',
        paddingVertical: 9,
        height: 40,
        marginTop: 20,
        marginBottom: 20,
        width: 100,
        alignSelf: 'center',
    },
})

export default SettingScreen