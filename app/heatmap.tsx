
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Circle, Polyline } from 'react-native-maps';
import { useGetLocation } from "../hooks/useGetLocation";
import ColorsOp from '../const/colorsOp';
import { createDynamoDBTable } from "../fetch/createTableForGeoFence";
import { getHeatmap } from "../fetch/getHeatmap";

    // Hard-coded coordinates for testing
    const p = [
        { latitude: 33.25426159975811, longitude: -97.15346049356037, color: ColorsOp.BR },
        { latitude: 33.254203282133034, longitude: -97.15335856961988, color: ColorsOp.BR },
        { latitude: 33.254473642666156, longitude: -97.15246433422597, color: ColorsOp.YL },
        { latitude: 33.25352795145702, longitude: -97.15230949760641, color: ColorsOp.LG },
        { latitude: 33.25317663249325, longitude: -97.15263271033234, color: ColorsOp.LG },
    ];

    

const HeatMap = () => {
    const [lat, long] = useGetLocation();
    const [points, setPoints] = useState<{ latitude: number, longitude: number, status: string, user: string }[]>([]);
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     createDynamoDBTable('GeoFence1').catch(console.error);
    // }, []);

    useEffect(() => {
        if (lat !== null && long !== null) {
            setPoints([]); // Reset points while fetching new
            fetchHeatmapData();
            // const interval = setInterval(() => {
            //     fetchLocation();
            // }, 5000); // Fetch location every minute (60000 milliseconds)

            // return () => {
            //     clearInterval(interval);
            // };
        }
    }, [lat, long]);

    const fetchHeatmapData = async () => {
        try {
            const coord = await getHeatmap();
            console.log('From Map: ',coord)
            setPoints(coord);
            console.log('After Set: ',points)
        } catch (error) {
            console.error('Error retrieving heatmap points:', error);
        } finally {
            setLoading(false);
        }
    };

    const getFillColor = (status: string) => {
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

    if (loading) {
        return <ActivityIndicator size="large" />;
    }

    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={{
                    latitude: lat || 0,
                    longitude: long || 0,
                    latitudeDelta: 0.060,
                    longitudeDelta: 0.0160,
                }}
                mapType="satellite"
            >
                {points.map((point, index) => (
                    <Circle
                        key={index}
                        center={{ latitude: point.latitude, longitude: point.longitude }}
                        radius={20}
                        fillColor={getFillColor(point.status)}
                        strokeWidth={0}
                    />
                ))}

                <Polyline
                    coordinates={[
                        {latitude: 33.262133, longitude: -97.143094},
                        {latitude: 33.245594, longitude: -97.143094},
                        {latitude: 33.245594, longitude: -97.162048},
                        {latitude: 33.262133, longitude: -97.162048},
                        {latitude: 33.262133, longitude: -97.143094},
                    ]}
                    strokeColor="#000"
                    strokeColors={['#7F0000', '#B24112', '#E5845C', '#7F0000']}
                    strokeWidth={6}
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
