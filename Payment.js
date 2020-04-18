import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    Text,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
    Keyboard
}from 'react-native'


export default class Payment extends Component{
    render(){
        return(
            <View style={{flex: 1}}>
                    <View style={{height: 90, marginLeft: 17, marginTop: 18, flexDirection: 'row', alignItems: 'center', width: 360}}>
                    <View style={{backgroundColor: '#7874D5', flex: 1, width: 'auto', flexDirection: 'column', height: 100}}>
                      <View style={{flexDirection: 'row',justifyContent: 'space-between', marginBottom: 30}}>
                        <Text style={styles.txt}>Ellie</Text>
                        <Text style={styles.txt}>45 AED</Text>

                      </View>
                      <View>
                        <Text style={{color: '#FFFFFF'}}> 17th April 2020, 11:41 PM</Text>
                      </View>
                    </View> 
              </View>
              <View >
              {/* Demo Form*/}
              <View>
              <View>
                <Image
                    source={require('./images/Payment.png')}
                    style={{height: 60, margin: 5 }}
                />
              </View>
              <View style={{marginLeft: 30, marginRight: 20}}>
                <TextInput 
                  style={styles.textInput}
                  placeholder="Full Name"
                  maxLength={20}
                  onBlur={Keyboard.dismiss}
                  />
                <TextInput 
                  style={styles.textInput}
                  placeholder="Expiry Date"
                  maxLength={20}
                  onBlur={Keyboard.dismiss}
                  />
                <TextInput 
                  style={styles.textInput}
                  placeholder="Security Code"
                  maxLength={20}
                  onBlur={Keyboard.dismiss}
                  />
              </View>
                
              </View>
            </View>  
              <View style={{flexDirection: 'row' ,alignItems: 'center', position: 'absolute', bottom: 0   }}>
                <View>
                    <TouchableOpacity>
                          <Image
                              source={require('./images/back.png')}
                              style={{ width: 25, height: 25, marginLeft: 25 }}
                          />
                    </TouchableOpacity>
                </View>
                <View style={{marginLeft: 40,}}>
                        <View style={styles.roundbtn}>
                                <TouchableOpacity onPress={() => {}} style={{flexDirection: 'row'}}>
                                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.1001 11.4L9.2001 14.5L16.4001 7.40002" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                                  <Text style={styles.confirm}>   Confirm</Text>
                                </TouchableOpacity>
                        </View>                              
                </View>
              </View>
              
            </View>
        )
    }
}

const styles = StyleSheet.create({
    roundbtn:{
        width: 204,
        height: 43,
        backgroundColor: 'rgba(122, 166, 254, 0.47)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 9
    },
    txt:{
        fontWeight: '500',
        fontSize: 20,
        color: '#FFFFFF',
        margin: 10,
    },
    header:{
      flex: 1,
      backgroundColor: '#AE71FE',
      width: 'auto',
    },
    confirm:{
      fontWeight: '500',
      fontSize: 14,
      lineHeight: 18,
      color: '#FFFFFF',
      backgroundColor: "#7874D5",
    },
    inputContainer: {
      paddingTop: 15
    },
    textInput: {  
      borderBottomWidth: 1,
      height: 50,
      fontWeight: '500',
      fontSize: 12,
      lineHeight: 15, 

      marginTop: 8,
      marginBottom: 8,
    }
})