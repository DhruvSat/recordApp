import * as React from "react";
import { View, Text, Image, FlatList, Dimensions, StyleSheet, TouchableOpacity } from "react-native";


const picsumImages = ['']
const numColumns = 3;

function renderItem({ item }) {
    return (
        <TouchableOpacity style={{
            flex: 1 / 3,
        }}>
            <Image
                source={{ uri: item, }}
                style={{ margin: 3, marginVertical: 5, aspectRatio: 1, flex: 1 / numColumns, overflow: "hidden", borderRadius: 8, borderWidth: 1, borderColor: 'white' }}
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