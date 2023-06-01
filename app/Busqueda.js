import { View, Text, SafeAreaView, TextInput, Image, StatusBar, StyleSheet, TouchableOpacity, ImageBackground, ScrollView, Alert } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import React from 'react'
import fb from './firebaseConfig';
import { collection, addDoc, getFirestore } from 'firebase/firestore';


const database = getFirestore(fb);

const Busqueda = () => {
  
  const [nombre, setNombre] = React.useState('');

    const [tamaño, setTamaño] = React.useState('');

    const [pelo, setPelo] = React.useState('');

    const [raza, setRaza] = React.useState('');

    const [sexo, setSexo] = React.useState('');
  
  const [direction, setDirection] = React.useState({
    latitude: 29.089238,
    longitude: -110.971566,
  });
  const [origin, setOrigin] = React.useState({
    latitude: 29.089238,
    longitude: -110.971566,
  });

  const RegistrarCoord = async () => {
    console.log(direction)
    try {
        const docRef = await addDoc(collection(database, "ReportesAdopcion"), {
            latitude: direction.latitude,
            longitude: direction.longitude,
            nombre: nombre,
            tamaño: tamaño,
            pelo: pelo,
            raza: raza,
            sexo: sexo,
            
        });
        
        Alert.alert(
            'Registro de reporte realizado','',
            
            [{ text: 'Aceptar', onPress: () => { navigation.goBack() } }]

        );
    } catch (error) {
        console.log(error)
        alert('Error al crear el registro')
    }
}

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ backgroundColor: '#F8FEF3', flex: 1 }}>
        <View style={styles.cont1}>
          <View style={{ alignItems: 'center', }}>
            <Text style={styles.Txt1}>Añade imágenes de la mascota</Text>
          </View>
          <View style={styles.contimg1}>
            <Image
              source={require("../assets/ImgUp.png")}
            />
          </View>
        </View>
        <View style={{ alignItems: 'center', height: 60, justifyContent: 'center' }}>
          <Text style={{ fontSize: 18 }}>Tipo de mascota</Text>
        </View>
        <View style={styles.cont2}>
          <View style={styles.cont21}>
            <Image
              source={require("../assets/perrito.png")}
            />
          </View>
          <View style={styles.cont22}>
            <Image
              source={require("../assets/sonriendo.png")}
            />
          </View>
          <View style={styles.cont23}>
            <View style={styles.cont24} >
              <Text style={{ fontSize: 20, color: 'white' }}>Otro</Text>
            </View>
          </View>

        </View>
        <View style={styles.cont3}>
          <View style={styles.cont31}>
            <Text style={{ fontSize: 20 }}>
              Nombre:
            </Text>
          </View>
          <View style={styles.cont32}>
            <TextInput placeholder='Nombre de la mascota' style={{ fontSize: 20, left: 20 }} />
          </View>
        </View>
        <View style={styles.cont3}>
          <View style={styles.cont31}>
            <Text style={{ fontSize: 20 }}>
              Edad:
            </Text>
          </View>
          <View style={styles.cont32}>
            <TextInput placeholder='Edad de la mascota' style={{ fontSize: 20, left: 20 }} />
          </View>
        </View>
        <View style={styles.cont3}>
          <View style={styles.cont31}>
            <Text style={{ fontSize: 20 }}>
              Color de pelo:
            </Text>
          </View>
          <View style={styles.cont32}>
            <TextInput placeholder='Color de pelo' style={{ fontSize: 20, left: 20 }} />
          </View>
        </View>
        <View style={styles.cont3}>
          <View style={styles.cont31}>
            <Text style={{ fontSize: 20 }}>
              Color de ojos:
            </Text>
          </View>
          <View style={styles.cont32}>
            <TextInput placeholder='Color de ojos' style={{ fontSize: 20, left: 20 }} />
          </View>
        </View>
        <View style={styles.cont3}>
          <View style={styles.cont31}>
            <Text style={{ fontSize: 20 }}>
              Raza:
            </Text>
          </View>
          <View style={styles.cont32}>
            <TextInput placeholder='Raza' style={{ fontSize: 20, left: 20 }} />
          </View>
        </View>
        <View style={styles.cont4}>
          <View style={styles.cont41}>
            <Text style={{ fontSize: 20, }}>Sexo:</Text>
          </View>
          <View style={styles.cont51}>
            <Image style={styles.Imgs}
              source={require("../assets/m.png")}
            />
          </View>
          <View style={styles.cont52}>
            <Text style={{ fontSize: 20, }}>Macho</Text>
          </View>
          <View style={styles.cont51}>
            <Image style={styles.Imgs}
              source={require("../assets/h.png")}
            />
          </View>
          <View style={styles.cont52}>
            <Text style={{ fontSize: 20, }}>Hembra</Text>
          </View>
        </View>
        <View style={styles.cont6}>
          <Text style={{ fontSize: 20, }}>
            Lugar cercano a desaparicion:
          </Text>
        </View>
        <View style={{ width: '100%', height: 200, alignSelf: 'center',}}>
          <MapView
            style={StyleSheet.absoluteFillObject}
            customMapStyle={styles.mapStyle}
            initialRegion={{
              latitude: origin.latitude,
              longitude: origin.longitude,
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
        <View style={styles.cont6}>
          <Text style={{ fontSize: 20, }}>
            Mas información:
          </Text>
        </View>
        <View style= {styles.cont7} >
              <View styles={styles.cont71}>
              <Text>Más información que deseas agregar referente al lugar o la mascota.</Text>
              </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default Busqueda

const styles = StyleSheet.create({
  cont1: {
    position: 'relative',
    height: 250,
    backgroundColor: '#D9D9D9',
    
    borderBottomWidth: 3,
    borderBottomColor: '#606E4C'

  },
  cont2: {
    height: 100,
    flexDirection: 'row',

  },
  cont21: {
    width: 100,
    position: 'relative',
    left: 70,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cont22: {
    width: 100,
    
    position: 'relative',
    left: 90,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cont23: {
    width: 130,
    
    position: 'relative',
    left: 100,
    alignItems: 'center',
    justifyContent: 'center'

  },
  cont24: {
    height: 50,
    width: 100,
    backgroundColor: '#50626D',
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#2B2B32',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cont3: {
    height: 70,
    
    flexDirection: 'row',
  },
  cont31: {
    left: 30,
    justifyContent: 'center'
  },
  cont32: {
    left: 80,
    justifyContent: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#606E4C',
    width: 250
  },
  cont33: {
    left: 100,
    justifyContent: 'center',
    width: 250
  },
  cont34: {
    height: 50,
    width: 200,
    backgroundColor: '#50626D',
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#2B2B32',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cont4: {
    height: 100,
    
    flexDirection: 'row',
    borderBottomWidth: 3,
    borderBottomColor: '#606E4C'
  },
  cont41: {
    width: 60,
    
    left: 30,
    justifyContent: 'center'
  },
  cont51: {
    width: 70,
    
    position: 'relative',
    left: 70,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cont52: {
    width: 70,
    
    position: 'relative',
    left: 70,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cont6: {
    height: 35,
    margin: 10
  },
  cont7:{
    width: 350,
    height: 200,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    alignSelf: 'center',
    borderColor: '#606E4C',
    borderRadius: 20,
    marginBottom: 20
  },
  cont71:{
    width: 30,
    height: 50,
    position: 'relative',
    backgroundColor: 'black'
  },
  Txt1: {
    position: 'relative',
    justifyContent: 'center',
    fontSize: 30,
    top: 80,
    color: '#00000033',

  },
  contimg1: {
    position: 'relative',
    width: 45,
    height: 45,
    left: 300,
    top: 90
  },
  Imgs: {
    width: 70,
    height: 70,
    position: 'absolute'
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
  ]

})