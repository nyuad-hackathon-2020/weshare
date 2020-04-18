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
import ShoppingCart from './ShoppingCart'
import profile3 from './profile3'
import profile2 from './profile2'
import Payment from './Payment'


const Stack = createStackNavigator();

export default function App(){
    return(
          <NavigationContainer>
            <Stack.Navigator headerMode={null}>
              {/* <Stack.Screen name="Login" component={Login} />
              // <Stack.Screen name="SignIn" component={SignIn} /> */}

              {/* <Stack.Screen name="profile" component={Payment} /> */}

              <Stack.Screen name="signin" component={SignIn} />
              <Stack.Screen name="login" component={Login} />
              <Stack.Screen name="feed2" component={Feed2} />
              <Stack.Screen name="retailer" component={retailerProfile} />
              <Stack.Screen name="confirmation" component={Confirmation} />
              <Stack.Screen name="donation" component={Donation} />
              <Stack.Screen name="request" component={Request} />
              <Stack.Screen name="rfeed" component={RequestFeed} />
              <Stack.Screen name="cart" component={ShoppingCart} />
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