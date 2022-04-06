import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProductList from "../screens/ProductListX";
import ProductScreen from "../screens/ProductScreen";
import { StackActions } from "@react-navigation/native";

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen
            component={ProductList}
            name="ProductList"
            options={{title: 'Home'}} />

            <Stack.Screen
            component={ProductScreen}
            name="ProductScreen" />
        </Stack.Navigator>
    )
}

export default HomeStack;