import React, { useState } from 'react';
import { Icon } from "@rneui/themed";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image,TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import Markers from './Markers';

const Map = ({ navigation }) => {

    const pata1Image = require('../assets/Pata1.png');

    const [modalVisible, setModalVisible] = useState(false);

    const [origin, setOrigin] = React.useState({
        latitude: 29.089238,
        longitude: -110.971566,
    });

    return (
        <View style={StyleSheet.absoluteFillObject}>
            <MapView
                style={StyleSheet.absoluteFillObject}
                customMapStyle={styles.mapStyle}
                initialRegion={{
                    latitude: origin.latitude,
                    longitude: origin.longitude,
                    latitudeDelta: 0.15,
                    longitudeDelta: 0.10
                }}
            >
                <Markers />
            </MapView>
            <View syle={styles.viewButton}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                ><View style={styles.centeredView}>
                        <View style={styles.modalView}>
                        <Icon style={styles.cruz}
                            name="close"
                            onPress={() => setModalVisible(!modalVisible)}
                        />
                            <Text style={styles.modalText}>Nuevo anuncioo</Text>
                            <Image style={styles.pataImage} source={pata1Image} />

                            <View style={styles.cont}>
                                
                                <TouchableOpacity
                                    style={[styles.button, styles.buttonReporte]}
                                    onPress={() => navigation.navigate('Nuevo Reporte')}
                                >
                                    <Text style={styles.textStyle}>Animal en adopción</Text>
                                </TouchableOpacity>
                                <Pressable
                                    style={[styles.button, styles.buttonReporte]}

                                >
                                    <Text style={styles.textStyle}>Animal extraviado</Text>
                                </Pressable>
                                <Pressable
                                    style={[styles.button, styles.buttonReporte]}

                                >
                                    <Text style={styles.textStyle}>Animal en peligro</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </Modal>
                <Icon
                    type="material-community"
                    name="plus"
                    color="#a4c474"
                    reverse
                    containerStyle={styles.btnContainer}
                    onPress={() => setModalVisible(true)}
                />

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    viewButton: {
        flex: 1,

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
    viewButton: {
        flex: 1,

    },
    btnContainer: {
        position: 'absolute',
        shadowColor: "black",
        shadowOffset: { width: 2, height: 2 },
        right: 10,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "#0AA3DFE5",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height: 400,
        width: 400
    },
    button: {
        borderRadius: 5,
        padding: 10,
        elevation: 2,
        width: 300,
        height: 50,
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#78549A",
    },
    buttonReporte: {
        backgroundColor: "#A6C671",
        margin: 10

    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 22
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        color: "white",
        fontSize: 30
    },
    cont: {
        marginTop: 10
    },
    cruz:{
        marginLeft:310
    }
});

export default Map;