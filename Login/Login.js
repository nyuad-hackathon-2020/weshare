import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';


const width = Dimensions.get('window').width

export default class Login extends Component{

  render(){
  return( 
      <View style={{flex: 1}}>

      <Text style={styles.logIn}>Log in</Text> 
      <View>
      <TouchableOpacity style={styles.appleButton}
        onPress={() => {
          alert('You tapped the button!');
        }}
      >
      <Image source={require('../images/Path_1232.png')}
            style={{    position: 'absolute',
            left:     50,
            top:      10,}}/>
      <Text style={styles.appleWord}>Sign in with Apple</Text>
      </TouchableOpacity>
      </View> 
      <View>
      <TouchableOpacity
        style={styles.googleButton}
        onPress={() => {
          alert('You tapped the button!');
        }}
      >
      <Image source={require('../imagese/4-layers.png')} 
      style={{    position: 'absolute',
                  left:     50,
                  top:      10,}}/>
      <Text style={styles.googleWord}>Sign in with Google</Text>
      </TouchableOpacity>
      </View> 
      <Text style={styles.orSign}>or sign-in with your email</Text> 
      <View>
      <TouchableOpacity style={styles.emailBox}
        onPress={() => {
          alert('You tapped the button!');
        }}
      >
      <Text style={styles.emailWord}>Type your email</Text>
      </TouchableOpacity>
      </View> 
      <View>
      <TouchableOpacity
        style={styles.passwordBox}
        onPress={() => {
          alert('You tapped the button!');
        }}
      >
      <Text style={styles.passwordWord}>Type your password</Text>
      </TouchableOpacity>
      </View> 
      </View>
    )  
  };
}



const styles = StyleSheet.create({
  logIn: {
    position: 'absolute',
    left:     150,
    top:      100,
    width: 106,
    height: 50,
    alignItems: 'center',
    color: '#ae71fe',
  },
  appleButton: {
    position: 'absolute',
    left:     25,
    top:      250,
    width: 310,
    height: 50,
    borderRadius: 20,
    borderColor: '#a4c2fe',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: 'rgba(122, 166, 254, 0.56)',
  },
  appleWord: {
    position: 'absolute',
    left:     150,
    top:      10,
    width: 200,
    height: 50,
    alignItems: 'center',
    color: '#ae71fe',
  },
  googleButton: {
    position: 'absolute',
    left:     25,
    top:      350,
    width: 310,
    height: 50,
    borderRadius: 20,
    borderColor: '#a4c2fe',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: 'rgba(122, 166, 254, 0.56)',
  },
  googleWord: {
    position: 'absolute',
    left:     150,
    top:      10,
    width: 200,
    height: 50,
    color: '#ae71fe',
  },
  orSign: {
    position: 'absolute',
    left:     80,
    top:      450,
    width: 232,
    height: 50,
    borderColor: 'rgba(253, 221, 221, 0)',
    borderStyle: 'solid',
    borderWidth: 1,
    color: '#000000',
  },
  emailBox: {
    position: 'absolute',
    left:     25,
    top:      500,
    width: 310,
    height: 60,
    borderRadius: 20,
    borderColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: 'rgba(211, 217, 229, 0.47)',
  },
  emailWord: {
    position: 'absolute',
    left:     100,
    top:      15,
    width: 256,
    height: 50,
    color: '#ae71fe',
  },
  passwordBox: {
    position: 'absolute',
    left:     25,
    top:      600,
    width: 310,
    height: 60,
    borderRadius: 20,
    borderColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: 'rgba(211, 217, 229, 0.47)',
  },
  passwordWord: {
    position: 'absolute',
    left:     90,
    top:      15,
    width: 256,
    height: 50,
    color: '#ae71fe',
  },
});
