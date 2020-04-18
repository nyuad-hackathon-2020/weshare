import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
}from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RequestFeed from './RequestFeed'
import Login from './Login/Login'
import SignIn from './Login/SignIn'
import Feed2 from './Feed2'
import Request from './Request'
import Donation from './Donation'
import Confirmation from './Confirmation'
import retailerProfile from './retailerProfile'


const Stack = createStackNavigator();

export default function App(){
    return(
          <NavigationContainer>
            <Stack.Navigator headerMode={null}>
              {/* <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="SignIn" component={SignIn} /> */}
              <Stack.Screen name="Request" component={Login} />
              
            </Stack.Navigator>
          </NavigationContainer>
    )
  }

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  fontheader:{
    fontSize: 17,
    color: 'black'
  }
})