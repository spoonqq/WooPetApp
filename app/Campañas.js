import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView, { Marker } from 'react-native-maps';

const Campañas = ({ route }) => {

  const { nombre, pelo, raza, sexo, tamanio, list } = route.params;
  
  const [direction, setDirection] = React.useState({
    latitude: list.latitude,
    longitude: list.longitude,
  });

  return (
    <View style={styles.cont1}>
      <View style={styles.cont2}>
        <Text>00</Text>
      </View>
      <View style={styles.cont3}>
        <Text style={{fontSize: 35}}>SE BUSCA</Text>
      </View>
      <View style={styles.cont4}>
        <View style={{paddingTop: '5%'}}>
          <Text>Nombre: {nombre}</Text>
          <Text>Pelo: {pelo}</Text>
          <Text>Raza: {raza}</Text>
          <Text>Sexo: {sexo}</Text>
          <Text>Tamaño: {tamanio}</Text>
        </View>
      </View>
      <View style={styles.cont5}>
        <View style={{ width: '70%', height: '55%', alignSelf: 'center' }}>
          <MapView
            style={StyleSheet.absoluteFillObject}
            customMapStyle={styles.mapStyle}
            initialRegion={{
              latitude: list.latitude,
              longitude: list.longitude,
              latitudeDelta: 0.15,
              longitudeDelta: 0.10

            }}>
            <Marker
              coordinate={direction}
              draggable
              onDragEnd={(direction) => setDirection(direction.nativeEvent.coordinate)}
            />

          </MapView>
        </View>
      </View>
    </View>
  )
}

export default Campañas

const styles = StyleSheet.create({
  cont1: {
    backgroundColor: "#fffff",
    flex: 1
  },
  cont2: {
    backgroundColor: "grey",
    height: "40%",
    alignItems: 'center',
    justifyContent: 'center'
  },
  cont3: {
    backgroundColor: "#fffff",
    height: "10%",
    alignItems: 'center',
    justifyContent: 'center'
  },
  cont4: {
    backgroundColor: "#fffff",
    height: "20%",
    alignItems: 'flex-start',
    marginLeft: "15%",
    marginRight: "15%",
    borderTopWidth: 1,
    borderBottomWidth: 1
  },
  cont5: {
    backgroundColor: "#fffff",
    height: "30%",
    alignItems: 'flex-start',
    marginLeft: "15%",
    marginRight: "15%",
    marginTop: "2%"
  },
  mapStyle: [
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "transit",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    }
  ],

});

