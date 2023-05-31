import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Alert, SafeAreaView, ScrollView } from 'react-native';
import React, { useState } from 'react';
import fb from './firebaseConfig';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Icon } from "@rneui/themed";


const database = getFirestore(fb);

const LogoImage = require('../assets/Logo.png');

const RegisScreen = ({ navigation }) => {

    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');
    let [email, setEmail] = useState('');
    let [name, setName] = useState('');
    let [password2, setPassword2] = useState('');

    const RegistrarUsuario = async () => {
        if (!username) {
            alert('Proporcione el nombre de usuario');
            return;
        }
        if (!password) {
            alert('Proporcione su contraseña');
            return;
        }
        if (!password2) {
            alert('Confirme su contraseña');
            return;
        }
        if (!name) {
            alert('Proporcione su nombre');
            return;
        }
        if (!email) {
            alert('Proporcione su correo electronico');
            return;
        }
        if (password != password2) {
            alert('Las contraseñas no coinciden');
            return;
        }
        if (password.length < 6) {
            alert('La contraseña debe de tener un minimo de 6 caracteres');
            return;
        }

        try {
            const docRef = await addDoc(collection(database, "users"), {
                user: username,
                password: password,
                name: name,
                mail: email
            });

            const auth = getAuth(fb)
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                })


            Alert.alert(
                'Usuario registrado correctamente', '',
                [{ text: 'Aceptar', onPress: () => { navigation.goBack() } }]

            );
        } catch (error) {
            alert('Error al registrar al usuario')
        }
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
          <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.header}>
              <Image
                style={styles.image}
                source={require("../assets/Img_Reg.png")}
              />
              <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Registro de usuario</Text>
              </View>
            </View>
            <View style={styles.content}>

                <Text style={styles.title}>Todo mundo debe ser reconocido. En especial cuando se trata de ayudar.</Text>
              
              <Text style={styles.subtitle}>Nombre</Text>
              <View style={styles.inputContainer}>
                            
                <TextInput
                  placeholder='Nombre(s) y Apellido(s)'
                  style={styles.textInput}
                  onChangeText={setName}
                  keyboardType='email-address'
                  textAlign= 'center'
                />
              </View>
              <Text style={styles.subtitle}>Usuario</Text>
              <View style={styles.inputContainer}>
                
                <TextInput
                  placeholder='Nombre de usuario'
                  style={styles.textInput}
                  onChangeText={setUsername}
                  keyboardType='email-address'
                  textAlign= 'center'
                />
              </View>
              <Text style={styles.subtitle}>Correo electrónico</Text>
              <View style={styles.inputContainer}>
               
                <TextInput
                  placeholder='usuario@gmail.com'
                  style={styles.textInput}
                  onChangeText={setEmail}
                  keyboardType='email-address'
                  textAlign= 'center'
                />
              </View>
              <Text style={styles.subtitle}>Contraseña</Text>
              <View style={styles.inputContainer}>
                
                <TextInput
                  placeholder='Contraseña'
                  style={styles.textInput}
                  onChangeText={setPassword}
                  secureTextEntry={true}
                  textAlign= 'center'
                />
              </View>
              <Text style={styles.subtitle}>Confirma tu contraseña</Text>
              <View style={styles.inputContainer}>
                
                <TextInput
                  placeholder='Confirmar contraseña'
                  style={styles.textInput}
                  onChangeText={setPassword2}
                  secureTextEntry={true}
                  textAlign= 'center'
                />
              </View>
              <View style={styles.BtnReg}>
              <TouchableOpacity style={styles.button} onPress={RegistrarUsuario}>
                <Text style={styles.buttonText}>Registrarse</Text>
              </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
          <Icon
            containerStyle={styles.backButtonContainer}
            type="material-community"
            name="arrow-left"
            reverse
            onPress={() => navigation.navigate('Login')}
          />
          <View style={styles.ContImg}>
          <Image
                style={styles.image2}
                source={require("../assets/dcd.png")}
              />
         </View>
        </ScrollView> 
      );
      
        
}

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'center',
      backgroundColor: '#E1F8D7',
    },
    safeAreaView: {
      flex: 1,
      justifyContent: 'center',
    },
    header: {
      alignItems: 'flex-end',
    },
    image: {
      width: 500,
      height: 280,
      flex: 1,
    },
    image2: {
      width: 350,
      height: 150,
      alignItems: 'flex-start'
      
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
      fontSize: 20,
      marginLeft: '10%',
    },
    content: {
      marginLeft: '10%',
      marginRight: '10%',
    },
    title: {
      fontSize: 20,
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
    inputContainer: {
      flexDirection: 'row',
      paddingBottom: 1,
      marginBottom: 25,
      borderBottomWidth: 2,
      borderColor: '#17202A',
      alignItems: 'center',
      height: 40,
      borderBottomColor: '#606E4C',
      textAlign: 'center'
    },
    icon: {
      marginRight: 15,
      alignSelf: 'center',
    },
    textInput: {
      flex: 1,
      paddingVertical: 0,
      paddingStart: 5,
    },
    button: {
      backgroundColor: '#3B1F2B',
      width: '70%',
      height: '22%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 15,
      marginTop: '10%'

    },
    buttonText: {
      textAlign: 'center',
      fontWeight: '700',
      fontSize: 20,
      color: '#fff',
    },
    backButtonContainer: {
      position: 'absolute',
      right: '0%',
      top: '3%',
    },
    BtnReg:{
      alignItems: 'center',
    },
    ContImg:{
        
        alignItems: 'flex-end'
    }
  });
  

export default RegisScreen