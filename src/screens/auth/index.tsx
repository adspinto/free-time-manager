
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TextInput
} from 'react-native';



const AuthScreen: React.FC<any> = (props) => {

  const submitAuth = () => props.navigation.navigate("Inicio")

  return (
    <SafeAreaView style={{ flex: 1,justifyContent: 'center', alignItems: "center", paddingHorizontal: 20 }} >
      <View style={{ height: 100, width: 100, borderWidth: 1, marginVertical: 40 }}>
        <Text>Logo</Text>
      </View>
      <View  style={{ marginVertical: 10, width: "80%" }}>
        <Text style={{ marginVertical: 5}}>Login:</Text>
        <TextInput style={{borderWidth: 1, height: 40}} />
      </View>
      <View style={{ marginVertical: 10, width: "80%" }}>
        <Text style={{ marginVertical: 5}}>Senha:</Text>
        <TextInput style={{borderWidth: 1, height: 40}}  />
      </View>
      <View style={{borderWidth: 1, width: "80%", marginVertical: 30, height: 40}}>
        <Button onPress={submitAuth} title={"Entrar"}/>
      </View>
    </SafeAreaView>
  )
}


export default AuthScreen;
