import React,{Component} from 'react';
import{Image,View,Text,StyleSheet,TouchableOpacity,} from 'react-native';

export default function CacTruongHoc(props) {
    const {category,onPress} =props;
  
    return(
        <TouchableOpacity activeOpacity={0.5} onPress={onPress} >
             <View style={styles.container}>
             <Text style={styles.title}>{category.name}</Text>
             <Image source={{uri:category.images[0].url}} style={styles.categoryImage} />
      </View>
        </TouchableOpacity>
    
    );
  }

const styles=StyleSheet.create({
    categoryImage : {
        width:64,
        height:64,
        alignItems:'flex-end'
        
    },
    container:{
        alignItems:'center',
        flexDirection:'row',
        padding:16,
        borderRadius:4,
        borderWidth:1,
        backgroundColor:'#FFF',
        marginBottom:16
    },
    title:{
        width:250,
        textTransform:'uppercase',
        marginBottom: 8,
        fontWeight:'700',
        alignItems:'flex-start'
    }

  });