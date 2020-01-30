import React, { useEffect } from "react";
import MapboxGL from "@react-native-mapbox-gl/maps";
import { View, StyleSheet } from "react-native";

MapboxGL.setAccessToken(
  "pk.eyJ1IjoiZnVycWFuLXNoYWlraCIsImEiOiJjanc2YWFvam8xYThsNGJxcnc1MjduNDYyIn0.OsK8a-_qdI7wCDEVifjpUg"
);

export const MapBoxComponent = () => {
  useEffect(() => {
    MapboxGL.setConnected(true);
    MapboxGL.setTelemetryEnabled(false);
  });
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView style={styles.map} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  container: {
    height: 300,
    width: 300,
    backgroundColor: "tomato"
  },
  map: {
    flex: 1
  }
});
