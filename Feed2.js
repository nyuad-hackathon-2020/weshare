import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity
}from 'react-native'

export default class Feed2 extends Component{
    render(){
        return(
            <View style={{flex: 1}}>
                    <View style={{height: 105, flexDirection: 'row', alignItems: 'center', width: phonewidth, backgroundColor: 'white'}}>
                    <View style={{marginTop: 20, marginLeft: 18}}>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('profile')}>
                          <Image 
                            source={require('./images/circle.png')}
                            style={{width: 40, height: 40, marginLeft: 2}}
                          />
                          <Image
                            source={require('./images/avatar2.png')}
                            style={{ resizeMode: "cover",
                            height: 45,
                            width: 45,
                            borderWidth: 0,
                            borderRadius: 75,
                            position: 'absolute', top: -4, marginLeft: 2}}
                          />
                      </TouchableOpacity>
                    </View> 
                   
                     <View>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('cart',{
                        cart: this.state.myCart
                      })}>
                          <Image
                            source={require('./images/basket.png')}
                            style={{ width: 24, height: 24, marginLeft: 27, marginTop: 20}}
                          />
                      </TouchableOpacity>
                    </View> 

                    <View>
                      <Image
                        source={require('./images/weShare.png')}
                        style={{ width: 150, height: 29, marginLeft: 22, marginTop: 20}}
                      />
                    </View>

                    <View>
                      <Image
                        source={require('./images/notification.png')}
                        style={{ width: 20, height: 20, marginLeft: 35, marginTop: 20}}
                      />
                    </View>

                    <View>
                      <Image
                        source={require('./images/search.png')}
                        style={{ width: 20, height: 20, marginLeft: 35, marginTop: 20}}
                      />
                    </View>
              </View>

                <View style={{ marginTop: 460,marginLeft: 90,}}>
                        {/* <View style={{flexDirection: 'row'}}>
                            <View style={styles.roundbtn}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('request')}>
                                        <Text style={styles.txt}>Request</Text>
                                </TouchableOpacity>
                            </View>
                            <Image
                                  source={require('./images/request.png')}
                                  style={{ width: 20, height: 20, marginLeft: 174 , position: 'absolute', marginTop: 19, marginRight: 5}}
                            />

                        </View> */}

                        <View>
                          <TouchableOpacity onPress={() => this.props.navigation.navigate('request')}>
                            <Image
                              source={require('./images/request2.png')}
                              style={{ width: 270, height: 50 }}
                            />
                          </TouchableOpacity>
                        </View>

                        {/* <View>
                            <View style={styles.roundbtn}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('donation')}>
                                        <Text style={styles.txt}>Donate</Text>
                                </TouchableOpacity>
                                
                            </View>

                            <Image
                                    source={require('./images/rect2.png')}
                                    style={{ width: 20, height: 20, marginLeft: 174 , position: 'absolute', marginTop: 19, marginRight: 5}}
                                />
                        </View> */}

                        <View>
                           <TouchableOpacity onPress={() => this.props.navigation.navigate('donation')}>
                           <Image
                            source={require('./images/donate2.png')}
                            style={{ width: 270, height: 50, marginTop: 50}}
                        />
                           </TouchableOpacity>
                        </View>
                </View>

                <View style={{flex: 1}}>
                   <TouchableOpacity onPress={() =>this.props.navigation.goBack()}>
                        <Image
                            source={require('./images/back.png')}
                            style={{ width: 25, height: 25, marginLeft: 25, top: 25 }}
                        />
                   </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    roundbtn:{
        width: 254,
        height: 43,
        backgroundColor: 'rgba(122, 166, 254, 0.47)',
        borderRadius: 20,
        marginBottom: 66,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 9
    },
    txt:{
        fontWeight: '500',
        fontSize: 20,
        color: '#000000'
    }
})
