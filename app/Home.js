import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Alert, SafeAreaView, ScrollView } from 'react-native';
import React from 'react'
import { useFonts } from 'expo-font';


export default function Home() {
  const [fontsLoaded] = useFonts({
    PassionOne: require ("../assets/fonts/PassionOne-Regular.ttf"),
    Comfortaa: require ("../assets/fonts/Comfortaa-Regular.ttf"),
    SupermercadoOne: require ("../assets/fonts/SupermercadoOne-Regular.ttf"),
    Quicksand: require ("../assets/fonts/Quicksand-Regular.ttf")
  })

  return (
    <View style={styles.Cont3}>
      <View style={styles.Cont2}>
        <View style={styles.ContImg2}>
          <Image
            style={styles.imagep}
            source={require("../assets/pinos.png")}
          />
        </View>
        <View style={styles.ContImg1}>
          <Image
            style={styles.imagep2}
            source={require("../assets/perrogracioso2.png")}
          />
        </View>

      </View>
      <View style={styles.Cont4}>

        <Text style={styles.Titulo}>¡Bienvenido de vuelta, Alan!,
          Gracias por volver.</Text>

        <View style={styles.Caja}>
          <Text style={styles.Subt}>Respuestas de tus solicitudes</Text>

          <View style={styles.Caja3}>

          </View>
          <View style={styles.Caja4}>


          </View>
        </View>
        <View style={styles.Caja2}>
          <Text style={styles.Subt}>Campañas disponibles cerca de tu locación</Text>
          <View style={styles.Caja3}>

          </View>
          <View style={styles.Caja4}>


          </View>
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Cont1: {
    backgroundColor: '#BDCFB4',
    width: '15%',
    height: '40%',
    justifyContent: 'flex-end',

  },
  Cont2: {
    backgroundColor: '#BDCFB4',
    flexDirection: 'row',
    height: '22%',
  },
  Cont3: {
    flex: 1,
    backgroundColor: '#F8FEF3'
  },
  Cont4: {
    flexDirection: 'column',
    backgroundColor: '#F8FEF3',
    flex: 1,
    marginTop: '13%',
    alignItems: 'center'
  },
  Cont5: {
    position: 'relative',
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  ContImg1: {
    backgroundColor: '#E8F8D7',
    height: '120%',
    width: '40%',
    borderRadius: 95,
    alignItems: 'center',
    left: '32%',
    top: '15%'

  },
  ContImg2: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    position: 'relative'

  },
  ContTit: {
    position: 'relative',
    width: '60%',
    alignItems: 'center',

  },
  Caja: {
    height: '35%',
    width: '85%',
    backgroundColor: '#D0DDCA',
    position: 'relative',
    top: '5%',
    borderRadius: 25
  },
  Caja2: {
    height: '35%',
    width: '85%',
    backgroundColor: '#D0DDCA',
    position: 'relative',
    top: '5%',
    borderRadius: 25,
    top: 70
  },
  Caja3: {
    height: '32%',
    width: '85%',
    backgroundColor: '#D9D9D9',
    position: 'relative',
    alignSelf: 'center',
    top: 10,
    borderRadius: 10,
    borderWidth: 1
  },
  Caja4: {
    height: '32%',
    width: '85%',
    backgroundColor: '#D9D9D9',
    position: 'relative',
    alignSelf: 'center',
    top: 25,
    borderRadius: 10,
    borderWidth: 1
  },
  imagep: {
    width: 90,
    height: 58,
  },
  imagep2: {
    width: 150,
    height: 128,
    top: '12%'
  },
  iconm: {
    fontSize: 50,
    marginLeft: 10
  },
  Titulo: {
    fontSize: 25,
    fontFamily: "Comfortaa",
    width: '75%',
    position: 'relative',
    left: 30
  },
  Subt: {
    left: 20,
    top: 5,
    fontSize: 18,
    fontFamily: 'Quicksand'
  }

})