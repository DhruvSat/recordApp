import React, { useState } from 'react';
import storage from '@react-native-firebase/storage';
import { View, Text, Image } from 'react-native'


function listFilesAndDirectories(reference, pageToken) {
    return reference.list({ pageToken }).then(result => {
        // Loop over each item
        result.items.forEach(ref => {
            console.log(ref.fullPath);
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

async function getUrl() {

    url = await storage()
        .ref('news/banner_01.jpg')
        .getDownloadURL();
    console.log(`URL = ${url}`)


}


const News = () => {

    const url = 'https://firebasestorage.googleapis.com/v0/b/crime-record-app.appspot.com/o/news%2Fbanner_01.jpg?alt=media&token=a3cca5e7-fb49-492a-88df-cd5c5c2ec8c1'
    //getUrl();
    return (
        <View>
            <Text>
                LUCKY if you see this
                {/* URL = {url} */}
            </Text>
            <Image
                source={{ uri: url }}
                style={{ width: 1600, height: 425 }}
            />
        </View>
    )
}

export default News