import MapView, { Callout, Marker, Region } from 'react-native-maps';
import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { markers } from '../assets/marker';

export const DivingMap = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      const location = await Location.getCurrentPositionAsync({});
      setLocation(location); 
    })();
  }, []);
  const onMarkerSelected = (marker: any) => {
		Alert.alert(marker.name);
	};

	const calloutPressed = (ev: any) => {
		console.log(ev);
	};

	const onRegionChange = (region: Region) => {
		console.log(region);
	};

  return (
    <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
        }}
        region={location ? {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        } : undefined}
        onRegionChangeComplete={onRegionChange}
      >
      {location && (
        <Marker
          coordinate={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          }}
          title="Marker Title"
          description="Marker Description"
        />
      )}
      {markers.map((marker, index) => (
					<Marker
						key={index}
						title={marker.name}
						coordinate={marker}
						onPress={() => onMarkerSelected(marker)}
					>
						<Callout onPress={calloutPressed}>
							<View style={{ padding: 10 }}>
								<Text style={{ fontSize: 24 }}>Hello</Text>
							</View>
						</Callout>
					</Marker>
				))}
    </MapView>
  );
};
