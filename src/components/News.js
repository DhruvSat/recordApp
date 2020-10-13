import React, { useState } from 'react';
import storage from '@react-native-firebase/storage';
import { FlatListSlider } from 'react-native-flatlist-slider';
import { View, Text, Image } from 'react-native'


function listFilesAndDirectories(reference, pageToken) {
    return reference.list({ pageToken }).then(result => {
        // Loop over each item
        result.items.forEach(ref => {
            getUrl(ref.fullPath)

        });

        if (result.nextPageToken) {
            return listFilesAndDirectories(reference, result.nextPageToken);
        }

        return Promise.resolve();
    });
}

const reference = storage().ref('news');

listFilesAndDirectories(reference).then(() => {
    console.log('Finished listing');
});
var arr =[]
var obj ={}
async function getUrl(path) {
    
    
    url = await storage()
        .ref(path)
        .getDownloadURL();

    obj = { image: url.toString() }
    arr.push(obj)
    // console.log(JSON.stringify(obj))
    console.log(JSON.stringify(arr))
    window.images = arr.slice() //making images(array) globally available
}


const News = () => {

    return (
        <View>
            <Text>
                LUCKY if you see this
               
            </Text>
            <View>
                <FlatListSlider
                    data={images}
                    height={120}
                    // timer={5000}
                    onPress={item => alert(JSON.stringify(item))}
                    contentContainerStyle={{  }}
                    indicatorContainerStyle={{ position: 'absolute', bottom: 10 }}
                    indicatorActiveColor={'#8e44ad'}
                    indicatorInActiveColor={'#ffffff'}
                    indicatorActiveWidth={12}
                    animation
                />
            </View>
            
        </View>
    )
}

export default News