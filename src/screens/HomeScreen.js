import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image} from 'react-native'
import News from '../components/News'

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
        <ScrollView >
        <Text style={{fontSize:15,marginLeft:12,marginTop:17,color:'#fff',fontWeight:'bold'}}>NEWS</Text>
            <News />
            <View style={styles.formHeader}>
                <Text style={{fontSize:15,marginLeft:12,marginTop:5,color:'#fff',fontWeight:'bold'}}>WOMEN SAFTEY</Text>
            </View>
                    <View style={{flexDirection:'row',alignSelf: 'center',flex: 1 / 3}}>
                    <TouchableOpacity style={styles.button}
                    onPress={() => { navigation.navigate('TRAVEL SAFTEY') }}>
                        <Image style={styles.image}
                       source= {{uri:'https://firebasestorage.googleapis.com/v0/b/crime-record-app.appspot.com/o/gridicons%2FWomen%20Safety.png?alt=media&token=d5c92e4d-8de6-4b46-8f69-3b3fd817b3fc'}}
                       />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}
                    onPress={() => { navigation.navigate('WOMEN SAFTEY2') }}>
                        <Image style={styles.image}
                        source= {{uri:'https://firebasestorage.googleapis.com/v0/b/crime-record-app.appspot.com/o/gridicons%2FWomen%20Safety.png?alt=media&token=d5c92e4d-8de6-4b46-8f69-3b3fd817b3fc'}}
                       />
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.button}
                    onPress={() => { navigation.navigate('WOMEN SAFTEY3') }}>
                        <Image style={styles.image}
                        source= {{uri:'https://firebasestorage.googleapis.com/v0/b/crime-record-app.appspot.com/o/gridicons%2FWomen%20Safety.png?alt=media&token=d5c92e4d-8de6-4b46-8f69-3b3fd817b3fc'}}
                       />
                    </TouchableOpacity>
                </View>
                
                <View style={styles.formHeader}>
                <Text style={{fontSize:15,marginLeft:12,marginTop:5,color:'#fff',fontWeight:'bold'}}>PUBLIC SERVICES</Text>
                </View>
                <View  style={{flexDirection:'row',alignSelf: 'center',flex: 1 / 3}}>
                    <TouchableOpacity style={styles.button}
                    onPress={() => { navigation.navigate('ReportMissingPerson') }}>
                        <Image style={styles.image}
                        source= {{uri:'https://firebasestorage.googleapis.com/v0/b/crime-record-app.appspot.com/o/gridicons%2FReport%20missing%20person.png?alt=media&token=9600e84c-051b-4ee4-a1e2-33a8ba814e9a'}}
                       />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}
                    onPress={() => { navigation.navigate('ComplaintRegister') }}>
                        <Image style={styles.image}
                        source= {{uri:'https://firebasestorage.googleapis.com/v0/b/crime-record-app.appspot.com/o/gridicons%2FRegister%20Complaint.png?alt=media&token=e8de9275-70c8-42e8-8b86-af2cca4bbdf3'}}
                       />
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.button}
                    onPress={() => { navigation.navigate('ReportCrime') }}>
                        <Image style={styles.image}
                        source= {{uri:'https://firebasestorage.googleapis.com/v0/b/crime-record-app.appspot.com/o/gridicons%2Fcrime%20report.png?alt=media&token=a48d8589-20f5-4886-80e6-3f19a17f6d9b'}}
                       />
                    </TouchableOpacity>
                </View>
                
                <View style={{flexDirection:'row',alignSelf: 'flex-start',flex: 1 / 3}}>
                    <TouchableOpacity style={styles.button}
                    onPress={() => { navigation.navigate('ViewFirDetail') }}>
                        <Image style={styles.image}
                       source= {{uri:'https://firebasestorage.googleapis.com/v0/b/crime-record-app.appspot.com/o/gridicons%2FFIR%20list.png?alt=media&token=bf53d18b-8b06-4ea1-9998-3f339c973434'}}
                       />
                    </TouchableOpacity>
                    
                    
                </View>
                <View style={styles.formHeader}>
                <Text style={{fontSize:15,marginLeft:12,marginTop:5,color:'#fff',fontWeight:'bold'}}>FORMS</Text>
                </View>
                <View style={{flexDirection:'row',alignSelf: 'flex-start',flex: 1 / 3}}>
                    <TouchableOpacity style={styles.button}
                    onPress={() => { navigation.navigate('NOC')}}>
                        <Image style={styles.image}
                       source= {{uri:'https://firebasestorage.googleapis.com/v0/b/crime-record-app.appspot.com/o/gridicons%2FApply%20for%20NOC.png?alt=media&token=61631f7e-904d-49c2-837d-d76302323752'}}
                       />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                    onPress={() => { navigation.navigate('PVC') }}>
                        <Image style={styles.image}
                        source= {{uri:'https://firebasestorage.googleapis.com/v0/b/crime-record-app.appspot.com/o/gridicons%2FPolice%20varification.png?alt=media&token=70d66e89-b7e4-4674-a8ce-6eb24d891231'}}
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

    image:{width: 100,
         height: 100, 
         backgroundColor:'#fff',
         borderRadius:8},

    button: {
        margin:12,
        aspectRatio:1,
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
        margin:12,
        aspectRatio:1,
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
    formHeader:{
        marginTop:10,
        backgroundColor:'#29294a',
        height:33,shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1.2,
        },
        shadowOpacity: 0,
        shadowRadius: 2.62,
        elevation: 3,},
})
