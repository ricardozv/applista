import React from 'react';
import 'react-native-gesture-handler';
import { View, StatusBar, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Router from './src/router';

import { Amplify, Auth } from 'aws-amplify';
import config from './src/aws-exports'
import { withAuthenticator } from 'aws-amplify-react-native';
Amplify.configure(config);
 



const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex:1,
  };

  return (
    <View style={backgroundStyle}> 
      <StatusBar  hidden={false} backgroundColor="#fff" translucent = {true}/>
       < Router />
    </View>
  );
};


export default withAuthenticator(App);
