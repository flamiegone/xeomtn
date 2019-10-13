import React,{Component} from'react';
import{Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ManHinhPhu from './screens/ManHinhPhu';
import ManHinhChinh from './screens/ManHinhChinh';
import Chuyenxeom from './screens/Chuyenxeom';
import Thongtinapp from './screens/Thongtinapp';
import Chitietbaiviet from './screens/Chitietbaiviet';
const ManHinhChinhStack = createStackNavigator({
  ManHinhChinh,
  ManHinhPhu
});
ManHinhChinhStack.navigationOptions ={
 tabBarLabel:'Trang chủ',
 tabBarIcon: ({ focused }) => (
  focused ? <Image
      source={require('./images/motorbike_active.png')}
      style={{width:25, height: 25}}
    />
    :
    <Image
      source={require('./images/motorbike.png')}
      style={{width:25, height: 25}}
    />
),
 

};
const ChuyenxeomStack = createStackNavigator({
  Chuyenxeom,
  Chitietbaiviet,
});
ChuyenxeomStack.navigationOptions={
  tabBarLabel:'Chuyện xe ôm',
  tabBarIcon: ({ focused }) => (
    focused ? <Image
        source={require('./images/cxo_active.png')}
        style={{width:25, height: 25}}
      />
      :
      <Image
        source={require('./images/cxo.png')}
        style={{width:25, height: 25}}
      />
  ),
}
const InfoStack = createStackNavigator({
  Thongtinapp
});
InfoStack.navigationOptions={
  tabBarLabel:'Thông tin',
  tabBarIcon: ({ focused}) => (
    focused ? <Image
        source={require('./images/danger_active.png')}
        style={{width:25, height: 25}}
      />
      :
      <Image
        source={require('./images/danger.png')}
        style={{width:25, height: 25}}
      />
  ),
}
const AppNavigator = createBottomTabNavigator({
  ManHinhChinhStack,
  ChuyenxeomStack,
  InfoStack,
});
export default AppNavigator;