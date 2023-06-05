import { Platform, View, Text, SafeAreaView, TextInput, Image, StatusBar, StyleSheet, TouchableOpacity, ImageBackground, ScrollView, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import MapView, { Marker } from 'react-native-maps';
import fb from './firebaseConfig';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import storage, { getStorage, ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import * as ImagePicker from 'expo-image-picker';

const database = getFirestore(fb);

const ReporteA = ({ navigation }) => {


    const defaultImage = require("../assets/upload.png")
    const [url, setUrl] = React.useState('');
    const [uploading, setUploading] = useState(false);
    const [image, setImage] = React.useState(null);
    const [nombre, setNombre] = React.useState('');
    const [tamaño, setTamaño] = React.useState('');
    const [pelo, setPelo] = React.useState('');
    const [raza, setRaza] = React.useState('');
    const [sexo, setSexo] = React.useState('');

    const [origin, setOrigin] = React.useState({
        latitude: 29.089238,
        longitude: -110.971566,
    });

    const [direction, setDirection] = React.useState({
        latitude: 29.089238,
        longitude: -110.971566,
    });

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const uploadFiles = async () => {
        // Create the file metadata
        /** @type {any} */
        const metadata = {
            contentType: 'image/jpeg'
        };

        const store = getStorage(fb);
        const storageRef = ref(store, `images/` + Date.now());
        const uploadTask = uploadBytesResumable(storageRef, image, metadata);
        

        uploadTask.on('state_changed',
            (snapshot) => {
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },

            (error) => {

                switch (error.code) {
                    case 'storage/unauthorized':

                        break;
                    case 'storage/canceled':
                        break;

                    case 'storage/unknown':
                        break;
                }
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setUrl(downloadURL);
                });
            }
        );

    }


    const RegistrarCoord = async () => {
        console.log(direction)
        await uploadFiles();
        try {
            const docRef = await addDoc(collection(database, "ReportesAdopcion"), {
                latitude: direction.latitude,
                longitude: direction.longitude,
                nombre: nombre,
                tamaño: tamaño,
                pelo: pelo,
                raza: raza,
                sexo: sexo,
                url: url
            });

            Alert.alert(
                'Registro de reporte realizado', '',

                [{ text: 'Aceptar', onPress: () => { navigation.goBack() } }]

            );
        } catch (error) {
            console.log(error)
            alert('Error al crear el registro')
        }
    }

    return (
        <SafeAreaView style={styles.maincontainer}>

            <ImageBackground source={require("../assets/fondorep.png")} resizeMode='cover'
                style={{ flex: 1, justifyContent: 'center' }}
            >

                <View
                    keyboardShouldPersistTaps='always'
                    style={{ paddingHorizontal: 15, backgroundColor: '#fff', marginLeft: 30, marginRight: 30, flex: 1, marginTop: 100, borderTopLeftRadius: 25, borderTopRightRadius: 25 }}>


                    <StatusBar style="light-content" />
                    <ScrollView>

                        <TouchableOpacity
                            onPress={pickImage}
                            style={{ alignItems: 'center' }}
                        >
                            {image !== null
                                ? <Image source={{ uri: image }} style={{ width: 200, height: 200, borderRadius: 150 }} />
                                : <Image source={require("../assets/upload.png")} style={{ width: 200, height: 200, borderRadius: 150 }} />}
                        </TouchableOpacity>

                        <Text style={{ color: '#666', fontWeight: '700', fontSize: 20, marginBottom: 10, marginTop: 5 }}>Reporte de adopción</Text>
                        <Text style={styles.FontCampo}>Nombre</Text>
                        <TextInput placeholder='Nombre de la mascota' style={styles.FontTextIn} onChangeText={setNombre} />

                        <Text style={styles.FontCampo}>Tamaño de perro</Text>
                        <TextInput placeholder='Tamaño de la raza de tu perro' style={styles.FontTextIn} onChangeText={setTamaño} />

                        <Text style={styles.FontCampo}>Tipo de pelo</Text>
                        <TextInput placeholder='Describe el color de pelo de tu perro' style={styles.FontTextIn} onChangeText={setPelo} />

                        <Text style={styles.FontCampo}>Raza</Text>
                        <TextInput placeholder='Seleccione la raza del animal' style={styles.FontTextIn} onChangeText={setRaza} />

                        <Text style={styles.FontCampo}>Sexo de la mascota</Text>
                        <TextInput placeholder='Macho o Hembra' style={styles.FontTextIn} onChangeText={setSexo} />

                        <Text style={styles.FontCampo}>Ubicación de adopción</Text>
                        <View style={{ width: '70%', height: '15%', alignSelf: 'center' }}>
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


                        <TouchableOpacity onPress={RegistrarCoord} style={{ backgroundColor: '#34434D', padding: 20, borderRadius: 30, marginBottom: 230, marginTop: 60, alignSelf: 'center', width: '70%', height: 64 }}>
                            <Text style={{ textAlign: 'center', fontWeight: '700', fontSize: 20, color: '#fff' }}>Solicitar ayuda</Text>
                        </TouchableOpacity>
                    </ScrollView>



                </View>
            </ImageBackground>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#f1f1f1',
        //alignItems: 'center',
    },
    FontCampo: {
        fontSize: 20,
        color: '#34434D',
        fontWeight: 'bold',
        paddingBottom: 5,
        paddingTop: 16
    },
    FontTextIn: {
        paddingVertical: 0,
        paddingStart: 15,
        paddingBottom: 1,
        marginBottom: 10,
        borderWidth: 2,
        borderColor: '#17202A',
        borderRadius: 12,
        alignSelf: 'center',
        width: '80%',
        marginTop: 12,
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
});

export default ReporteA
