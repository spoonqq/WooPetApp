import { StyleSheet, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Map from './Map';
import LoginScreen from './LoginScreen';
import RegisScreen from './RegisScreen';
import ReporteA from './ReporteA';
import Busqueda from './Busqueda';
import Adopciones from './Adopciones';
import Home from './Home';
import Campañas from './Campañas';
import Historial from './Historial';
import Configuracion from './Configuracion';
import Donaciones from './Donaciones';
import CustomDrawer from './CustomDrawer';
import SelectionReport from './SelectionReport';
import MapClean from './MapClean';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

const HomeRoute = () => {
    return (
        
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} initialRouteName='Map' screenOptions={{
          
          drawerActiveBackgroundColor: '#deb887',
          drawerActiveTintColor: '#fff',
          drawerInactiveTintColor: '#333',
          drawerLabelStyle: {
            marginLeft: -25,
            fontFamily: 'Roboto-Medium',
            fontSize: 15,
          },
        }}>
          <Drawer.Screen name='Home' component={Home} options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={25} color={color} />
          ),
        }}/>
            <Drawer.Screen name='Map' component={Map} options={{
          drawerIcon: ({color}) => (
            <Ionicons name="map-outline" size={25} color={color} />
          ),
        }}/>
            <Drawer.Screen name='Nuevo Reporte' component={SelectionReport} options={{
          drawerIcon: ({color}) => (
            <Ionicons name="receipt-outline" size={25} color={color} />
          ),
        }}/>
            <Drawer.Screen name='Busqueda' component={Busqueda} options={{
          drawerIcon: ({color}) => (
            <Ionicons name="search-circle-outline" size={25} color={color} />
          ),
          
        }}/>
        <Drawer.Screen name='Adopciones' component={Adopciones} options={{
          drawerIcon: ({color}) => (
            <Ionicons name="heart-outline" size={25} color={color} />
          ),
          
        }}/>
        
        <Drawer.Screen name='Campañas' component={Campañas} options={{
          drawerIcon: ({color}) => (
            <Ionicons name="paw-outline" size={25} color={color} />
          ),
          headerShown: false
        }}/>
        
        <Drawer.Screen name='Historial' component={Historial} options={{
          drawerIcon: ({color}) => (
            <Ionicons name="reader-outline" size={25} color={color} />
          ),
          
        }}/>
        <Drawer.Screen name='Donaciones' component={Donaciones} options={{
          drawerIcon: ({color}) => (
            <Ionicons name="card-outline" size={25} color={color} />
          ),
          
        }}/>
        <Drawer.Screen name='Configuracion' component={Configuracion} options={{
          drawerIcon: ({color}) => (
            <Ionicons name="options-outline" size={25} color={color} />
          ),
          
        }}/>

        </Drawer.Navigator>
        
    );
}

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen options={{ headerShown: false }} name='Login' component={LoginScreen} />
                <Stack.Screen options={{ headerShown: false }} name='Registro' component={RegisScreen} />
                <Stack.Screen options={{ headerShown: false }} name='Map' component={HomeRoute} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btStyle: {
        marginTop: 5,
        paddingTop: 20,
        borderRadius: 1000,
    },
});

export default App;