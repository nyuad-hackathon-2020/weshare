import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, TextInput } from 'react-native';



const width = Dimensions.get('window').width

export default class Login extends Component{

  render(){
  return( 
      <View style={{flex: 1}}>

      <Text style={styles.logIn}>Log in</Text> 
      <View>
      <TouchableOpacity style={styles.appleButton}
        onPress={() => this.props.navigation.navigate('rfeed')}
      >
      <Image source={require('../images/Path_1232.png')}
            style={{    position: 'absolute',
            left:     50,
            top:      14,}}/>
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
      <Image source={require('../images/google.png')} 
      style={{    position: 'absolute',
                  left:     50,
                  top:      13,}}/>
      <Text style={styles.googleWord}>Sign in with Google</Text>
      </TouchableOpacity>
      </View> 

      <Text style={styles.orSign}>or sign-in with your email</Text> 

      <TextInput 
      placeholder='Type your E-mail Here'
      style={styles.emailBox}
      />

      <TextInput
        placeholder='Type your Passowrd Here'
        style={styles.passwordBox}
      />

      <Text style={styles.safe}>You are completely safe</Text>
      <Text style={styles.safe2}>Read our Terms & Conditions</Text>

      {/* <View>
      <TouchableOpacity style={styles.emailBox}
        onPress={() => {
          alert('You tapped the button!');
        }}
      >
      <Text style={styles.emailWord}>Type your email</Text>
      </TouchableOpacity>
      </View>  */}

      {/* <View>
      <TouchableOpacity
        style={styles.passwordBox}
        onPress={() => {
          alert('You tapped the button!');
        }}
      >
      <Text style={styles.passwordWord}>Type your password</Text>
      </TouchableOpacity>
      </View>  */}

      </View>
    )  
  };
}




const styles = StyleSheet.create({
  logIn: {
    position: 'absolute',
    left:     150,
    top:      100,
    alignItems: 'center',
    color: '#AE71FE',
    fontSize: 36,
    fontWeight: '500'
  },
  appleButton: {
    position: 'absolute',
    left:     52,
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
    left:     100,
    top:      11,
    width: 200,
    height: 50,
    alignItems: 'center',
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 20
  },
  googleButton: {
    position: 'absolute',
    left:     52,
    top:      350,
    width: 310,
    height: 50,
    borderRadius: 20,
    borderColor: '#a4c2fe',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: 'rgba(170, 115, 254, 0.62)',
  },
  googleWord: {
    position: 'absolute',
    left:     100,
    top:      10,
    width: 200,
    height: 50,
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 20
  },
  orSign: {
    position: 'absolute',
    left:     95,
    top:      480,
    width: 232,
    height: 50,
    borderColor: 'rgba(253, 221, 221, 0)',
    borderStyle: 'solid',
    borderWidth: 1,
    color: '#000000',
    fontSize: 20,
    fontWeight: '500'
  },
  emailBox: {
    position: 'absolute',
    left:     52,
    top:      540,
    width: 310,
    height: 60,
    borderRadius: 20,
    borderColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: 'rgba(211, 217, 229, 0.47)',
    padding: 13
  },
  emailWord: {
    position: 'absolute',
    left:     10,
    top:      17,
    width: 256,
    height: 50,
    color: '#ae71fe',
  },
  passwordBox: {
    position: 'absolute',
    left:     52,
    top:      630,
    width: 310,
    height: 60,
    borderRadius: 20,
    borderColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: 'rgba(211, 217, 229, 0.47)',
    padding: 13
  },
  passwordWord: {
    position: 'absolute',
    left:     90,
    top:      15,
    width: 256,
    height: 50,
    color: '#ae71fe',
  },
  safe:{
    fontWeight: '500',
    fontSize: 15,
    color: '#5F7FC1',
    marginTop: 14,
    marginTop: 800,
    marginLeft: 130
},
safe2:{
    fontWeight: '500',
    fontSize: 15,
    color: '#CAA8FE',
    marginTop: 7,
    marginLeft: 110
}
});
