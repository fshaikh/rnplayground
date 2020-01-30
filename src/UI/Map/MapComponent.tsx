import React, { useEffect, useState } from "react";
import MapView, { Marker, LatLng } from "react-native-maps";
import { View, StyleSheet, Dimensions } from "react-native";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

interface MapRegion {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}
export const MapComponent = () => {
  const [mapRegion, setMapRegion] = useState<MapRegion>();
  const [isLocationFound, setIsLocationFound] = useState<Boolean>(false);
  const markerPoint: LatLng = {
    latitude: 52.5296339,
    longitude: 13.3288058
  };
  useEffect(() => {
    (async () => {
      const status = await Permissions.askAsync(Permissions.LOCATION);
      if (status.granted) {
        console.log(isLocationFound);
        if (!isLocationFound) {
          let location = await Location.getCurrentPositionAsync({
            enableHighAccuracy: true
          });
          const { coords } = location;
          setIsLocationFound(true);
          setMapRegion({
            latitude: coords.latitude,
            longitude: coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          });
        }
      }
    })();
  });
  return (
    <View>
      <MapView
        style={styles.mapStyle}
        showsUserLocation={true}
        region={mapRegion}
      >
        <Marker title="Solwo 27"
                description="This is where i first lived on arriving in berlin"
                coordinate={markerPoint} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }
});
