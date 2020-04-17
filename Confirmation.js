import React, {Component} from 'react'
import {
    View,
    Image,
    Text
}from 'react-native'

export default class Confirmation extends Component{
    render(){
        return(
            <View style={{flex: 1}}>
                    <View style={{height: 50, marginLeft: 30, marginTop: 35, flexDirection: 'row', alignItems: 'center', width: phonewidth}}>
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
                        source={require('./images/search.png')}
                        style={{ width: 20, height: 20, marginLeft: 85}}
                      />
                    </View>
                 </View>

                 <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
                        <View>
                            <Image
                                source={require('./images/search.png')}
                                style={{ width: 20, height: 20}}
                            />
                        </View>
                        <Text>Confirmed</Text>
                 </View>
            </View>
        )
    }
}