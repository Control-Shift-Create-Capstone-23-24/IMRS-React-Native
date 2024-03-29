import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Circle } from 'react-native-maps';
import { useGetLocation } from "../hooks/useGetLocation";
import ColorsOp from '../const/colorsOp';
import {createDynamoDBTable} from "../fetch/createTableForGeoFence";
import { getHeatmap } from "../fetch/getHeatmap";

export const HeatMap = () => {
    createDynamoDBTable('GeoFence1')
    const [lat, long] = useGetLocation();
    const [points, setPoints] = useState([]);

    const [initialPosition, setInitialPosition] = useState({
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.006,
        longitudeDelta: 0.0016,
    });

    useEffect(() => {
        if (lat !== null && long !== null) {
            setInitialPosition({
                latitude: lat,
                longitude: long,
                latitudeDelta: 0.006,
                longitudeDelta: 0.0016,
            });
        }

        getHeatmap()
            .then(coordinates => {
                setPoints(coordinates);
            })
            .catch(error => {
                console.error('Error retrieving heatmap points:', error);
            });

    }, [lat, long]);

    // Hard-coded coordinates for testing
    // const points = [
    //     { latitude: 33.25426159975811, longitude: -97.15346049356037, weight: 1, color: ColorsOp.BR },
    //     { latitude: 33.254203282133034, longitude: -97.15335856961988, weight: 1, color: ColorsOp.BR },
    //     { latitude: 33.254473642666156, longitude: -97.15246433422597, weight: 1, color: ColorsOp.YL },
    //     { latitude: 33.25352795145702, longitude: -97.15230949760641, weight: 1, color: ColorsOp.LG },
    //     { latitude: 33.25317663249325, longitude: -97.15263271033234, weight: 1, color: ColorsOp.LG },
    // ];


    const getFillColor = (status) => {
        switch (status) {
            case 'Green':
                return ColorsOp.LG;
            case 'Yellow':
                return ColorsOp.YL;
            case 'Red':
                return ColorsOp.BR;
            default:
                return 'grey';
        }
    };

    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={initialPosition}
                mapType="satellite"
            >
                {points.map((point, index) => (
                    <Circle
                        key={index}
                        center={{ latitude: point.latitude, longitude: point.longitude }}
                        radius={20}
                        fillColor={getFillColor(point.status)}
                        strokeWidth={0}// Set this to 0 to remove the stroke border
                    />
                ))}
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default HeatMap;

