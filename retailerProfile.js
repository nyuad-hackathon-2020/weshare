import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';


const width = Dimensions.get('window').width

export default class RetailerProfile extends Component{

  render(){
  return( 
      <View style={{flex: 1}}>
      <View>
      <Image source={require('./images/Image_1.png')}
            style={{    position: 'absolute',
            left:     0,
            top:      10,width: width}}/>
      </View> 
      <View style={{position: 'absolute',
            left:     0,
            top:      380,
            height: 50, 
            backgroundColor: '#5887F9', 
            alignItems: 'center', justifyContent: 'center', width: width}}>
                                        <TouchableOpacity         onPress={() => {
                                                alert('You tapped the button!');
                                                }}>
                                            <Text style={styles.confirm2}>Review Me</Text>
                                        </TouchableOpacity>
                                </View>


<View style={{backgroundColor: 'green'}}>

</View>
      <View style={{marginLeft: 18}}>
        <TouchableOpacity style={styles.emailBox}>
          <Text style={styles.emailWord}>About</Text>
        </TouchableOpacity>

       <View style={{flexDirection: 'row'}}>  

           <Text style={{marginTop: 443, marginLeft: 165}}>125</Text>
          <TouchableOpacity style={styles.emailBox2}>
              <Text style={styles.emailWord2}>Products</Text>
          </TouchableOpacity>

       </View>
       <Text style={{marginLeft: 313, bottom: 15}}>20</Text>
        <TouchableOpacity style={styles.emailBox3}>
          <Text style={styles.emailWord3}>Reviews</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={{
          marginTop: 70, 
          marginLeft: 20,
          fontSize: 14,
          color: '#4C5264'
        }}>We are willing to offer to feed 10 families in need</Text>
      </View>

      <View style={{position: 'absolute',
            left:     0,
            top:      790,
            borderRadius: 14,
            height: 51, 
            marginLeft: 70,
            backgroundColor: '#5887F9', 
            alignItems: 'center', justifyContent: 'center', width: 281}}>
                                        <TouchableOpacity         onPress={() => {
                                                alert('You tapped the button!');
                                                }}>
                                            <Text style={styles.confirm2}>Accept Donations</Text>
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
  confirm2:{
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF'
},
 
  emailBox: {
    position: 'absolute',
    left:     10,
    top:      450,
    width: 65,
    height: 60,
    color: 'transparent',
    borderRadius: 20,
    borderColor: '#ffffff',
    /*borderStyle: 'solid',
    borderWidth: 1,*/
    /*backgroundColor: 'rgba(211, 217, 229, 0.47)',*/
  },

  emailBox2: {
    position: 'absolute',
    left:     150,
    top:      450,
    width: 65,
    height: 60,
    color: 'transparent',
    borderRadius: 20,
    borderColor: '#ffffff',
    /*borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: 'rgba(211, 217, 229, 0.47)',*/
  },    

  emailBox3: {
    position: 'absolute',
    left:     290,
    top:      450,
    width: 65,
    height: 60,
    color: 'transparent',
    borderRadius: 20,
    borderColor: '#ffffff',
    /*borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: 'rgba(211, 217, 229, 0.47)',*/
  }, 

  emailWord: {
    position: 'absolute',
    left:     10,
    top:      15,
    width: 65,
    height: 50,
    color: '#ae71fe',
  },

  emailWord2: {
    position: 'absolute',
    left:     0,
    top:      15,
    width: 65,
    height: 50,
    color: '#ae71fe',
  },

  emailWord3: {
    position: 'absolute',
    left:     5,
    top:      15,
    width: 65,
    height: 50,
    color: '#ae71fe',
  },
  passwordWord: {
    position: 'absolute',
    left:     10,
    top:      520,
    width: 256,
    height: 50,
    color: '#ae71fe',
  },
  passwordWord2: {
    position: 'absolute',
    left:     10,
    top:      550,
    width: 256,
    height: 50,
    color: '#ae71fe',
  },
});
