import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';


const Campañas = ({ route }) => {

  const { nombre, pelo, raza, sexo, tamanio, list } = route.params;


  return (
    <View style={styles.cont1}>
      <View style={styles.cont2}>
        <Text>00000</Text>
      </View>
      <View style={styles.cont3}>
        <Text>SE BUSCA</Text>
      </View>
      <View style={styles.cont4}>
        <Text>{nombre}</Text>
        <Text>{pelo}</Text>
        <Text>{raza}</Text>
        <Text>{sexo}</Text>
        <Text>{tamanio}</Text>
      </View>
      <View style={styles.cont5}>
        <Text>00000</Text>
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
    height: "30%",
    alignItems: 'flex-start',
    marginLeft: "15%",
    marginRight:"15%",
    borderTopWidth: 1,
    borderBottomWidth: 1
  },
  cont5: {
    backgroundColor: "#fffff",
    height: "30%",
    alignItems: 'flex-start',
    marginLeft: "15%",
    marginRight:"15%",
    marginTop: "2%"
  }

});

