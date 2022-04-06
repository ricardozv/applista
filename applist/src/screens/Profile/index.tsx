import React from "react";
import { View, Pressable, Text } from "react-native";
import { Auth } from "aws-amplify";


const Profile = () => {

  const logout = () => {
    Auth.signOut();
  } 

  return (
    <View style={{
    height: '100%', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#fff'
    }}>
      <Pressable
        onPress={logout}
        style={{
        width: '100%',
        height: 40,
        backgroundColor: '#1E90FF',
        justifyContent: 'center', alignItems: 'center'
      }}>
        <Text>Log out</Text>
      </Pressable>
    </View>
  );
};

export default Profile;