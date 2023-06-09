import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, SafeAreaView, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import fb from './firebaseConfig';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useFonts } from 'expo-font';

const LogoImage = require('../assets/Logo.png');

const LoginScreen = ({ navigation }) => {
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');

    const LoginUsuario = () => {
        console.log(username)
        console.log(password)

        const auth = getAuth(fb);
        signInWithEmailAndPassword(auth, username, password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigation.navigate('Map')
                console.log('logeado')
            })
            .catch((error) => {
                alert('Error al iniciar sesion');
                console.log(error)
            })

    }
    
    const [fontsLoaded] = useFonts({
        PassionOne: require ("../assets/fonts/PassionOne-Regular.ttf"),
        Comfortaa: require ("../assets/fonts/Comfortaa-Regular.ttf"),
        SupermercadoOne: require ("../assets/fonts/SupermercadoOne-Regular.ttf"),
        Quicksand: require ("../assets/fonts/Quicksand-Regular.ttf"),
        DaysOne: require ("../assets/fonts/DaysOne-Regular.ttf"),
        OpenSansHebrewCondensed: require ("../assets/fonts/OpenSansHebrewCondensed-Bold.ttf")
      })

    return (
        <ScrollView>
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', backgroundColor: '#FFFF' }}>
                <View style={{ paddingHorizontal: 25 }}>

                    <StatusBar style="auto" />

                    <View style={{ alignItems: 'center' }}>
                        <Image
                            style={{ width: 480, height: 440, borderRadius: 0, marginTop: -10,marginLeft:-1 }}
                            source={require("../assets/Imagen_login.png")}
                        />
                    </View>

                    <Text style={styles.FontTitulo
                    }>Bienvenido a WooPet</Text>

                    <Text style={styles.FontSubtitulo}>Usuario</Text>
                    <View style={styles.viewInput}>
                    <Image
                            style={styles.imagenTI}
                            source={require("../assets/user1.png")} 
                            />
                        <TextInput
                            placeholder='Usuario@gmail.com'
                            style={styles.TextInput}
                            onChangeText={setUsername}
                            keyboardType='email-addres'
                        />
                    </View>


                    <Text style={styles.FontSubtitulo}>Contraseña</Text>
                    <View style={styles.viewInput}>
                    <Image
                            style={styles.imagenTI}
                            source={require("../assets/password.png")} 
                            />
                        <TextInput
                            placeholder='Contraseña'
                            style={styles.TextInput}
                            onChangeText={setPassword}
                            secureTextEntry={true}
                        />

                        <TouchableOpacity onPress={() => { }}>
                            <Text style={{ color: '#3B1F2B', fontWeight: '800', marginRight: 10 }}>¿La olvidaste?</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={LoginUsuario} style={{ backgroundColor: '#3B1F2B', padding: 20, borderRadius: 18, marginBottom: 30 }}>
                        <Text style={{ textAlign: 'center', fontWeight: '700', fontSize: 20, color: '#ffff' }}>Iniciar sesión</Text>
                    </TouchableOpacity>

                    <Text style={{ textAlign: 'center', color: '#666', fontWeight: '700', fontSize: 20, marginBottom: 30 }}>O inicia sesión con ...</Text>

                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => { }} style={{ backgroundColor: '#fff', padding: 10, borderRadius: 18, marginBottom: 30 }}>
                            <Image
                                style={{ width: 36, height: 39, borderRadius: 12 }}
                                source={require("../assets/google.png")}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', paddingBottom: 5, alignItems: 'center', justifyContent: 'center', marginBottom: 15 }}>

                        <Text style={{ color: '#000000', fontWeight: '800', paddingRight: 5 }}>No tengo una cuenta.</Text>

                        <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
                            <Text style={{ color: 'green', fontWeight: '800', }}>Registrate.</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FDFFFB',
        alignItems: 'center',
        justifyContent: 'center',
    },
    FontTitulo: {
        fontSize: 36,
        paddingTop: 20,    
        color: '#000000',
        marginBottom: 34,
        //fontFamily: 'OpenSansHebrewCondensed'
        
    },
    FontSubtitulo: {
        fontSize: 20,
        color: '#000000',
        fontWeight: 'bold',
        paddingBottom: 5,
        
    },
    TextInput: {
        flex: 1,
        paddingVertical: 0,
        paddingStart: 5,
        fontSize:18,
        marginLeft:20,
    },
    viewInput: {
        flexDirection: 'row',
        paddingBottom: 1, 
        marginBottom: 25, 
        borderColor: '#000000',
        borderRadius: 10,
        alignItems: 'center',
        height: 40,
        backgroundColor: '#D9D9D9'
    },

    imagenTI:{
        height:25,
        width:25,
        borderRadius:10,
        padding:5,
        marginLeft:10,
    },

    imagenTI:{
        height:25,
        width:25,
        padding:5,
        marginLeft:10,
    },
})

export default LoginScreen