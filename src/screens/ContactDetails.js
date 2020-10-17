import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Linking,
  Platform,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ContactDetails = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible1, setModalVisible1] = useState(false);

    const dialCall = phone => {

        let phoneNumber = phone;
    
        if (Platform.OS === 'android') {
          phoneNumber = `tel:${phoneNumber}`;
        }
        else {
          phoneNumber = `telprompt:${phoneNumber}`;
        }
    
        Linking.openURL(phoneNumber);
      };
      
  return (
    <View style={styles.centeredView}>

      <Modal
        // animationType="slide"
        transparent={true}
        visible={modalVisible1}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <View>

            <View style={styles.city}>
                <Text style={styles.modalText}>Police Helpline</Text>
                <TouchableHighlight onPress={()=> dialCall('100')}>
                <Text style={styles.modalNumbers}>100</Text>
                </TouchableHighlight>
            </View>

            <View style={styles.city}>
                <Text style={styles.modalText}>Helpline for medical emergency</Text>
                <TouchableHighlight onPress={()=> dialCall('108')}>
                <Text style={styles.modalNumbers}>108 </Text>
                </TouchableHighlight>
            </View>

            <View style={styles.city}>
                <Text style={styles.modalText}>Abhayam Women Helpline</Text>
                <TouchableHighlight onPress={()=> dialCall('181')}>
                <Text style={styles.modalNumbers}>181</Text>
                </TouchableHighlight>
            </View>
           
            </View>

            <TouchableHighlight
              style={styles.button}
              onPress={() => {
                setModalVisible1(!modalVisible1);
              }}
            >
              <Text style={styles.textStyle}>Hide</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        style={styles.openButton}
        onPress={() => {
          setModalVisible1(true);
        }}
      >
        <Text style={styles.textStyle}>GENERALL HELPLINE NUMBERS</Text>
      </TouchableOpacity>

      <Modal
        // animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <View>
            <View style={styles.city}>
                <Text style={styles.modalText}>Ahmedabad City</Text>
                <TouchableHighlight onPress={()=> dialCall('795630100')}>
                <Text style={styles.modalNumbers}>0795630100</Text>
                </TouchableHighlight>
            </View>

            <View style={styles.city}>
                <Text style={styles.modalText}>Surat City</Text>
                <TouchableHighlight onPress={()=> dialCall('795630100')}>
                <Text style={styles.modalNumbers}>02612241301</Text>
                </TouchableHighlight>
            </View>

            <View style={styles.city}>
                <Text style={styles.modalText}>Vadodara City</Text>
                <TouchableHighlight onPress={()=> dialCall('795630100')}>
                <Text style={styles.modalNumbers}>02652415111</Text>
                </TouchableHighlight>
            </View>

            <View style={styles.city}>
                <Text style={styles.modalText}>Rajkot City</Text>
                <TouchableHighlight onPress={()=> dialCall('795630100')}>
                <Text style={styles.modalNumbers}>02812457777</Text>
                </TouchableHighlight>
            </View>
           
            </View>
            <TouchableHighlight
              style={styles.button}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>COMMISIONER OF POLICE</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    // marginTop: 22,
    backgroundColor:'#1a1a2e'
  },
  modalView: {
    margin: 45,
    width:300,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#e94560",
    marginTop:30,
    width:300,
    borderRadius: 8,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    fontSize:20,
    fontWeight:'bold',  
    marginBottom: 15,
    textAlign: "center"
  },
  modalNumbers: {
      fontSize:17,
    marginBottom: 8,
    textAlign: "center"
  },
  city: {
    fontSize:17,
    borderBottomWidth:1,
    borderColor:'gray',
    width:250,
    marginBottom: 8,
    textAlign: "center"
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

});

export default ContactDetails;



// const [modalVisible, setModalVisible] = useState(false);
//   return (
//     <View style={styles.centeredView}>
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           Alert.alert("Modal has been closed.");
//         }}
//       >
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <Text style={styles.modalText}>Hello World!</Text>

//             <TouchableHighlight
//               style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
//               onPress={() => {
//                 setModalVisible(!modalVisible);
//               }}
//             >
//               <Text style={styles.textStyle}>Hide Modal</Text>
//             </TouchableHighlight>
//           </View>
//         </View>
//       </Modal>

//       <TouchableHighlight
//         style={styles.openButton}
//         onPress={() => {
//           setModalVisible(true);
//         }}
//       >
//         <Text style={styles.textStyle}>Show Modal</Text>
//       </TouchableHighlight>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 22
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: "white",
//     borderRadius: 20,
//     padding: 35,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5
//   },
//   openButton: {
//     backgroundColor: "#F194FF",
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2
//   },
//   textStyle: {
//     color: "white",
//     fontWeight: "bold",
//     textAlign: "center"
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: "center"
//   }
// });