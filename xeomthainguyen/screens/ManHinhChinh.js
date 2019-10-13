import React,{Component} from 'react';
import{Image,View,Text,StyleSheet,FlatList} from 'react-native';
import Cactruonghoc from '../components/CacTruongHoc';
import axios from 'axios';

class LogoTitle extends React.Component {
  render() {
    return (
      <View style={{flexDirection:'row',alignItems:'space-around',width:220}}>
        <Text style={{flex:1,color:'#fff',alignItems:'center',fontWeight:'bold',fontSize:20}}>Xe ôm Thái Nguyên</Text>
        <Image
        source={require('../images/xeom.png')}
        style={{ width: 30, height: 30}}
      />
      </View>
      
    );
  }
}


export default class ManHinhChinh extends Component{
    static navigationOptions = {
        headerTitle: <LogoTitle />,
        headerStyle: {
          backgroundColor: '#01DF3A',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };
  constructor(props){
    super(props);
    this.state = {
        shools : []
    };
}
componentDidMount(){
  axios.get('/schools')
  .then(res=>{
    this.setState({
      shools:res.data
    })
  })
  .catch(error =>{
    console.error(error)
  })
}
  render(){
    const {navigation} = this.props;
    const {shools} = this.state;
    return(
     
          <FlatList data={shools}
          renderItem={({item}) =>(<Cactruonghoc category={item}
          onPress={()=>navigation.navigate('ManHinhPhu',{
            categoryName: item.name,
            categoryId:item.id,
          })}
          
          />)}
          keyExtractor={item => `${item.id}` }
          contentContainerStyle={{  paddingTop:16,paddingLeft:16,paddingRight:16}}
          />
       
      
    )
  }
}