import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView, { Marker } from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Campañas = ({ route }) => {

  const navigation = useNavigation();

  const { nombre, pelo, raza, sexo, tamanio, url, list } = route.params;

  const [image, setImage] = useState(null);

  const [direction, setDirection] = React.useState({
    latitude: list.latitude,
    longitude: list.longitude,
  });

  useEffect(async () => {
    const response = await fetch(url);
    const img = { url: response.url };
    setImage(img);
  }, []);

  return (
    <SafeAreaView style={styles.ContPrincipal}>
      <TouchableOpacity style={{paddingBottom: 5}} onPress={
        () => {

          navigation.goBack();
        }
      }>
        <Ionicons name="arrow-back-outline" size={65} />
      </TouchableOpacity>
      <View style={{ alignItems: 'center' }}>
        <Image
          style={{ width: 200, height: 200 }}
          source={image ? { uri: image.url } : null}
        />
      </View>

      <View style={{ alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', }}>
          <Text style={{ fontSize: 40 }}>SE BUSCA</Text>
          <TouchableOpacity style={styles.ButtonFav}>
            <Image
              style={{ width: 40, height: 40 }}
              source={require("../assets/favorito.png")}
            />
          </TouchableOpacity>

        </View>
        <View style={styles.border} />
      </View>
      <Text style={{ fontSize: 20, marginLeft: 20, marginTop: 15, fontWeight: 'Bold' }}>Detalles</Text>


      <Text style={styles.texto}>Nombre: {nombre}</Text>
      <Text style={styles.texto}>Pelo: {pelo}</Text>
      <Text style={styles.texto}>Raza: {raza}</Text>
      <Text style={styles.texto}>Sexo: {sexo}</Text>
      <Text style={styles.texto}>Tamaño: {tamanio}</Text>
      <View style={styles.ContSub}>
        <View style={styles.border} />
      </View>

      <View style={styles.mapa}>
        <View style={{ width: '100%', height: '70%', alignSelf: 'center' }}>
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
    </SafeAreaView>
  )
}

export default Campañas

const styles = StyleSheet.create({
  ContPrincipal: {
    backgroundColor: "#fffff",
    flex: 1
  },
  ContSub: {
    alignItems: 'center'
  },
  border: {
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    width: '80%',
  },

  ButtonFav: {
    backgroundColor: '#3B1F2B',
    padding: 5,
    borderRadius: 60,
    height: 50,
    width: 60,

    alignItems: 'center'

  },
  contenedorText: {
    backgroundColor: "#fffff",
    height: "25%",
    alignItems: 'flex-start',
    marginLeft: "5%",
    marginRight: "8%",
    borderTopWidth: 1,
    borderBottomWidth: 1,

  },
  texto: {
    fontSize: 20,
    marginTop: 20,
    marginLeft: "15%"
  },

  mapa: {
    backgroundColor: "#fffff",
    height: "30%",
    alignItems: 'flex-start',
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: "5%"
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

