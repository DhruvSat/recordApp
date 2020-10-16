import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
// import Grid from '../components/Grid'
import News from '../components/News'

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
        <ScrollView >
            
            <News />
            {/* <Grid /> */}
            <TouchableOpacity style={styles.button}
                onPress={() => { navigation.navigate('ProfileScreen') }}>
                <Text style={styles.buttonText}> PROFILE </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
                onPress={() => { navigation.navigate('NOC') }}>
                <Text style={styles.buttonText}> NOC </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
                onPress={() => { navigation.navigate('PVC') }}>
                <Text style={styles.buttonText}> PVC </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
                onPress={() => { navigation.navigate('ReportMissingPerson') }}>
                <Text style={styles.buttonText}> MISSING </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
                onPress={() => { navigation.navigate('WOMEN SAFTEY') }}>
                <Text style={styles.buttonText}> Saftey </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
                onPress={() => { navigation.navigate('ReportCrime') }}>
                <Text style={styles.buttonText}> CRIME </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
                onPress={() => { navigation.navigate('ComplaintRegister') }}>
                <Text style={styles.buttonText}> complaint </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
                onPress={() => { navigation.navigate('ViewFirDetail') }}>
                <Text style={styles.buttonText}> FIR </Text>
            </TouchableOpacity>
        </ScrollView>
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
    buttonText: {
        fontSize:15,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
    },
})
