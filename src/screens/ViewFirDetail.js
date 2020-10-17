import React from "react";
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
import { AuthContext } from '../navigation/AuthProvider';
import firestore from '@react-native-firebase/firestore';


const ViewFirDetail = () => {

    const [firNum, setfirNum] = useState('')
    const [year, setYear] = useState('')
    const [dist, setDist] = useState('')
    const [policeStation, setPoliceStation] = useState('')
    const [fetchData, setData] = useState([]);

    var ref = firestore().collection('womensafety').where("boardPlace", "==", station)

    useEffect(() => {

        return ref.onSnapshot(querySnapshot => {
            const list = [];
            querySnapshot.forEach(doc => {
                const { firNum, year, dist, policeStation } = doc.data();
                list.push({
                    id: doc.id,
                    firNum,
                    year,
                    dist,
                    policeStation,
                });
                console.log(list)
            });

            setData(list);

            if (loading) {
                setLoading(false);
            }
        });
    }, []);


    return (
        <View style={styles.container}>
            <ScrollView keyboardShouldPersistTaps="handled">
                <KeyboardAvoidingView enabled>
                    <View style={styles.container2}>
                        {womenData.map((data) => {
                            return (
                                <Card title={data.wsName}>
                                    <Text>Women Name : {data.wsName}</Text>
                                    <Text>Mobile No : {data.wsMobile}</Text>
                                    <Text>Address : {data.wsAddress}</Text>
                                    <Text>Boarding : {data.boardPlace}</Text>
                                    <Text>Destination : {data.destPlace}</Text>
                                    <Text>Vechile No : {data.vhNum}</Text>
                                </Card>
                            )
                        })}
                    </View>
                    <Image
                        style={{
                            width: 250,
                            height: 90,
                            resizeMode: 'contain',
                            marginTop: 70,
                            marginBottom: 40,
                            alignSelf: 'center'
                        }}
                        source={require('../../assets/logo.png')}
                    />

                    <TextInput
                        style={styles.inputBox}
                        placeholder='*Enter FIR Number'
                        placeholderTextColor='#ffffff'
                        underlineColorAndroid={'transparent'}
                        onChangeText={(text) => setfirNum(text)}
                        value={firNum}
                    />
                    <TextInput
                        style={styles.inputBox}
                        placeholder='*Enter Year'
                        placeholderTextColor='#ffffff'
                        underlineColorAndroid={'transparent'}
                        onChangeText={(text) => setYear(text)}
                        value={year}
                    />
                    <TextInput
                        style={styles.inputBox}
                        placeholder='*Enter District'
                        placeholderTextColor='#ffffff'
                        underlineColorAndroid={'transparent'}
                        onChangeText={(text) => setDist(text)}
                        value={dist}
                    />
                    <TextInput
                        style={styles.inputBox}
                        placeholder='*Enter Police Station'
                        placeholderTextColor='#ffffff'
                        underlineColorAndroid={'transparent'}
                        onChangeText={(text) => setPoliceStation(text)}
                        value={policeStation}
                    />

                    <TouchableOpacity style={styles.button} >
                        <Text style={styles.buttonText}> SEARCH </Text>
                    </TouchableOpacity>

                </KeyboardAvoidingView>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#1a1a2e',
    },
    container2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 40,
        backgroundColor: '#ecf0f1',
    },

    inputBox: {
        alignSelf: 'stretch',
        color: '#ffffff',
        height: 40,
        marginTop: 20,
        borderBottomColor: '#ffffff',
        borderBottomWidth: 1,
        width: 330,
        alignSelf: 'center'
    },

    buttonText: {
        fontSize: 15,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },

    button: {
        backgroundColor: '#e94560',
        borderRadius: 8,
        color: '#ffffff',
        marginVertical: 15,
        textAlign: 'center',
        paddingVertical: 9,
        height: 40,
        marginTop: 30,
        marginBottom: 20,
        width: 100,
        alignSelf: 'center',
    },
})

export default ViewFirDetail;
