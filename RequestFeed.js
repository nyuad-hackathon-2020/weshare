import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image,
  TextInput
}from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import { FloatingAction } from "react-native-floating-action"


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
      myCart: [],
      actions: [
        {
          text: "Request",
          name: "request",
          position: 2
        },
        {
          text: "Donate",
          name: "donate",
          position: 1
        }
        
      ]
  }

  addtoCart(item){

    this.setState({
      myCart: [item, ...this.state.myCart]
    })
  }

  async componentDidMount(){
    console.log('this is called')
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

  //   subscription.on('delete', (object) => {
  //     this.fetchAllRequests()
  // });
  }

  showImage(name){
    switch(name){
      case 'Clothes':
        return(
          <Image
            source={require('./images/clothes.jpg')}
            style={{ width: 64, height: 64, marginLeft: 40 }}
          />
        )
       

        case 'Food':
        return(
          <Image
            source={require('./images/food.jpg')}
            style={{ width: 64, height: 64, marginLeft: 40 }}
          />
        )

        case 'Electronics':
        return(
          <Image
            source={require('./images/electron.jpg')}
            style={{ width: 64, height: 64, marginLeft: 40 }}
          />
        )

        case 'Groceries':
        return(
          <Image
            source={require('./images/grocery.jpg')}
            style={{ width: 64, height: 64, marginLeft: 40 }}
          />
        )

        case 'Baby':
        return(
          <Image
            source={require('./images/baby.jpg')}
            style={{ width: 64, height: 64, marginLeft: 40 }}
          />
        )

        case 'Medicine':
          return(
            <Image
              source={require('./images/medicine.jpg')}
              style={{ width: 64, height: 64, marginLeft: 40 }}
            />
          )

        case 'Offer':
        return(
          <TouchableOpacity onPress={() => this.props.navigation.navigate('retailer')}>
            <Image
              source={require('./images/offerr.png')}
              style={{ width: 64, height: 64, marginLeft: 40 }}
            />
          </TouchableOpacity>
        )
      
    }
  }

  showAvatar(name){
    switch(name){
      case 'Harshit':
        return(
          <Image
            source={require('./images/avH.png')}
            style={{ width: 40, height: 40 }}
          />
        )

        case 'Lucy':
          return(
            <Image
              source={require('./images/avatarE.png')}
              style={{ width: 40, height: 40 }}
            />
          )

        case 'James':
        return(
          <Image
            source={require('./images/avatarJ.png')}
            style={{ width: 40, height: 40 }}
          />
        )

        case 'Neel':
        return(
          <Image
            source={require('./images/avH.png')}
            style={{ width: 40, height: 40 }}
          />
        )
    }
  }

   showData =() =>{
    return this.state.requestData.map((item, index) =>{
       
        return(
           
            <View style={{flex: 1, marginTop: 5}} key={index}>
                   <View style={{height: 20, width: phonewidth, marginBottom: 30,  height: 200}}>
                         <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <View>
                                    {/* <Image
                                      source={require('./images/circle2.png')}
                                      style={{ width: 40, height: 40}}
                                    />
                                    <Image
                                      source={require('./images/man.png')}
                                      style={{ width: 16, height: 16, position: 'absolute', marginLeft: 12, marginTop: 10}}
                                    /> */}
                                    {this.showAvatar(item.get('Name'))}
                                </View>

                                <View style={{marginLeft: 10}}>
                                  <Text style={{fontWeight: '500', fontSize: 14}}>{item.get('Name')}</Text>
                                  <Text style={{fontWeight: '500', fontSize: 10, color: '#AD92F7'}}>{item.get('username')}</Text>
                                </View>

                                <View>
                                    <Image
                                      source={require('./images/threedot.png')}
                                      style={{ width: 3, height: 15, marginLeft: 260}}
                                    />
                                </View>
                         </View>

                         <View style={{marginTop: 30, flexDirection: 'row'}}>
                                <View>
                                 
                                    {/* {item.get('Category') == 'Offer' ? <TouchableOpacity onPress={() => this.props.navigation.navigate('retailer')}>
                                      <Image
                                        source={require('./images/purplerect.png')}
                                        style={{ width: 64, height: 64, marginLeft: 40}}
                                      />
                                    </TouchableOpacity> : <Image
                                    source={require('./images/purplerect.png')}
                                    style={{ width: 64, height: 64, marginLeft: 40}}
                                  />} */}

                                  {this.showImage(item.get('Category'))}
                                 
                                </View>

                                <View style={{justifyContent: 'center', marginRight: 65}}>
                                    <Text style={{marginLeft: 17, fontSize: 14, fontWeight: '500', color: '#562DC4'}}>{item.get('Message')}</Text>
                                    <Text style={{marginLeft: 17, fontSize: 12, fontWeight: '500', color: 'gray', marginTop: 10, height: 50, marginRight: 65}}>{item.get('Information')}</Text>
                                </View>
                         </View>

                         <View style={{flexDirection: 'row', marginTop: 40}}>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <View>
                                      {item.get('Category') == 'Offer' || item.get('Type') == 'donation'
                                      ? <TouchableOpacity onPress={() => alert('Donation Accepted')}>
                                        <Image
                                       source={require('./images/gift.png')}
                                       style={{ width: 16, height: 14, marginLeft: 120}}
                                     />
                                      </TouchableOpacity> : <Image
                                        source={require('./images/Heart.png')}
                                        style={{ width: 16, height: 14, marginLeft: 40}}
                                      />
                                      }
                                    </View>

                                   {item.get('Category') == 'Offer' || item.get('Type') == 'donation' ?
                                    <TouchableOpacity onPress={() => alert('Donation Accepted')}>
                                      <Text style={{fontSize: 14, color: '#8E8E8E', marginLeft: 11}}>Accept Donations</Text>
                                    </TouchableOpacity>:
                                    <Text style={{fontSize: 14, color: '#8E8E8E', marginLeft: 11}}>Support Cause</Text>
                                   }
                                </View>

                                <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 20}}>
                                    <View>
                                      {
                                        item.get('Category') == 'Offer' || item.get('Type') == 'donation' ?null :<Image
                                         source={require('./images/basket_heart.png')}
                                         style={{ width: 18, height: 18, marginLeft: 40}}
                                       />
                                      }
                                    </View>

                                    <TouchableOpacity onPress={() => {
                                      this.addtoCart(item)
                                      alert('Added to Basket Successfully')
                                    }}>
                                        {
                                          item.get('Category') == 'Offer' || item.get('Type') == 'donation'? null :
                                          <Text style={{fontSize: 14, color: '#8E8E8E', marginLeft: 11}}>Add to Basket</Text>
                                        }
                                    </TouchableOpacity>
                                </View>
                         </View>
                         <TextInput 
                         style={{height: 1, width: 370, borderColor: 'black', borderBottomWidth: 0.5, marginTop: 10}}/>
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

             {
               this.state.myCart.length > 0 ?  <View style={{position: 'absolute', width: 14, height: 14, borderRadius: 7, marginLeft: 2, backgroundColor: 'red', marginTop: 48, marginLeft: 100, alignItems: 'center', justifyContent: 'center'}}>
               <Text style={{color: 'white', fontSize: 12, fontWeight: '500'}}>{this.state.myCart.length}</Text>
     </View> : null
             }

              <View style={{flex: 1, marginTop: 1, marginHorizontal: 19}}>
                  <ScrollView>
                        {this.showData()}
                  </ScrollView>
                    
              </View>

              
                  <View style={{position: 'absolute', marginLeft: 12, marginTop: 820, marginLeft: 350 }}>
                    <TouchableOpacity onPress={() =>this.props.navigation.navigate('feed2')}>
                      <Image
                        source={require('./images/fb2.png')}
                        style={{ width: 51, height: 51}}
                      />
                    </TouchableOpacity>
                      {/* <FloatingAction
                      animated = 'true'
                      color="#7874D5"
                        actions={this.state.actions}
                        onPressItem={name => {
                          console.log(name)
                        }}
                      /> */}
                  </View>
              
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#D8D8D8'
  },
  fontheader:{
    fontSize: 17,
    color: 'black'
  }
})
