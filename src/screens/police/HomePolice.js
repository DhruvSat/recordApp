import React,{useContext, useState} from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native'
import News from '../../components/News'
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore'
import { AuthContext } from '../../navigation/AuthProvider';
export default function HomePolice() {
    
    const { user } = useContext(AuthContext);

    const navigation = useNavigation();

    const [station, setStation] = useState('')

    firestore()
    .collection('users')
    .doc(user.uid)
    .get()
    .then(documentSnapshot => {
        if (documentSnapshot.exists) {
            setStation(documentSnapshot.data().psLoc)
            
        }
    });

    return (
        <View style={styles.container}>
            <ScrollView >
                <Text style={{ fontSize: 15, marginLeft: 12, marginTop: 17, color: '#fff', fontWeight: 'bold' }}>NEWS</Text>
                <News />
                <View style={styles.formHeader}>
                    <Text style={{ fontSize: 15, marginLeft: 12, marginTop: 5, color: '#fff', fontWeight: 'bold' }}>WOMEN SAFTEY</Text>
                </View>
                <View style={{ flexDirection: 'row', alignSelf: 'flex-start', flex: 1 / 3 }}>
                    <TouchableOpacity style={styles.button}
                        onPress={() => { navigation.navigate('WOMEN SAFETY',{station:station}) }}>
                        <Image style={styles.image}
                            source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/crime-record-app.appspot.com/o/gridicons%2FWomen%20Safety.png?alt=media&token=d5c92e4d-8de6-4b46-8f69-3b3fd817b3fc' }}
                        />
                    </TouchableOpacity>
                </View>


                <View style={styles.formHeader}>
                    <Text style={{ fontSize: 15, marginLeft: 12, marginTop: 5, color: '#fff', fontWeight: 'bold' }}>PUBLIC SERVICES</Text>
                </View>
                <View style={{ flexDirection: 'row', alignSelf: 'flex-start', flex: 1 / 3 }}>
                    <TouchableOpacity style={styles.button}
                        onPress={() => { navigation.navigate('SearchMissingPerson') }}>
                        <Image style={styles.image}
                            source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/crime-record-app.appspot.com/o/gridicons%2FSearch%20missing%20person.png?alt=media&token=81d5fbd3-540c-439f-aa1e-be1e2df56824' }}
                        />
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', alignSelf: 'flex-start', flex: 1 / 3 }}>
                    <TouchableOpacity style={styles.button}
                        onPress={() => { navigation.navigate('FileFIR') }}>
                        <Image style={styles.image}
                            source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/crime-record-app.appspot.com/o/gridicons%2FRegister%20FIR.png?alt=media&token=84b4b304-cc02-4ec6-b797-66c67295080d' }}
                        />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#1a1a2e',
    },

    image: {
        width: 100,
        height: 100,
        backgroundColor: '#fff',
        borderRadius: 8
    },

    button: {
        margin: 12,
        aspectRatio: 1,
        flex: 1 / 3,
        borderRadius: 8,
        color: '#ffffff',
        marginVertical: 15,
        textAlign: 'center',
        paddingVertical: 9,
        height: 100,
        alignSelf: 'center',
    },
    button1: {
        margin: 12,
        aspectRatio: 1,
        flex: 1 / 3,
        borderRadius: 8,
        color: '#ffffff',
        marginVertical: 15,
        textAlign: 'center',
        paddingVertical: 9,
        height: 100,
        alignSelf: 'center',
    },

    buttonText: {
        fontSize: 15,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },
    formHeader: {
        marginTop: 10,
        backgroundColor: '#29294a',
        height: 33, shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1.2,
        },
        shadowOpacity: 0,
        shadowRadius: 2.62,
        elevation: 3,
    },
})
//THE END