import React, { useState } from 'react';
import storage from '@react-native-firebase/storage';
import { FlatListSlider } from 'react-native-flatlist-slider';
import { View, Text, Image } from 'react-native'


function listFilesAndDirectories(reference, pageToken) {
    return reference.list({ pageToken }).then(result => {
        // Loop over each item
        result.items.forEach(ref => {
            getUrl(ref.fullPath)
            // console.log(ref.fullPath);

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

async function getUrl(path) {

    url = await storage()
        .ref(path)
        .getDownloadURL();
    console.log(`URL = ${url}`)
}


const News = () => {

    const images = [
        {
            image: 'https://firebasestorage.googleapis.com/v0/b/crime-record-app.appspot.com/o/news%2Fbanner_01.jpg?alt=media&token=a3cca5e7-fb49-492a-88df-cd5c5c2ec8c1',
            
        },
        {
            image: 'https://firebasestorage.googleapis.com/v0/b/crime-record-app.appspot.com/o/news%2Fbanner_04.jpg?alt=media&token=18d6a477-6fc8-4768-a3c0-73847a3b1bdb',
        },
    ]


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