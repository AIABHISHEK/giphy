import React from 'react';

import { ImageBackground } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            // source={require('../assets/icon.png')}
            // style={{ width: '100%', height: '100%' }}
            source={{ uri: 'https://picsum.photos/200/200' }}
            style={{ width: '100%', height: '100%' }}
        >
        </ImageBackground>
    );
}

export default WelcomeScreen;