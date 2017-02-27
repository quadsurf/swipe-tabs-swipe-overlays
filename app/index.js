
import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Platform,
    Navigator,
    TouchableOpacity,
    Text,
} from 'react-native';

import Login from './Components/Login/Login';
import Home from './Components/Home/Home';

var SCREEN_WIDTH = require('Dimensions').get('window').width;
var BaseConfig = Navigator.SceneConfigs.FloatFromRight;

global.Config = {
}

var CustomLeftToRightGesture = Object.assign({}, BaseConfig.gestures.pop, {
    // Make it snap back really quickly after canceling pop
    snapVelocity: 8,
    // Make it so we can drag anywhere on the screen
    edgeHitWidth: SCREEN_WIDTH,
});

var CustomSceneConfig = Object.assign({}, BaseConfig, {
    // A very tighly wound spring will make this transition fast
    springTension: 100,
    springFriction: 1,
    // Use our custom gesture defined above
    gestures: {
        //pop: CustomLeftToRightGesture,
    }
});

export default class Sheprd extends Component {
    _renderScene(route, navigator) {
        if (route.name == 'Login') {
            return <Login navigator={navigator}
                {...route.passProps} />
        }else if (route.name == 'Home') {
            return <Home navigator={navigator}
                {...route.passProps} />
        }
    }
    _configureScene(route) {
        return CustomSceneConfig;
    }
    render() {
        //alert("Here");
        return (
            <Navigator
                initialRoute = {{ name: 'Login', title: 'Sign In'}}
                renderScene={this._renderScene}
                configureScene={this._configureScene}
                />
        );
    }
}
var NavigationBarRouteMapper = {
    LeftButton(route, navigator, index, navState) {
        if (index > 0) {
            return (
                <TouchableOpacity
                    onPress={() => { if (index > 0) { navigator.pop() } } }>
                    <Text style={styles.leftButton}>
                        Back
                    </Text>
                </TouchableOpacity>
            )
        }
    },
    RightButton(route, navigator, index, navState) {
        if (route.openMenu) return (
            <TouchableOpacity
                onPress={() => route.openMenu()}>
                <Text style={styles.rightButton}>
                    {route.rightText || 'Menu'}
                </Text>
            </TouchableOpacity>
        )
    },
    Title(route, navigator, index, navState) {
        return (
            <Text style={styles.title}>
                {route.title}
            </Text>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#A20004"
    },
    navigationBar: {
        backgroundColor: '#FF3366',
    },
    leftButton: {
        color: '#ffffff',
        margin: 10,
        fontSize: 17,
    },
    title: {
        color: '#ffffff',
        justifyContent: 'center',
        fontSize: 18,
        flex: 1
    },
    rightButton: {
        color: 'white',
        margin: 10,
        fontSize: 16
    }
})
