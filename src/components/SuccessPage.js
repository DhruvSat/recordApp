import React from 'react';
import LottieView from 'lottie-react-native';

export default class SuccessPage extends React.Component {
    render() {
        return <LottieView source={require('./check-circle.json')} autoPlay />;
    }
}