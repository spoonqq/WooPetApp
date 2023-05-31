import { View, Text, StyleSheet,ImageBackground,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomDrawer = (props) => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        >
        <ImageBackground
          
          style={{padding: 20, backgroundColor: '#3B1F2B', height: '23%'}}>
          
          <View style={{flexDirection: 'row', height: '0%'}}>
            
          <Image
            source={require('../assets/perrogracioso2.png')}
            style={{height: 110, width: 153, borderRadius: 0, marginTop: '28%', position: 'absolute'}}
          />
            
          </View>
        </ImageBackground>
        <View style={{backgroundColor: 'white', marginTop: '10%', height: 700 }}>
          <DrawerItemList {...props} />
          
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }}>
              Cerrar sesión
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
 Lista:{
    flex:1,
    paddingTop:20
 }

});

export default CustomDrawer