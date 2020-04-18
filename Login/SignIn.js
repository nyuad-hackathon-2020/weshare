import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const width = Dimensions.get('window').width

class SignIn extends Component{

  render(){
  return( 
      <View style={{flex: 1}}>
       <Image source={require('../images/weShareW.png')}
           style={{
               height: 110,
               width: 170,
               position: 'absolute',
               left: 120,
               top: 180,
           }}/>
       <Image source={require('../images/weShareLogo.png')}
            style={{  
            left:     90,
            top:      300,}}/>
            <Text style={{
              position: 'absolute', 
              marginTop: 370, 
              color: '#000000', 
              fontWeight: '500', 
              marginLeft: 30,
              fontSize: 20}}>For the Community, By the Community</Text>
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
        onPress={() => this.props.navigation.navigate('login')}
      >
      <Text style={styles.logIn}>Log in</Text>
      </TouchableOpacity>
      </View> 
      </View>
    )  
  };
}

export default function(){
  const navigation = useNavigation()
  return <SignIn navigation={navigation} />
}



const styles = StyleSheet.create({
  getStarted: {
    position: 'absolute',
    left:     110,
    top:      15,
    width: 200,
    height: 50,
    alignItems: 'center',
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '500'
  },
  logIn: {
    position: 'absolute',
    left:     130,
    top:      15,
    width: 200,
    height: 50,
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '500'
  },
  getStartedButton: {
    position: 'absolute',
    left:     60,
    top:      450,
    width: 310,
    height: 60,
    borderRadius: 20,
    borderColor: '#a4c2fe',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: 'rgba(122, 166, 254, 0.66)',
    alignItems: 'center'
  },
  logInButton: {
    position: 'absolute',
    left:     60,
    top:      550,
    width: 310,
    height: 60,
    borderRadius: 20,
    borderColor: '#a4c2fe',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: 'rgba(170, 115, 254, 0.62)',
  },
});
