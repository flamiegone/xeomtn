import React,{Component} from 'react';
import{View,StyleSheet,FlatList,Linking} from 'react-native';
import Cacxeom from '../components/CacXeOm';
import axios from 'axios';


export default class ManHinhPhu extends Component{

  static navigationOptions = ({navigation}) =>{
    return {
       title:navigation.getParam('categoryName'),
    };
};


  constructor(props){
    super(props);
    this.state={
      cacxeom: []
    };
  }
  componentDidMount(){
    const {navigation} = this.props;
    const id = navigation.getParam('categoryId');
    axios.get(`/cacxeom?category=${id}`)
    .then(res=>{
      this.setState({
        cacxeom:res.data
      })
    })
    .catch(error =>{
      console.error(error)
    })
  }

    
  
  render(){
    const {cacxeom}=this.state;
    const {navigation} = this.props;
    return(
     <FlatList
     style={styles.container}
     data={cacxeom}
     numColumns={2}
     renderItem={({item})=>
     <View style={styles.wrapper}>
       <Cacxeom xeom={item}
       />
     </View>
     }
     keyExtractor={(item)=>`${item.id}`}
    //  contentContainerStyle={styles.container}
     />
    )
}}
const styles=StyleSheet.create({
  container : {
   flex :1,
   paddingHorizontal:8,
   paddingTop:16
   
  },
  wrapper:{
    flex:1,
    paddingHorizontal:8
  }
})