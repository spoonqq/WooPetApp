import { Marker } from "react-native-maps";
import React, { useEffect, useState } from "react";
import fb from "./firebaseConfig";
import { getDocs, collection, addDoc, getFirestore } from "firebase/firestore";

const markerImg = require('../assets/dog.png');

const Markers = () => {

  const database = getFirestore(fb);

  const [lista, setLista] = useState([])

  useEffect(() => {
    const getLista = async () => {
      try {
        const query = await getDocs(collection(database, 'ReportesAdopcion'))
        const docs = []
        const coords = []
        query.forEach((doc) => {
          // docs.push({ ...doc.data(), longitude: doc.data().longitude })
          coords.push({longitude: doc.data().longitude, latitude: doc.data().latitude})
        })
        setDestination(coords)
        setLista(docs)
        console.log(docs)
      } catch (error) {
        console.log(error)
      }
    }
    getLista()
  }, [])


  const [destination, setDestination] = React.useState([]);


  return (
    destination.map((list) => {
      return(
        <Marker
        coordinate={list}
        image={markerImg}
      // onPress={}
      />
      )
    })
  )

}

export default Markers