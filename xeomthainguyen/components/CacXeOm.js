import React from 'react';
import{Image,StyleSheet,Text,Touchable,View,Linking} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function CacXeOm(props){
    const {xeom} =props;
    return (
        <View style={styles.shadow}>
           <View style={styles.container}>
           <Image style={styles.img} source={{uri:xeom.images[0].url}} />
              <View style={styles.info}>
                 <Text style={styles.name}>{xeom.name}</Text>
                 <View style={styles.priceRow}>
                     <Text style={styles.price}>{xeom.price}</Text>
                 </View>
                 <Text style={styles.price}>SDT:{xeom.phone}</Text>
              </View>
             
           </View>
        </View>
    )
}
const styles =StyleSheet.create({
    carttext:{
        textTransform:'uppercase',
        fontSize:16,
        color:'#2f95dc'
    },
    shadow:{
        shadowColor:'#000',
        shadowOpacity:0.1,
        shadowRadius:10,
        shadowOffset:{width:0,height:0}
    },
    container:{
        marginBottom:20,
        borderRadius:4,
        backgroundColor:'#FFF',
        overflow:'hidden'
    },
    info:{
        padding:8
    },
    img:{
        height:150,
        borderTopLeftRadius:4,
        borderBottomLeftRadius:4,
    },
    name:{
        fontSize:16,
        marginBottom:8
    },
    priceRow:{
        flexDirection:'row',
        alignItems:'center'
    },
    price:{
        fontSize:16,
        color:'#01DF3A',
        flex:1
    }
})