import React from 'react'
import { Card, SimpleCard } from "@paraboly/react-native-card";
import { View } from 'react-native'

const CardView = () => {
    return (
        <View>
            <Card
                iconDisable
                title="Title"
                content="Main Content"
                bottomRightText="30"
                onPress={() => { }}

            />
        </View>
    )
}

export default CardView

