import React, { useContext, useState, useEffect } from 'react';

import { View, Text, StyleSheet, ScrollView } from 'react-native'
import firestore from '@react-native-firebase/firestore';
import { Card } from 'react-native-elements';
// import Loading from '../../components/Loading'


const Notifications = () => {

    const [loading, setLoading] = useState(true);
    const [womenData, setData] = useState([]);

    console.log(JSON.stringify(station))
    var ref = firestore().collection('notifications')

    useEffect(() => {

        return ref.onSnapshot(querySnapshot => {
            const list = [];
            querySnapshot.forEach(doc => {
                const { wsName, boardPlace, wsMobile } = doc.data();
                list.push({
                    id: doc.id,
                    wsName,
                    boardPlace,
                    wsMobile
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
        <ScrollView style={styles.scrview}>
            <View style={styles.container}>
                {womenData.map((data) => {
                    return (
                        <Card title={data.wsName}>
                            <Text>Women Name : {data.wsName}</Text>
                            <Text>Mobile No : {data.wsMobile}</Text>
                            {/* <Text>Address : {data.wsAddress}</Text> */}
                            <Text>Boarding : {data.boardPlace}</Text>
                            {/* <Text>Destination : {data.destPlace}</Text>
                            <Text>Vechile No : {data.vhNum}</Text> */}
                        </Card>
                    )
                })}
            </View>
        </ScrollView>
    )

}
const styles = StyleSheet.create({
    scrview: {
        flex: 1
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 40,
        backgroundColor: '#ecf0f1',
    },
    paragraph: {
        flex: 1,
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
    },
});
export default Notifications