import React, { useState, useEffect } from 'react'
import * as Location from 'expo-location'

export const useGetLocation = () => {
    const [location, setLocation] = useState(null)
    const [lat, setLat] = useState<number | null>(null)
    const [lon, setLon] = useState<number | null>(null)

    useEffect(() => {
        (async() => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.log('Permission Denied')
                return;
            }
            let CurrentLocation:any = await Location.getCurrentPositionAsync({});
            setLocation(CurrentLocation)
            setLat(CurrentLocation.coords.latitude)
            setLon(CurrentLocation.coords.longitude)
            // console.log(CurrentLocation)
        })();
    }, []);
    return [lat, lon]
}