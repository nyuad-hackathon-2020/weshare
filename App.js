import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet
}from 'react-native'

export default class App extends Component{
  render(){
    return(
      <View style={styles.container}>
          <Text style={styles.fontheader}>Hi Weshare Team</Text>
      </View>
    )
  }
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