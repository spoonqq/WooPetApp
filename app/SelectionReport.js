import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, SafeAreaView, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import fb from './firebaseConfig';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Busqueda from './Busqueda';

const SelectionReport = () => {
    
    const navigation = useNavigation();
    return (

        <ScrollView contentContainerStyle={styles.container}>
            <SafeAreaView style={styles.safeAreaView}>

                <View style={styles.header}>
                    <Image
                        style={styles.image}
                        source={require("../assets/imagen_selrep.png")}
                    />
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>Tipo de registro</Text>
                    </View>
                </View>

                <View style={styles.contentPadre}>
                    <Text style={styles.title}>Seleccione el tipo de reporte que desee crear</Text>
                </View>
              
                <View style={styles.contentHijo}>

                    <TouchableOpacity style={styles.ButtonReport}  onPress={() => navigation.navigate('Busqueda')}>
                        <Text style={styles.TextButtonReport}>Mascota extraviada</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.ButtonSubIcon}>
                        <Image
                        style={styles.ImageSubIcon}
                        source={require("../assets/down.png")}
                        />
                    </TouchableOpacity>

                </View>

                <View style={styles.contentHijo}>

                    <TouchableOpacity style={styles.ButtonReport}>
                        <Text style={styles.TextButtonReport}>Mascota en adopcion</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.ButtonSubIcon}>
                        <Image
                            style={styles.ImageSubIcon}
                            source={require("../assets/down.png")} 
                            />
                    </TouchableOpacity>

                </View>

                <View style={styles.contentHijo}>

                    <TouchableOpacity style={styles.ButtonReport}>
                        <Text style={styles.TextButtonReport}>Solcitar ayuda</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.ButtonSubIcon}>
                        <Image
                            style={styles.ImageSubIcon}
                            source={require("../assets/down.png")} 
                            />
                    </TouchableOpacity>

                </View>

                

            </SafeAreaView>

        </ScrollView>
    )
    
}

export default SelectionReport;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        backgroundColor: '#FEFFFD',
    },
    safeAreaView: {
        flex: 1,
    },
    header: {
        alignItems: 'flex-end',
    },
    image: {
        width: 500,
        height: 285,
        flex: 1,
    },
    headerContainer: {
        width: '80%',
        height: 65,
        backgroundColor: '#E1F8D7',
        position: 'absolute',
        marginLeft: '60%',
        marginTop: 220,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 30,
    },
    headerText: {
        fontSize: 32,
        fontWeight: 'bold',
        marginLeft: '10%',
    },

    contentPadre: {
        marginLeft: '10%',
        marginRight: '10%',
        marginBottom: 7,
     
    },
    contentHijo: {
        marginLeft: '20%',
        marginRight: '20%',
        marginBottom: '10%',
     
    },
    title: {
        fontSize: 22,
        paddingTop: 20,
        width: '100%',
        color: '#34434D',
        marginBottom: 34,
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 20,
        color: '#000000',
        fontWeight: 'bold',
        paddingBottom: 5,
    },

    ButtonReport: {
        backgroundColor: '#3B1F2B',
        padding: 10,
        borderTopEndRadius: 10,
        height:40,
    },

    TextButtonReport: {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 18,
        color: '#ffff'
    },

    ButtonSubIcon:{
        alignItems: 'center',
        backgroundColor: '#3B1F2B',
        height:30,


    },
    ImageSubIcon:{
        color: '#ffff',
        paddingTop:20,
        height: 20,
        width: 40,

    },
})