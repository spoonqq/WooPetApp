import { Marker } from "react-native-maps";
import React, { useEffect, useState } from "react";
import fb from "./firebaseConfig";
import { getDocs, collection, addDoc, getFirestore } from "firebase/firestore";
import Campañas from "./Campañas";
import { useNavigation } from '@react-navigation/native';

const markerImg = require('../assets/dog.png');

const Markers = () => {

  const navigation = useNavigation();
  const database = getFirestore(fb);

  const [lista, setLista] = useState([])
  const [dogInfo, setDogInfo] = useState([]);

  useEffect(() => {
    const getLista = async () => {
      try {
        const query = await getDocs(collection(database, 'ReportesAdopcion'))
        const docs = []
        const dogInf = []
        query.forEach((doc) => {
          // docs.push({ ...doc.data(), longitude: doc.data().longitude })
          dogInf.push({
            nombre: doc.data().nombre,
            pelo: doc.data().pelo,
            raza: doc.data().raza,
            sexo: doc.data().sexo,
            tamanio: doc.data().tamaño,
            // url: doc.data().url,
            longitude: doc.data().longitude,
            latitude: doc.data().latitude
          })
        })
        setDogInfo(dogInf)
        setLista(docs)
      } catch (error) {
        console.log(error)
      }
    }
    getLista()
  }, [])

  return (
    dogInfo.map(({ nombre, pelo, raza, sexo, tamanio, url, ...list }) => {
      return (
        <Marker
          coordinate={list}
          image={markerImg}
          onPress={() => {
            navigation.navigate('Campañas', {
              nombre: nombre,
              pelo: pelo,
              raza: raza,
              sexo: sexo,
              tamanio: tamanio,
              // url: url,
              list: list
            })
          }}
        />
      )
    })
  )

}

export default Markers