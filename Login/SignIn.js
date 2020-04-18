import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';


const width = Dimensions.get('window').width

export default class SignIn extends Component{

  render(){
  return( 
      <View style={{flex: 1}}>
       
       <Image source={require('../images/weShareLogo.png')}
            style={{    position: 'absolute',
            left:     50,
            top:      200,}}/>
      <View>
      <TouchableOpacity style={styles.getStartedButton}
        onPress={() => {
          alert('You tapped the button!');
        }}
      >
      <Text style={styles.getStarted}>Get started</Text>
      </TouchableOpacity>
      </View> 
      <View>
      <TouchableOpacity
        style={styles.logInButton}
        onPress={() => {
          alert('You tapped the button!');
        }}
      >
      <Text style={styles.logIn}>Log in</Text>
      </TouchableOpacity>
      </View> 
      </View>
    )  
  };
}



const styles = StyleSheet.create({
  getStarted: {
    position: 'absolute',
    left:     110,
    top:      10,
    width: 200,
    height: 50,
    alignItems: 'center',
    color: '#ae71fe',
  },
  logIn: {
    position: 'absolute',
    left:     130,
    top:      10,
    width: 200,
    height: 50,
    color: '#ae71fe',
  },
  getStartedButton: {
    position: 'absolute',
    left:     25,
    top:      400,
    width: 310,
    height: 50,
    borderRadius: 20,
    borderColor: '#a4c2fe',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: 'rgba(122, 166, 254, 0.56)',
  },
  logInButton: {
    position: 'absolute',
    left:     25,
    top:      500,
    width: 310,
    height: 50,
    borderRadius: 20,
    borderColor: '#a4c2fe',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: 'rgba(122, 166, 254, 0.56)',
  },
});
