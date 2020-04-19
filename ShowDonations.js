import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    TextInput
}from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import { useRoute, useNavigation } from '@react-navigation/native';

class ShowDonations extends Component{

    state={
        donations: []
    }

    sendRequest = async() =>{
        params={
            name: 'Lucy',
            message: this.props.route.params.req,
            category: this.props.route.params.hashtag,
            username: 'Lucifer',
            price: 20,
            info: this.props.route.params.info,
            type: 'request'
        }

        const resp = await Parse.Cloud.run('AddRequest', params)

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

    async componentDidMount(){
        params={
            category: this.props.route.params.hashtag
        }
        const response = await Parse.Cloud.run('categorySearch', params)

        this.setState({
            donations: response
        })
    }


    showData =() =>{
        return this.state.donations.map((item, index) =>{
           
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
                                          <Image
                                            source={require('./images/gift.png')}
                                            style={{ width: 18, height: 18, marginLeft: 110}}
                                          />
                                         </View>
    
                                      
                                        <TouchableOpacity onPress={() => alert('Donation accepted')}>
                                                 <Text style={{fontSize: 14, color: '#8E8E8E', marginLeft: 11}}>Accept Donations</Text>
                                        </TouchableOpacity>
                                       
                                    </View>
    
                                    {/* <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 20}}>
                                        <View>
                                          <Image
                                            source={require('./images/basket_heart.png')}
                                            style={{ width: 18, height: 18, marginLeft: 40}}
                                          />
                                        </View>
    
                                        <TouchableOpacity onPress={() => {
                                          
                                          alert('Added to Box Successfully')
                                        }}>
                                            <Text style={{fontSize: 14, color: '#8E8E8E', marginLeft: 11}}>Add to Box</Text>
                                        </TouchableOpacity>
                                    </View> */}
                             </View>
                             <TextInput 
                             style={{height: 1, width: 370, borderColor: 'black', borderBottomWidth: 0.5, marginTop: 10}}/>
                       </View>
                </View>
            )
        })
      }

      nothingFound(){
          return(
              <View style={{flex: 1}}>
                  <Text>No donation found</Text>
              </View>
          )
      }

    render(){
        Parse.setAsyncStorage(AsyncStorage);
        Parse.initialize("myAppId");
        Parse.serverURL = 'http://localhost:1337/parse';
        return(
            <View style={{flex: 1}}>
                    <View style={{ height: 50, marginLeft: 30, marginTop: 35, flexDirection: 'row', alignItems: 'center', width: phonewidth }}>
                        <View>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                <Image
                                    source={require('./images/back.png')}
                                    style={{ width: 20, height: 20 }}
                                />
                            </TouchableOpacity>
                            {/* <Image
                                source={require('./images/man.png')}
                                style={{ width: 16, height: 16, position: 'absolute', marginLeft: 12, marginTop: 10 }}
                            /> */}
                        </View>



                        <View>
                            <Image
                                source={require('./images/weShare.png')}
                                style={{ width: 150, height: 30, marginLeft: 71 }}
                            />
                        </View>



                        <View>
                            {/* <Image
                                source={require('./images/search.png')}
                                style={{ width: 20, height: 20, marginLeft: 85 }}
                            /> */}
                        </View>
                    </View>

                    <Text style={styles.txt1}>Some of the donations, based upon your request</Text>

                    <View style={{flex: 1, marginTop: 20, marginLeft: 20, marginRight: 20}}>

                        <View style={{flex: 0.85}}>
                                <ScrollView>
                                    {this.state.donations.length > 0 ? this.showData() : this.nothingFound()}
                                </ScrollView>
                        </View>

                        <View style={{flex: 0.15, justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={styles.txt1}>Nothing matched your requirements</Text>

                                <View style={styles.btn}>
                                    <TouchableOpacity onPress={() => {
                                        this.sendRequest()
                                        this.props.navigation.replace('rfeed')
                                        alert('Request made succesfully')
                                    }}>
                                        <Text style={styles.txt2}>Request</Text>
                                    </TouchableOpacity>
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
    return <ShowDonations  route={route} navigation={navigation}/>
}

const styles = StyleSheet.create({
    txt1:{
        color: '#8E8E8E',
        fontSize: 14,
        fontWeight: '500',
        marginTop: 15,
        marginLeft: 20
    },
    btn:{
        backgroundColor: '#7874D5',
        width: 200,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txt2:{
        fontSize: 14,
        color: '#FFFFFF',
        fontWeight: '500'
    },
    txt1:{
        color: '#8E8E8E',
        fontSize: 12,
        fontWeight: '500',
        marginTop: 15,
        marginLeft: 20
    },
})