import React from 'react'

import { View, Text } from 'react-native'

const HomeScreen = ({ route }) => {
    const { user } = route.params;

    return (
        <View>
            <Text>Email:{user.email}</Text>
            <Text>Name:{user.fullName}</Text>
            <Text>Phone:{user.phone}</Text>
        </View>
    )

}

export default HomeScreen