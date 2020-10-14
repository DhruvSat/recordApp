import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import Grid from '../components/Grid'
import News from '../components/News'

export default function HomeScreen({ navigation }) {
    return (
        <ScrollView >
            <News />
            <Grid />
            <TouchableOpacity style={styles.button}
                onPress={() => { navigation.navigate('ProfileScreen') }}>
                <Text style={styles.buttonText}> GO TO PROFILE </Text>
            </TouchableOpacity>
        </ScrollView>

    )

}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#00008d',
        borderRadius: 40,
        color: '#ffffff',
        marginVertical: 15,
        textAlign: 'center',
        paddingVertical: 9,
        height: 45,
        marginTop: 20,
        marginBottom: 20,
        width: 100,
        alignSelf: 'center',
    },
})

