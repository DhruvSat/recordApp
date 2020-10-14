import * as React from "react";
import { View, Text, Image, FlatList, Dimensions, StyleSheet } from "react-native";
// import { Card, ListItem, Button, Icon } from 'react-native-elements'

const picsumImages = new Array(11).fill("http://placeimg.com/640/360/any");
const numColumns = 3;
// const screenWidth = Dimensions.get("window").width;

// const tileSize = screenWidth / numColumns;


function renderItem({ item }) {
    return (
        <Image
            source={{ uri: item, }}
            style={{ margin: 4, aspectRatio: 1, flex: 1 / numColumns, overflow: "hidden", borderRadius: 8 }}
        />

    );
}

const Grid = () => {
    const [images, setImages] = React.useState(picsumImages);
    return (
        <FlatList style={{ marginHorizontal: 5 }} columnWrapperStyle={style.row} data={images} renderItem={renderItem} numColumns={numColumns} />
    );
}

const style = StyleSheet.create({
    row: {
        flex: 1,
        // justifyContent: "space-between",
        alignItems: 'flex-start'
    }
});
export default Grid