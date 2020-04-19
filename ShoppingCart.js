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

    showMyCart = () =>{
        return this.props.route.params.cart.map((item, index) =>{
            // <Text>{item.get('Message')}</Text>
            return(
               
                <View style={{flex: 1, marginTop: 5, marginHorizontal: 19}} key={index}>
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
                                          style={{ width: 3, height: 15, marginLeft: 270}}
                                        />
                                    </View>
                             </View>
    
                             <View style={{marginTop: 30, flexDirection: 'row'}}>
                                    <View>
                                      {/* <Image
                                        source={require('./images/purplerect.png')}
                                        style={{ width: 64, height: 64, marginLeft: 40}}
                                      /> */}
                                      {this.showImage(item.get('Category'))}
                                    </View>
    
                                    <View style={{marginRight: 160}}>
                                        <Text style={{marginLeft: 17, fontSize: 14, fontWeight: '500', color: '#562DC4'}}>{item.get('Message')}</Text>
                                        <Text style={{marginLeft: 17, fontSize: 12, fontWeight: '500', color: 'gray', marginTop: 10, height: 50}}>{item.get('Information')}</Text>
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
    
                                        <Text style={{fontSize: 14, color: '#8E8E8E', marginLeft: 11}}>Price: </Text>
                                        <Text style={{fontSize: 14, color: '#8E8E8E', marginLeft: 11}}>{item.get('Price')}</Text>
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
            <View style={{flex: 1}}>
                     <View style={{height: 105, flexDirection: 'row', alignItems: 'center', width: phonewidth, backgroundColor: 'white'}}>
                    <View>
                      {/* <Image 
                        source={require('./images/circle.png')}
                        style={{width: 40, height: 40, marginLeft: 19, marginTop: 19}}
                      /> */}
                      <Image
                        source={require('./images/avatar2.png')}
                        style={{ resizeMode: "cover",
                        height: 45,
                        width: 45,
                        borderWidth: 0,
                        borderRadius: 75,
                        position: 'absolute', left: 19}}
                      />
                    </View> 

                    

                    <View>
                      <Image
                        source={require('./images/mycart.png')}
                        style={{ width: 150, height: 30, marginLeft: 140, top: 20}}
                      />
                    </View>

                  

                    <View>
                      <Image
                        source={require('./images/notification.png')}
                        style={{ width: 20, height: 20, marginLeft: 85, top: 20}}
                      />
                    </View>
                 </View>

                 <View style={{flex: 1}}>

                        <View style={{flex: 0.9, marginTop: 30}}>
                            <ScrollView>
                                        {this.props.route.params.cart.length > 0 ? this.showMyCart() : this.noCart()}
                            </ScrollView>
                        </View>

                        <View style={{flex: 0.1,marginLeft: 19}}>
                            <View style={{ flexDirection: 'row' , alignItems: 'center'}}>
                                <View>
                                   <TouchableOpacity onPress={() => this.props.navigation.goBack('rfeed')}>
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
                                                     <TouchableOpacity onPress={() => this.props.navigation.navigate('delivery',{

                                                       arr: this.props.route.params.cart
                                                     })}>
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


