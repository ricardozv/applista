import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductList from '../screens/ProductListX';
import Home from '../screens/Home';
import Map from '../screens/Map';
import ProductScreen from '../screens/ProductScreen';
import Profile from '../screens/Profile';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import HomeStack from './homeStack';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
          <Tab.Navigator
          screenOptions= {{
            activeTintColor:'#1E90FF',
          }}>
              <Tab.Screen 
              component={Home} 
              name="Home"
              options={{
              tabBarIcon:({color}) => (
                <SimpleLineIcons 
                name="home" 
                size={26} 
                color={color}/>)}}/>

              <Tab.Screen 
              component={HomeStack} 
              name="Produtos"
              options={{
              tabBarIcon:({color}) => (
                <SimpleLineIcons 
                name="list" 
                size={26} 
                color={color}/>)}} />

              <Tab.Screen 
              component={Map} 
              name="Localizar"
              options={{
              tabBarIcon:({color}) => (
                <SimpleLineIcons 
                name="map" 
                size={26} 
                color={color}/>)}} />

              <Tab.Screen 
              component={ProductScreen} 
              name="Compras"
              options={{
              tabBarIcon:({color}) => (
                <AntDesign 
                name="shoppingcart" 
                size={26} 
                color={color} />)}} />
              
              <Tab.Screen 
              component={Profile} 
              name="Perfil"
              options={{
              tabBarIcon:({color}) => (
                <AntDesign 
                name="user" 
                size={26} 
                color={color} />)}} />
                
          </Tab.Navigator>
    );
};



export default BottomTab;

