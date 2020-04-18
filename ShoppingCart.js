import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView
}from 'react-native'
import { useRoute, useNavigation} from '@react-navigation/native'

class ShoppingCart extends Component{

    state={
        requestData: []
    }

    showMyCart = () =>{
        return this.props.route.params.cart.map((item, index) =>{
            // <Text>{item.get('Message')}</Text>
            return(
               
                <View style={{flex: 1, marginTop: 5}} key={index}>
                       <View style={{height: 20, width: phonewidth, marginBottom: 30,  height: 200}}>
                             <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <View>
                                        <Image
                                          source={require('./images/circle2.png')}
                                          style={{ width: 40, height: 40}}
                                        />
                                        <Image
                                          source={require('./images/man.png')}
                                          style={{ width: 16, height: 16, position: 'absolute', marginLeft: 12, marginTop: 10}}
                                        />
                                    </View>
    
                                    <View style={{marginLeft: 10}}>
                                      <Text style={{fontWeight: '500', fontSize: 14}}>{item.get('Name')}</Text>
                                      <Text style={{fontWeight: '500', fontSize: 10, color: '#AD92F7'}}>{item.get('username')}</Text>
                                    </View>
    
                                    <View>
                                        <Image
                                          source={require('./images/threedot.png')}
                                          style={{ width: 3, height: 15, marginLeft: 270}}
                                        />
                                    </View>
                             </View>
    
                             <View style={{marginTop: 30, flexDirection: 'row'}}>
                                    <View>
                                      <Image
                                        source={require('./images/purplerect.png')}
                                        style={{ width: 64, height: 64, marginLeft: 40}}
                                      />
                                    </View>
    
                                    <View>
                                        <Text style={{marginLeft: 17, fontSize: 14, fontWeight: '500', color: '#562DC4'}}>{item.get('Message')}</Text>
                                    </View>
                             </View>
    
                             <View style={{flexDirection: 'row', marginTop: 50}}>
                                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                        <View>
                                          <Image
                                            source={require('./images/Heart.png')}
                                            style={{ width: 16, height: 14, marginLeft: 40}}
                                          />
                                        </View>
    
                                        <Text style={{fontSize: 14, color: '#B5CDFE', marginLeft: 11}}>Price: </Text>
                                        <Text style={{fontSize: 14, color: '#B5CDFE', marginLeft: 11}}>{item.get('Price')}</Text>
                                    </View>
    
                                    {/* <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 20}}>
                                        <View>
                                          <Image
                                            source={require('./images/path110.png')}
                                            style={{ width: 12, height: 16, marginLeft: 40}}
                                          />
                                        </View>
    
                                        <TouchableOpacity onPress={() => alert('Added to Cart Successfully')}>
                                            <Text style={{fontSize: 14, color: '#B5CDFE', marginLeft: 11}}>Add to Cart</Text>
                                        </TouchableOpacity>
                                    </View> */}
                             </View>
                       </View>
                </View>
            )
        })
    }

    noCart(){
      return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', justifyContent: 'center', marginTop: 200}}>
              <Text>Cart Empty, contributions are most welcome</Text>
        </View>
      )
    }
    render(){
        return(
            <View style={{flex: 1, marginHorizontal: 19}}>
                     <View style={{height: 50, marginTop: 35, flexDirection: 'row', alignItems: 'center', width: phonewidth}}>
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
                        source={require('./images/weShare.png')}
                        style={{ width: 150, height: 30, marginLeft: 71}}
                      />
                    </View>

                  

                    <View>
                      <Image
                        source={require('./images/notification.png')}
                        style={{ width: 20, height: 20, marginLeft: 85}}
                      />
                    </View>
                 </View>

                 <View style={{flex: 1}}>

                        <View style={{flex: 0.9, marginTop: 30}}>
                            <ScrollView>
                                        {this.props.route.params.cart.length > 0 ? this.showMyCart() : this.noCart()}
                            </ScrollView>
                        </View>

                        <View style={{flex: 0.1,}}>
                            <View style={{ flexDirection: 'row' , alignItems: 'center'}}>
                                <View>
                                   <TouchableOpacity onPress={() => this.props.navigation.replace('rfeed')}>
                                        <Image
                                            source={require('./images/back.png')}
                                            style={{ width: 20, height: 20, marginTop: 10 }}
                                        />
                                   </TouchableOpacity>
                                </View>

                                <View>
                                    <View style={{width: 240, height: 50, backgroundColor: '#7874D5', borderRadius: 20, marginLeft: 55, alignItems: 'center', justifyContent: 'center'}}>
                                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                                
                                                    <Image
                                                        source={require('./images/success.png')}
                                                        style={{ width: 22, height: 22 }}
                                                      />
                                                     <TouchableOpacity onPress={() => this.props.navigation.navigate('payment')}>
                                                      <Text style={{fontWeight: '500', fontSize: 14, color: '#FFFFFF', marginLeft: 10}}>Confirm</Text>
                                                    </TouchableOpacity>
                                            </View>
                                    </View>
                                </View>

                                

                            </View>
                        </View>
                 </View>

            </View>
        )
    }
}

export default function(){
    const route = useRoute()
    const navigation = useNavigation()
    return <ShoppingCart route={route} navigation={navigation} />
}


