import React,{Component} from 'react';
import axios from 'axios';
import {View,Text,FlatList,StyleSheet,TouchableOpacity,Linking} from 'react-native';
export default class InfosScreen extends Component{
    static navigationOptions = {
        title:'Thông tin ứng dụng'
    }


    constructor(props){
        super(props);
        this.state = {
            infos : []
        };
    }
    componentDidMount(){
      axios.get('/infos')
      .then(res=>{
        this.setState({
          infos:res.data
        })
      })
      .catch(error =>{
        console.error(error)
      })
    }

    render(){
        const {infos} = this.state;
        
        return(
            <View style={styles.container}>
              <View style={styles.title}><Text style={{fontSize:35,color:'#fff'}}>Xe Ôm Thái Nguyên</Text></View>
              
            <FlatList style={styles.flat}
              data={infos}
              renderItem={({item}) => (
                <View>
                 

                 
                  <View style={styles.container1}>
                  <Text style={styles.title1}>Email:{item.Email}</Text>
                 </View>


                

                 
                  <View style={styles.container1}>
                  <Text style={styles.title1}>Phone:{item.Phone}</Text>
                 </View>
      

  

        
                </View>
              )}
              keyExtractor={item => `${item.id}`}
            />
          </View>
        )
    }
}
const styles =StyleSheet.create({
  container:{
      flex:1,
      alignItems:'stretch',
      padding:6,
      borderRadius:4,
      backgroundColor:'#FFF',
      margin:10
  }, 

  title:{
     height:150,
      backgroundColor:'#31B404',
      alignItems:'center',
      color:'#fff',
      justifyContent:'center',
  },
  flat:{
   flex:1,
   backgroundColor:'#fff'
  },

  container1:{
    alignItems:'center',
    padding:16,
    borderRadius:4,
    backgroundColor:'#FFF',

    margin:5
},
title1:{
    textTransform:'uppercase',
    marginBottom: 8,
    fontWeight:'700'
}
})