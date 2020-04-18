import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image
}from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';


phonewidth = Dimensions.get('window').width
export default class RequestFeed extends Component{

   async fetchAllRequests(){
//    var gameScore = Parse.Object.extend('Request')
//    var query = new Parse.Query(gameScore)
//    const results = await query.find();

    const results = await Parse.Cloud.run('FetchRequest')

   this.setState({
       requestData: results
   })
}

  state={
      requestData: [],
      myCart: []
  }

  addtoCart(item){

    this.setState({
      myCart: [item, ...this.state.myCart]
    })
  }

  async componentDidMount(){
    this.fetchAllRequests()

    let query = new Parse.Query('Request');
    let subscription = await query.subscribe();

    subscription.on('open', () => {
      console.log('subscription opened');
     });

     subscription.on('create', (object) => {
        var arr = this.state.requestData
        // arr.push(object)


        this.setState({
            requestData: [object, ...this.state.requestData]
        })
    });
  }

   showData =() =>{
    return this.state.requestData.map((item, index) =>{
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

                                    <Text style={{fontSize: 14, color: '#B5CDFE', marginLeft: 11}}>Support Cause</Text>
                                </View>

                                <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 20}}>
                                    <View>
                                      <Image
                                        source={require('./images/path110.png')}
                                        style={{ width: 12, height: 16, marginLeft: 40}}
                                      />
                                    </View>

                                    <TouchableOpacity onPress={() => {
                                      this.addtoCart(item)
                                      alert('Added to Cart Successfully')
                                    }}>
                                        <Text style={{fontSize: 14, color: '#B5CDFE', marginLeft: 11}}>Add to Cart</Text>
                                    </TouchableOpacity>
                                </View>
                         </View>
                   </View>
            </View>
        )
    })
  }

  render(){
    console.log('cart count: ' + this.state.myCart.length)
    Parse.setAsyncStorage(AsyncStorage);
    Parse.initialize("myAppId");
    Parse.serverURL = 'http://localhost:1337/parse';
    return(
      <View style={styles.container}>
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
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('cart',{
                        cart: this.state.myCart
                      })}>
                          <Image
                            source={require('./images/cart.png')}
                            style={{ width: 26, height: 29, marginLeft: 27}}
                          />
                      </TouchableOpacity>
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

              <View style={{flex: 1, marginTop: 1, marginHorizontal: 19}}>
                  <ScrollView>
                        {this.showData()}
                  </ScrollView>
                    
              </View>

              
                  <View style={{position: 'absolute', marginLeft: 12, marginTop: 820, marginLeft: 350 }}>
                    <TouchableOpacity onPress={() =>this.props.navigation.navigate('feed2')}>
                      <Image
                        source={require('./images/add.png')}
                        style={{ width: 51, height: 51}}
                      />
                    </TouchableOpacity>
                  </View>
              
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  fontheader:{
    fontSize: 17,
    color: 'black'
  }
})