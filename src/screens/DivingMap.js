import MapView from 'react-native-maps';

const DivingMap = () => {
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          title="Marker Title"
          description="Marker Description"
        />
      </MapView>
    );
  };
  
  export default DivingMap;