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
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image
              source={require("./images/back.png")}
              style={{
                width: 15,
                height: 15,
                marginTop: screenHeight * 0.06,
                tintColor: "purple"
              }}
            />
          </TouchableOpacity>

          <View style={{marginTop: 30}}>
            <TouchableOpacity>
              <Text style={styles.capitalLetter}>PROFILE</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity>
            <Image
              source={require("./images/threedot.png")}
              style={{
                width: 3,
                height: 15,
                marginTop: 55,
                tintColor: "purple"
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.profileImageContainer}>
          <Image
            style={styles.profileImage}
            source={require("./images/avatar.jpg")}
            resizeMode="cover"
          />
        </View>
        <View style={styles.body}>
          <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
                  <Text style={{fontWeight: '700'}}>John Doe</Text>
                  <Text>San Francisco, CA</Text>
                  <Text>Hi!! My name is John</Text>
          </View>
          {/* <View style={styles.bodyContent}>
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.info}>San Francisco, CA</Text>
            <Text style={styles.description}>Hi! My name is John!</Text>
          </View> */}
            <View style={{position: 'absolute', top: 75, left: 100}}>
            <TouchableOpacity style={styles.donbutton}>
              <Text
                style={{
                  color: "#7329A4",
                  textAlign: "center",
                 // fontFamily: "Circular Std",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: 38.8,
                  marginLeft: screenWidth * 0,
                  marginTop: 1
                }}
              >
                20
              </Text>
              <Text
                style={{
                  color: "#7329A4",
                  textAlign: "center",
                //  fontFamily: "Circular Std",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: 10,
                  marginLeft: screenWidth * 0
                }}
              >
                DONATIONS
              </Text>
            </TouchableOpacity>
            </View>
            <View style={{position: 'absolute', top: 122, left: 200}}>
            <TouchableOpacity style={styles.statsbutton} onPress={() => this.props.navigation.navigate('stats')}>
              <Image
                source={require("./images/stats.png")}
                style={{
                  width: 45,
                  height: 45,
                  marginLeft: screenWidth * 0.15,
                  marginTop: screenHeight * -0.05,
                  tintColor: "purple",
                  opacity: 0.7
                }}
              />
              <Text
                style={{
                  color: "#7329A4",
                  textAlign: "center",
                //  fontFamily: "Circular Std",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: 10,
                  marginLeft: screenWidth * 0.14
                }}
              >
                STATISTICS
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
                position: 'absolute',
                top: 170,
                left: 20
              }}
          >
            <View>
              <TouchableOpacity style={styles.commentContainer}>
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.profileImageContainer2}>
                    <Image
                      style={styles.profileImage2}
                      source={require("./images/avatarE.png")}
                      resizeMode="cover"
                    />
                  </View>
                  <Text
                    style={{
                      marginLeft: screenWidth * 0.05,
                      marginTop: 10
                    }}
                  >
                    Elif Su Ozoglu
                  </Text>
                  <Text
                    style={{
                      marginLeft: screenWidth * 0.45,
                      marginTop: 10
                    }}
                  >
                    2h
                  </Text>
                </View>
                <Text
                  style={{ marginLeft: 70, color: "#7329A4" }}
                >
                  {""}
                  Thank you so much for your help! This month has been saved,
                  all thanks to you.{""}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.commentContainer}>
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.profileImageContainer2}>
                    <Image
                      style={styles.profileImage2}
                      source={require("./images/avatarJ.png")}
                      resizeMode="cover"
                    />
                  </View>
                  <Text
                    style={{
                      marginLeft: screenWidth * 0.05,
                      marginTop: 10
                    }}
                  >
                    Nicolas Zilberstein
                  </Text>
                  <Text
                    style={{
                      marginLeft: screenWidth * 0.37,
                      marginTop: 10
                    }}
                  >
                    2h
                  </Text>
                </View>
                <Text
                  style={{ marginLeft: 70, color: "#7329A4" }}
                >
                  {""}
                  Thank you so much for your help! This month has been saved,
                  all thanks to you.{""}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.commentContainer}>
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.profileImageContainer2}>
                    <Image
                      style={styles.profileImage2}
                      source={require("./images/profile.png")}
                      resizeMode="cover"
                    />
                  </View>
                  <Text
                    style={{
                      marginLeft: screenWidth * 0.05,
                      marginTop: 10
                    }}
                  >
                    Baran Iscanli
                  </Text>
                  <Text
                    style={{
                      marginLeft: screenWidth * 0.46,
                      marginTop: 10
                    }}
                  >
                    2h
                  </Text>
                </View>
                <Text
                  style={{ marginLeft: 70, color: "#7329A4" }}
                >
                  {""}
                  Thank you so much for your help! This month has been saved,
                  all thanks to you.{""}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.commentContainer}>
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.profileImageContainer2}>
                    <Image
                      style={styles.profileImage2}
                      source={require("./images/avH.png")}
                      resizeMode="cover"
                    />
                  </View>
                  <Text
                    style={{
                      marginLeft: screenWidth * 0.05,
                      marginTop: 10
                    }}
                  >
                   Juan Dolvan 
                  </Text>
                  <Text
                    style={{
                      marginLeft: screenWidth * 0.47,
                      marginTop: 10
                    }}
                  >
                    2h
                  </Text>
                </View>
                <Text
                  style={{ marginLeft:70, color: "#7329A4" }}
                >
                  {""}
                  Thank you so much for your help! This month has been saved,
                  all thanks to you.{""}
                </Text>
              </TouchableOpacity>

            </View>
          </View>
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
    borderRadius: 25,
    overlayColor: "#FFFFFF",
    
    
  }
});
