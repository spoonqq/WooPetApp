import React, { useState } from 'react';
import { Icon } from "@rneui/themed";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import Markers from './Markers';


const Map = ({ navigation }) => {

    const pata1Image = require('../assets/Pata1.png');


    const [origin, setOrigin] = React.useState({
        latitude: 29.089238,
        longitude: -110.971566,
    });

    return (
        <View style={styles.Container}>
            <MapView
                style={StyleSheet.absoluteFillObject}
                customMapStyle={styles.mapStyle}
                initialRegion={{
                    latitude: origin.latitude,
                    longitude: origin.longitude,
                    latitudeDelta: 0.5,
                    longitudeDelta: 0.5
                }}>
                <Markers />
            </MapView>

            <View style={{ height: 750, alignContent: 'center', }}>
                
                <TouchableOpacity style={styles.MainButton}>
                    <Text style={styles.TextMain}>Publicar reporte</Text>
                </TouchableOpacity>
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    //ESTILOS DE LA PANTALLA PROPIA

    Container: {
        flex: 1,
    },

    MainButton: {
        position: 'absolute',
        bottom: 14,
        height: 50,
        width: 300,
        right: 60,
        backgroundColor: '#3B1F2B',
        padding: 10,
        borderRadius: 30,
        marginBottom: 10
        
    },

    TextMain: {
        textAlign: 'center', fontWeight: '500', fontSize: 20, color: '#ffff', 
    },

    MainImage:{
        color: '#ffff',
        bottom:-14,
        height: 30,
        width: 40,
    },

    //ESTILOS EL MAPA ASIGNADOS POR LA API
    map: {
        position: 'absolute',
        width: '100%',
        height: '100%'
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

export default Map;