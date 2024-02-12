import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import MapView, { Heatmap, PROVIDER_GOOGLE } from 'react-native-maps';
import {useGetLocation} from "../hooks/useGetLocation";

export const HeatMap = () => {
    const [lat, long] = useGetLocation();

    let [initialPosition, setInitialPosition] = useState({
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.006,
        longitudeDelta: 0.0016,
    });

    // Using useEffect to update initialPosition when lat or long changes
    useEffect(() => {
        if (lat !== null && long !== null) {
            setInitialPosition({
                latitude: lat,
                longitude: long,
                latitudeDelta: 0.006,
                longitudeDelta: 0.0016,
            });
        }
    }, [lat, long]); // Ensure lat and long are in the dependency array


    // Points data
    const points = [
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

    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE} // Ensure Google Maps is used as the provider
                style={styles.map}
                region={initialPosition} // Set the initial region
                mapType="satellite" // Set map type if needed
            >
                <Heatmap
                    points={points}
                    radius={60}
                    opacity={0.65} // Adjust opacity if needed, using a value more typical for visibility
                    gradient={{
                        colors: ["black", "purple", "red", "orange", "white"],
                        startPoints: Platform.OS === 'ios' ? [0.01, 0.04, 0.1, 0.45, 0.5] : [0.1, 0.25, 0.5, 0.75, 1],
                        colorMapSize: 256 // Adjusted colorMapSize for better compatibility
                    }}
                />
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
