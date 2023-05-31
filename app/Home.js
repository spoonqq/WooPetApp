import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Alert, SafeAreaView, ScrollView } from 'react-native';
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function Home() {
  return (
    <View>
      <View style={styles.Cont2}>
          <Ionicons style={styles.iconm} name="reorder-three-outline" />
        </View>
      <View style={styles.Cont1}>
        
        <Image
          style={styles.imagep}
          source={require("../assets/pinos.png")}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Cont1: {
    backgroundColor: '#BDCFB4',
    width: '100%',
    height: '40%',
    justifyContent: 'flex-end'
  },
  Cont2: {
    backgroundColor : '#BDCFB4'
  },
  imagep: {
    width: 80,
    height: 58,
    marginLeft: 10
  },
  iconm: {
    fontSize: 50,
    marginLeft: 10
  }

})