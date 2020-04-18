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
                     <View style={{height: 90, marginLeft: 17, marginTop: 18, flexDirection: 'row', alignItems: 'center', width: phonewidth}}>
                    <View>
                      <Image 
                        source={require('./images/circle.png')}
                        style={{width: 40, height: 40}}
                      />
                      <Image
                        source={require('./images/man.png')}
                        style={{ width: 16, height: 16, position: 'absolute', marginLeft: 12, marginTop: 10 }}
                      />
                    </View> 

                     <View>
                      <Image
                        source={require('./images/cart.png')}
                        style={{ width: 26, height: 29, marginLeft: 27}}
                      />
                    </View> 

                    <View>
                      <Image
                        source={require('./images/weShare.png')}
                        style={{ width: 150, height: 29, marginLeft: 22}}
                      />
                    </View>

                    <View>
                      <Image
                        source={require('./images/notification.png')}
                        style={{ width: 20, height: 20, marginLeft: 35}}
                      />
                    </View>

                    <View>
                      <Image
                        source={require('./images/search.png')}
                        style={{ width: 20, height: 20, marginLeft: 35}}
                      />
                    </View>
              </View>

                <View style={{ marginTop: 460,marginLeft: 90,}}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={styles.roundbtn}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('request')}>
                                        <Text style={styles.txt}>Request</Text>
                                </TouchableOpacity>
                            </View>

                        </View>

                        <View>
                            <View style={styles.roundbtn}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('donation')}>
                                        <Text style={styles.txt}>Donate</Text>
                                </TouchableOpacity>
                                
                            </View>

                            <Image
                                    source={require('./images/rect2.png')}
                                    style={{ width: 20, height: 20, marginLeft: 174 , position: 'absolute', marginTop: 19, marginRight: 5}}
                                />
                        </View>
                </View>

                <View style={{flex: 1}}>
                   <TouchableOpacity onPress={() =>this.props.navigation.goBack()}>
                        <Image
                            source={require('./images/back.png')}
                            style={{ width: 25, height: 25, marginLeft: 25 }}
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