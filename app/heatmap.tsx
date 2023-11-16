import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Platform
} from 'react-native';
import MapView, { Heatmap, PROVIDER_GOOGLE } from 'react-native-maps';

export default class HeatMap extends Component {

    static navigationOptions = {
        title: 'IMRS HeatMap',
    };

    state = {
        initialPosition: {
            latitude: 33.210443,
            longitude: -97.147442,
            latitudeDelta: 0.006,
            longitudeDelta: 0.0016
        }
    }

    points = [
        { latitude: 33.210479, longitude: -97.147109, weight: 1 },
        { latitude: 33.210529, longitude: -97.147254, weight: 1 },
        { latitude: 33.210443, longitude: -97.147227, weight: 1 },
        { latitude: 33.210506, longitude: -97.147442, weight: 1 },
        { latitude: 33.210650, longitude: -97.147635, weight: 1 },
        { latitude: 33.210757, longitude: -97.147372, weight: 1 },
        { latitude: 33.210955, longitude: -97.147243, weight: 1 },
        { latitude: 33.210982, longitude: -97.147404, weight: 1 },
        { latitude: 33.211013, longitude: -97.147233, weight: 1 },
        { latitude: 33.211067, longitude: -97.147399, weight: 1 },
        { latitude: 33.211215, longitude: -97.147212, weight: 1 },
        { latitude: 33.211054, longitude: -97.147287, weight: 1 },
        { latitude: 33.210941, longitude: -97.147351, weight: 1 },

    ];
    private _map: any;

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    mapType={"satellite"}
                    ref={map => this._map = map}
                    style={styles.map}
                    initialRegion={this.state.initialPosition}>
                    <Heatmap
                        points={this.points}
                        radius={60}
                        opacity={4}
                        gradient={{
                            colors: ["black", "purple", "red", "orange", "white"],
                            startPoints: Platform.OS === 'ios' ? [0.01, 0.04, 0.1, 0.45, 0.5] :
                                [0.1, 0.25, 0.5, 0.75, 1],
                            colorMapSize: 20000
                        }}
                    >
                    </Heatmap>
                </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject
    },
    map: {
        ...StyleSheet.absoluteFillObject
    }
});