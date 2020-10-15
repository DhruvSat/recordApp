import * as React from "react";
import { View, Text, Image, FlatList, Dimensions, StyleSheet, TouchableOpacity } from "react-native";


const picsumImages = ['https://firebasestorage.googleapis.com/v0/b/crime-record-app.appspot.com/o/gridicons%2FWomen%20Safety.png?alt=media&token=6761e9f0-6688-4703-a0c6-ad367e87f619',
'https://firebasestorage.googleapis.com/v0/b/crime-record-app.appspot.com/o/gridicons%2Fcrime%20report%20png.png?alt=media&token=44045955-1579-4582-b83a-d2370c3566a1',
'https://console.firebase.google.com/v0/b/crime-record-app/storage/crime-record-app.appspot.com/files~2Fgridicons',
'https://firebasestorage.googleapis.com/v0/b/crime-record-app.appspot.com/o/gridicons%2FFIR%20list.png?alt=media&token=529dd79b-2870-4a8a-911e-1d0f7f4fbaa0',]
const numColumns = 3;

function renderItem({ item }) {
    return (
        <TouchableOpacity style={{
            backgroundColor:'',
            alignSelf: 'center',
            flex: 1 / 3,
        }}>
            <Image
                source={{ uri: item, }}
                style={{ margin: 3, marginVertical: 5, aspectRatio: 1, flex: 1 / numColumns, overflow: "hidden", borderRadius: 8, borderColor: 'white' }}
            />
        </TouchableOpacity>


    );
}

const Grid = () => {
    const [images, setImages] = React.useState(picsumImages);
    return (
        <FlatList style={{ marginLeft: 8 }} columnWrapperStyle={style.row} data={images} renderItem={renderItem} numColumns={numColumns} />
    );
}

const style = StyleSheet.create({
    row: {
        flex: 1,
        alignItems: 'flex-start'
    }
});
export default Grid