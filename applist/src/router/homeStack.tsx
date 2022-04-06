import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProductList from "../screens/ProductListX";
import ProductScreen from "../screens/ProductScreen";
import { StackActions } from "@react-navigation/native";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-gesture-handler";

const Stack = createStackNavigator();

const SearchComponent = () => {
    return (
        <SafeAreaView style={{ backgroundColor: '#1E90FF',  borderRadius: 15, width:'93%', left:13, }}>
            <TextInput style={{height: 18, padding:1, margin: 6, left:10}} placeholder="Buscar bebidas..."/>
        </SafeAreaView>
    );
};

const HomeStack = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
        <Stack.Navigator 
        screenOptions={{header:()=><SearchComponent />,
        }}>
            <Stack.Screen
            component={ProductList}
            name="ProductList"
            options={{title: 'Home'}} />

            <Stack.Screen
            component={ProductScreen}
            name="ProductScreen" />
        </Stack.Navigator>
        </SafeAreaView>
    )
}

export default HomeStack;