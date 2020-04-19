import React, { Component } from "react";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);
console.log(screenWidth);
console.log(screenHeight);

var radio_props = [
  {label: 'Fetcher', value: 0 },
  {label: 'SHIPA', value: 1 },
  {label: 'Card', value: 2 },
];




export default class Feed2 extends Component{
    render(){
        return(
          <View style={{width: screenWidth, height: screenHeight}}>
            <View style={styles.header}>
              <View style={{marginLeft: 10}}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                  <Image
                    source={require("./images/back.png")}
                    style={{
                      width: 15,
                      height: 15,
                      marginTop: 60,
                      marginLeft: 18,
                      tintColor: "purple"
                    }}
                  />
                </TouchableOpacity>
              </View>
            <View style={{marginRight: screenWidth * 0.35}}>
              <TouchableOpacity>
                <Text style={styles.capitalLetter}>DELIVERY METHOD</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginTop: 50, marginLeft: 25, flexDirection: 'row'}}>
              <RadioForm 
              style={{marginTop: 10}}
              radio_props={radio_props}
              initial={0}
              radioStyle={{paddingBottom: 55, paddingRight: 5, marginRight: 0}}
              buttonColor={'#7329A4'}
              onPress={(value) => {this.setState({value:value})}}
            />
            <View>
              <Image
                  source={require('./images/fetchr.png')}
                  style={{ width: 225, height: 50,marginBottom: 40}}
              />
              <Image
                  source={require('./images/SHIPA.png')}
                  style={{ width: 250, height: 50,marginBottom: 40 }}
              />
              <Image
                  source={require('./images/cards.png')}
                  style={{ width: 225, height: 50,marginBottom: 40 }}
              />
            </View>
            
          </View>
            <View style={{marginLeft: 40, position: 'absolute', bottom: 40, left: 40}}>
                        <View style={styles.roundbtn}>
                                <TouchableOpacity onPress={() => {
                                  // this.deleteData()
                                  alert('Thank you for making payment')
                                  this.props.navigation.replace('rfeed')
                                }} style={{flexDirection: 'row'}}>
                                    <Image
                                        source={require('./images/success.png')}
                                        style={{ width: 25, height: 25 }}
                                    />
                                    <Text style={styles.confirm}>Confirm</Text>
                                </TouchableOpacity>
                        </View>                              
                </View>
        </View>
        )
    }
}


const styles = StyleSheet.create({
  header: {
    // flex: 1,
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    // height: screenHeight * 0.1,
    justifyContent: "space-between",
    
    // width: screenWidth * 1.3,
    // alignSelf: "center",
  },
  capitalLetter: {
   // fontFamily: "Circular Std",
   // fontStyle: "normal",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 70,
    color: "#7329A4",
    marginTop: 30
  },
  roundbtn:{
    width: 250,
    height: 43,
    backgroundColor: '#7874D5',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 9
},
confirm:{
  fontWeight: '500',
  fontSize: 14,
  marginTop: 4,
  color: '#FFFFFF',
  backgroundColor: "#7874D5",
  marginLeft: 8
},
});
