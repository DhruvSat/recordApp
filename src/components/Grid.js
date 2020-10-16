import * as React from "react";
import { View, Text, Image, FlatList, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
// import WomenSaftey from '../screens/WomenSaftey';
// import ReportCrime from '../screens/ReportCrime';
// import ComplaintRegister from '../screens/ComplaintRegister';
// import ReportMissingPerson from '../screens/ReportMissingPerson';
import HomeStack from '../navigation/HomeStack';



const picsumImages = [
    {screen:'WomenSaftey',link:'https://firebasestorage.googleapis.com/v0/b/crime-record-app.appspot.com/o/gridicons%2FWomen%20Safety.png?alt=media&token=219d6048-9ed2-49f9-968e-8be0c03e9068'},
{screen:'ReportCrime',link:'https://firebasestorage.googleapis.com/v0/b/crime-record-app.appspot.com/o/gridicons%2Fcrime%20report.png?alt=media&token=1e02c269-4818-45ff-8abf-42fd41b0acf6'},
{screen:'ComplaintRegister',link:'https://firebasestorage.googleapis.com/v0/b/crime-record-app.appspot.com/o/gridicons%2FRegister%20Complaint.png?alt=media&token=d4c5bf4c-3c0e-48fa-b125-d20efe9298a2'},
{screen:'ReportMissingPerson',link:'https://firebasestorage.googleapis.com/v0/b/crime-record-app.appspot.com/o/gridicons%2FReport%20missing%20person.png?alt=media&token=9d85cca7-3357-4d0e-b0e6-1660325be10d'}
]
const numColumns = 3;



const Grid = () => {
    const [images, setImages] = React.useState(picsumImages);
    const navigation = useNavigation();

    function renderItem({ item }) {
        
        return (
            <TouchableOpacity 
            style={{
                backgroundColor:'',
                alignSelf: 'center',
                flex: 1 / 3,
            }}
            onPress={()=>navigation.navigate({
                component:{HomeStack},
                // name:item.screen
            })}
            >
            
                <Image
                    source={{ uri: item.link }}
                    style={{ 
                        margin: 3, 
                        marginVertical: 5, 
                        aspectRatio: 1, flex: 1 / numColumns, 
                        overflow: "hidden", borderRadius: 8, 
                        borderColor: 'white',
                        backgroundColor:'white' }}
                />
            </TouchableOpacity>
    
    
        );
    }
    return (
        <FlatList
        style={{ marginLeft: 8 }} 
        keyExtractor={item => item.link}
        columnWrapperStyle={style.row} 
        data={images}
        renderItem={renderItem} 
        numColumns={numColumns} 
        />
    );
}

const style = StyleSheet.create({
    row: {
        flex: 1,
        alignItems: 'flex-start'
    }
});
export default Grid