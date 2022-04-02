import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from './bottonTab';

const Root = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
          <Root.Navigator>
              <Root.Screen component={BottomTab} name="HomeTab" />
          </Root.Navigator>
        </NavigationContainer>
    );
};

export default Router;

