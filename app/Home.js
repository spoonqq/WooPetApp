import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Alert, SafeAreaView, ScrollView } from 'react-native';
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function Home() {
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
    flex: 1
  },
  Cont4: {
    position: 'absolute',
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  ContImg1: {
    backgroundColor: '#E8F8D7',
    height: '120%',
    width: '40%',
    borderRadius: 95,
    alignItems: 'center',
    left: '38%',
    top: '15%'
     
  },
  ContImg2: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    position: 'relative'

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
  }

})