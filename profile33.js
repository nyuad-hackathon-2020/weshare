import React, { Component } from "react";

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

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image
              source={require("./images/back.png")}
              style={{
                width: 15,
                height: 15,
                position:'absolute',
                top: 60,
                left: -50,
                tintColor: "purple"
              }}
            />
          </TouchableOpacity>

          <View style={{marginTop: 25}}>
            <TouchableOpacity>
              <Text style={styles.capitalLetter}>JOHN DOE - STATISTICS</Text>
              <Image
                source={require("./images/avatar2.png")}
                style={{
                  width: 35,
                  height: 30,
                  position:'absolute',
                  top: 28,
                  left: -222,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
            style={{
              backgroundColor: '#A2A2A2',
              height: 1,
              width: 400,
              position: 'absolute', top: 98, left: 0,
            }}
          />
        <View style={styles.body}>
            <Text style={{position:'absolute', top: 40, left: 100}}>Donations per country</Text>
            <View style={{position: 'absolute', top: 126, left: 200}}>
            <TouchableOpacity style={styles.statsbutton}>
              <Image
                source={require("./images/africaAsia.png")}
                style={{
                  width: 250,
                  height: 195,
                  marginLeft: screenWidth * -0.4,
                  marginTop: screenHeight * -0.07,
                  resizeMode:'contain',
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{position: 'absolute', top: 127, left: 242,
            width: 5,
    height: 5,
    borderRadius: 100/2,
    borderColor: '#7329A4',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: 'rgba(170, 115, 254, 0.62)'}} />
              <View style={{position: 'absolute', top: 127, left: 222,
            width: 10,
    height: 10,
    borderRadius: 100/2,
    borderColor: '#7329A4',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: 'rgba(170, 115, 254, 0.62)'}} />
                  <View style={{position: 'absolute', top: 160, left: 210,
            width: 10,
    height: 10,
    borderRadius: 100/2,
    borderColor: '#7329A4',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: 'rgba(170, 115, 254, 0.62)'}} />

        </View>
          <View
            style={{
              backgroundColor: '#A2A2A2',
              height: 1,
              width: 400,
              position: 'absolute', top: 370, left: 0,
            }}
          />
        <View style={{position: 'absolute', top: 126, left: 200}}>
              <Image
                source={require("./images/week_graph.png")}
                style={{
                  width: 250,
                  height: 160,
                  marginLeft: screenWidth * -0.40,
                  marginTop: screenHeight * 0.35,
                }}
              />
          <Text
            style={{
              position:'absolute',
              left: -203,
              top: 320,
              width: 80,
              color: "#7329A4",
              textAlign: "center",
            //  fontFamily: "Circular Std",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: 10,
              transform: [{ rotate: '-90deg'}]
            }}
          >
            Donations
          </Text>         
        <Text
            style={{
              position:'absolute',
              left: -166,
              top: 420,
              width: 80,
              color: "#7329A4",
              textAlign: "center",
            //  fontFamily: "Circular Std",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: 10,
            }}
          >
            Week 1
          </Text>  
          <Text
            style={{
              position:'absolute',
              left: -110,
              top: 420,
              width: 80,
              color: "#7329A4",
              textAlign: "center",
            //  fontFamily: "Circular Std",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: 10,
            }}
          >
            Week 2
          </Text>     
          <Text
            style={{
              position:'absolute',
              left: -56,
              top: 420,
              width: 80,
              color: "#7329A4",
              textAlign: "center",
            //  fontFamily: "Circular Std",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: 10,
            }}
          >
            Week 3
          </Text>   
          <Text
            style={{
              position:'absolute',
              left: -2,
              top: 420,
              width: 80,
              color: "#7329A4",
              textAlign: "center",
            //  fontFamily: "Circular Std",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: 10,
            }}
          >
            Week 4
          </Text>       
          <Text
            style={{
              position:'absolute',
              left: 50,
              top: 420,
              width: 80,
              color: "#7329A4",
              textAlign: "center",
            //  fontFamily: "Circular Std",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: 10,
            }}
          >
            Week 5
          </Text>    
        </View>
        <View
            style={{
              backgroundColor: '#A2A2A2',
              height: 1,
              width: 400,
              position: 'absolute', top: 570, left: 0,
            }}
          />
        <View style={{position: 'absolute', top: 126, left: 200}}>
              <Image
                source={require("./images/category_graph2.png")}
                style={{
                  width: 250,
                  height: 160,
                  marginLeft: screenWidth * -0.40,
                  marginTop: screenHeight * 0.62,
                }}
              />
          <Text
            style={{
              position:'absolute',
              left: -203,
              top: 520,
              width: 80,
              color: "#7329A4",
              textAlign: "center",
            //  fontFamily: "Circular Std",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: 10,
              transform: [{ rotate: '-90deg'}]
            }}
          >
            Donations
          </Text>         
        <Text
            style={{
              position:'absolute',
              left: -166,
              top: 610,
              width: 80,
              color: "#7329A4",
              textAlign: "center",
            //  fontFamily: "Circular Std",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: 10,
            }}
          >
            Food
          </Text>  
          <Text
            style={{
              position:'absolute',
              left: -93,
              top: 610,
              width: 80,
              color: "#7329A4",
              textAlign: "center",
            //  fontFamily: "Circular Std",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: 10,
            }}
          >
            Pharmacy
          </Text>     
          <Text
            style={{
              position:'absolute',
              left: -20,
              top: 610,
              width: 80,
              color: "#7329A4",
              textAlign: "center",
            //  fontFamily: "Circular Std",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: 10,
            }}
          >
            Healthcare
          </Text>   
          <Text
            style={{
              position:'absolute',
              left: 50,
              top: 610,
              width: 80,
              color: "#7329A4",
              textAlign: "center",
            //  fontFamily: "Circular Std",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: 10,
            }}
          >
            Education
          </Text>          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FFFFFF",
    height: screenHeight * 0.1,
    flexDirection: "row",
    justifyContent: "space-around",
    width: screenWidth * 1.3,
    alignSelf: "center",
  },
  capitalLetter: {
   // fontFamily: "Circular Std",
   // fontStyle: "normal",
    position:'absolute',
    top: 5,
    left: -180,
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 70,
    color: "#7329A4"
  },
  profileImageContainer: {
    alignSelf: "center",
    marginTop: screenHeight * 0.023
  },
  profileImage: {
    resizeMode: "cover",
    height: 56,
    width: 56,
    borderWidth: 0,
    borderRadius: 75,
    overlayColor: "#FFFFFF",
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    //fontFamily: "Circular Std",
  //  fontStyle: "normal",
    lineHeight: 25,
    color: "#000000",
    // marginTop: screenHeight * -0.145,
    // marginBottom: 10
  },
  info: {
    fontSize: 11,
    fontWeight: '500',
    //fontFamily: "Circular Std",
  //  fontStyle: "normal",
    color: "#000000",
    marginTop: 0
  },
  body: {
    // marginTop: 40
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    paddingLeft: 35,
    paddingRight: 35,
  },
  description: {
    fontSize: 14,
    // marginTop: screenHeight * 0.06,
    textAlign: "center",
    color: "#7329A4",
    //fontFamily: "Circular Std",
   // fontStyle: "bold",
    fontWeight: "500"
  },
  commentContainer: {
    marginTop: screenHeight * 0.023,
    height: "auto",
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: 0,
    width: screenWidth * 0.9,
    borderRadius: 0,
    backgroundColor: "#F9EFFA"
  },
  profileImageContainer2: {},
  profileImage2: {
    resizeMode: "center",
    height: 50,
    width: 50,
    borderWidth: 0,
    borderRadius: 75,
    overlayColor: "#FFFFFF"
  }
});
