import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

const dog2 = require('../assets/dog2.png');
const Pata2Image = require('../assets/Pata2.png');

const Donaciones = () => {
    return (
        <View style={styles.header}>
            <View style={styles.imgcont}>
            <Image style={styles.LogoImage} source={dog2} />               
            </View>
            <View style ={styles.Text}>
                <Text style ={styles.texto}>
                En Pata de perro, agradecemos te tomes la molestia de ayudarnos.
                </Text>
                <Text style ={{marginTop:10}}>
                ¡Cualquier cantidad es de mucha ayuda!
                </Text>
            </View>
            <View style= {styles.contenedor}>
                    <TouchableOpacity style= {styles.boton}>
                    <Image style={styles.Pata2Image} source={Pata2Image} />
                        <View>
                            <Text style={styles.textobot}>
                                $100
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style= {styles.boton}>
                    <Image style={styles.Pata2Image} source={Pata2Image} />
                        <View>
                            <Text style={styles.textobot}>
                                $15
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style= {styles.boton}>
                    <Image style={styles.Pata2Image} source={Pata2Image} />
                        <View>
                            <Text style={styles.textobot}>
                                $20
                            </Text>
                        </View>
                    </TouchableOpacity>
            </View>
            <View style= {styles.contenedor}>
                    <TouchableOpacity style= {styles.boton}>
                    <Image style={styles.Pata2Image} source={Pata2Image} />
                        <View>
                            <Text style={styles.textobot}>
                                $25
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style= {styles.boton}>
                    <Image style={styles.Pata2Image} source={Pata2Image} />
                        <View>
                            <Text style={styles.textobot}>
                                $30
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style= {styles.boton}>
                    <Image style={styles.Pata2Image} source={Pata2Image} />
                        <View>
                            <Text style={styles.textobot}>
                                $35
                            </Text>
                        </View>
                    </TouchableOpacity>
            </View>
            <View style= {styles.proce}>
                <TouchableOpacity style = {styles.donacion}>
                    <Text style = {styles.Textodon}>
                        Proceder Donacion 
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
    },
    imgcont: {
        backgroundColor: '#A6C671',
        width: 200,
        height: 200,
        borderRadius:100,
        alignItems: 'center',
        justifyContent:'center'
        
    },
    Text:{
        marginTop:'5%',
        alignItems: 'center'
    },
    texto:{
        fontSize:30,
        fontWeight: 'bold',
        justifyContent:'center',
        alignItems: 'center'
    },
    contenedor:{
        flexDirection: "row",
        justifyContent:'center',
        alignItems: 'center'
    },
    boton:{
        margin: 15,
        backgroundColor: '#A6C671',
        width: '80%',
        borderRadius: 10,
        alignItems: 'center',
        borderWidth: 3,
        borderColor: '#000000',
        elevation:7,
        flexDirection: "row"
    },
    textobot: {
        fontSize:30,
        justifyContent:'center',
        alignItems: 'center'
    },
    donacion:{
        backgroundColor : '#A6C671',
        borderRadius: 10,
        width: 210,
        height: 50,
        justifyContent:'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: '#78549A',
        elevation:3,
        shadowOpacity:'1',
        
    },
    proce:{       
        justifyContent:'center',
        alignItems: 'center',
        marginTop: '10%'
    },
    Textodon:{
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',  
    },
    Pata2Image:{
        marginLeft: 10,       
    }
});

export default Donaciones