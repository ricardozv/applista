import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductList from '../screens/ProductList';
import Home from '../screens/Home';
import ProductScreen from '../screens/ProductScreen';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
          <Tab.Navigator>
              <Tab.Screen component={Home} name="Home" />
              <Tab.Screen component={Profile} name="Perfil" />
              <Tab.Screen component={ProductList} name="Lista de Produtos" />
              <Tab.Screen component={ProductScreen} name="Produto" />
          </Tab.Navigator>
    );
};

export default BottomTab;

