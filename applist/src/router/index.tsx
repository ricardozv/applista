import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from './bottonTab';

const Root = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer >
          <Root.Navigator screenOptions={{headerShown:false}}>
              <Root.Screen component={BottomTab} name="Bem vindo ao Drexy" />
          </Root.Navigator>
        </NavigationContainer>
    );
};

export default Router;

