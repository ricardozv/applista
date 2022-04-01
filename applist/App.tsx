import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import ProductList from './src/screens/ProductList';
import ProductScreen from './src/screens/ProductScreen';
import Home from './src/screens/Home';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}> 
      <StatusBar backgroundColor="#1C1C1D"/>
       {/*  <ProductList /> */}
       <Home />
      {/*<ProductScreen />*/}
    </SafeAreaView>
  );
};


export default App;
