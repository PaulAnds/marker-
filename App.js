import React from 'react';
import MapView from 'react-native-maps';
import { View } from 'react-native';
import styles from './styles.js';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView
        style = {styles.mapView}
        showsUserLocation
        followsUserLocation
      >
        <MapView.Marker
          title = "Uniat"
          description = "University of Advanced Technologies"
          coordinate = {{
            latitude: 20.651851520637354,
            longitude: -103.40273549401348
          }}
        />
        <MapView.Marker
          title = "Plaza del sol"
          description = "Por unos tacos"
          coordinate = {{
            latitude: 20.650476750442156, 
            longitude: -103.40167415156785,
          }}
        />
      </MapView>
    </View> 
  );
}