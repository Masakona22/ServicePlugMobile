/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { MaterialIcons } from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
//Missing icons and fontsnpm install @react-navigation/native

const Stack = createNativeStackNavigator();

const App = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Main} name="Main"></Stack.Screen>
        <Stack.Screen component={Home} name="Home"></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
} 
const Main = (navigation) =>{
  return(
    <SafeAreaView style={{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#fff',
    }}>
    <View>
      <Text style={{
        fontSize:24,
        fontWeight:'bold',
        color:'#a1891e',
      }}>Welcome to Service Plug</Text>
    </View>
    <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{
      backgroundColor:'#a1891e',
      padding:20,
      width:'90%',
      borderRadius:5,
      flexDirection:'row',
      justifyContent:'space-between'
    }}>
      <Text style={{
        fontSize:18,
        fontWeight:'bold',
        color:'#fff'
      }}>Let's go</Text>
    </TouchableOpacity>
    </SafeAreaView>
  )
}

const Home = () =>{
  return(
    <SafeAreaView>
      <View>
        <Text style={{
          justifyContent:'center',
          fontWeight:'bold',
        }}>Home Screen</Text>
      </View>
    </SafeAreaView>
  );
}
export default App;
