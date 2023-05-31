import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, {useState} from 'react'
import MapView, { Marker } from 'react-native-maps'
import fb from './firebaseConfig';
import { collection, addDoc, getFirestore } from 'firebase/firestore';

const database = getFirestore(fb);

const Maptest = () => {

    const [origin, setOrigin] = React.useState({
        latitude: 29.089238,
        longitude: -110.971566,
    });

    const [direction, setDirection] = React.useState({
        latitude: 29.089238,
        longitude: -110.971566,
    });
    
    const RegistrarCoord = async () => {
        console.log(direction)
        try {
            const docRef = await addDoc(collection(database, "markers"), {
                latitude: direction.latitude,
                longitude: direction.longitude,
            });
            
            Alert.alert(
                'Coordenada guardada', '',
                [{ text: 'Aceptar'}]

            );
        } catch (error) {
            console.log(error)
            alert('Error al registrar al usuario')
        }
    }

    return (
        <View style={styles.container}>
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
            <TouchableOpacity onPress={RegistrarCoord}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Enviar</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        height: 40,
        backgroundColor: "#a4c474",
        justifyContent: "center",
        alignItems: "flex-end",
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: "#14C3E7",
        marginBottom: 0
    },
    buttonText: {
        color: "white",
        fontSize: 18,
    },
})

export default Maptest