import React,{Component} from 'react';
import {Image,View, Text, TouchableOpacity, StyleSheet} from'react-native';
export default function ChuyenXeOmListItem(props){
    
    const {chuyen,onPress} = props;
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
            <Image style={styles.img} source={{uri:chuyen.images[0].url}} />
            <View style={styles.title}>
               <Text>{chuyen.name}</Text>
            </View>
        </View>
        </TouchableOpacity>
        
    )
}
const styles =StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        padding:6,
        borderRadius:4,
        backgroundColor:'#FFF',
        shadowColor:'#000',
        shadowOpacity:0.1,
        shadowRadius:10,
        shadowOffset:{width:0,height:0},
        margin:5
    }, 
    img:{
        flex:3,
        width:70,
        height:70,
        
    },
    title:{
        flex:6,
        width:50,
        height:50,
        color:'#000',
        alignItems:'center',
        justifyContent:'center',
        marginLeft:5
    },
})