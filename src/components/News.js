import React, { useState } from 'react';
import storage from '@react-native-firebase/storage';
import { FlatListSlider } from 'react-native-flatlist-slider';
import { View, Text } from 'react-native'


// function listFilesAndDirectories(reference, pageToken) {
//     return reference.list({ pageToken }).then(result => {
//         // Loop over each item
//         result.items.forEach(ref => {
//             getUrl(ref.fullPath)

//         });

//         if (result.nextPageToken) {
//             return listFilesAndDirectories(reference, result.nextPageToken);
//         }

//         return Promise.resolve();
//     });
// }

// const reference = storage().ref('news');

// listFilesAndDirectories(reference).then(() => {
//     console.log('Finished listing');
// });
// var arr =[]
// var obj ={}
// async function getUrl(path) {


//     url = await storage()
//         .ref(path)
//         .getDownloadURL();

//     obj = { image: url.toString() }
//     arr.push(obj)
//     // console.log(JSON.stringify(obj))
//     console.log(JSON.stringify(arr))
//     window.images = arr.slice() //making images(array) globally available
// }


const News = () => {

    const images = [
        {
            image: 'https://web.umang.gov.in/uaw/images/banner_01.jpg',
            desc: 'Banner1',
        },
        {
            image: 'https://web.umang.gov.in/uaw/images/banner_04.jpg',
            desc: 'Banner2',
        },
    ]

    return (

        <View style={{ margin: 10, borderRadius: 8, overflow: "hidden", marginTop: 15 }}>
            <FlatListSlider
                data={images}
                imageKey={'image'}
                height={120}
                // timer={5000}
                autoscroll='false'
                onPress={item => alert(JSON.stringify(item))}
                contentContainerStyle={{}}
                indicatorContainerStyle={{ position: 'absolute', bottom: 7 }}
                indicatorActiveColor={'#8e44ad'}
                indicatorInActiveColor={'#ffffff'}
                indicatorActiveWidth={12}
                animation
            />
        </View>


    )
}

export default News
