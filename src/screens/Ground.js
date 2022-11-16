import React from 'react'
import {View, Text, Image, ImageBackground} from 'react-native'
import {TextInput,ScrollView,TouchableOpacity} from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'
import Icon from 'react-native-vector-icons/Ionicons'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

const Ground = () => {
  return (
    <View style={{
        backgroundColor:"#FFF",
        flex:1
    }}>
       <View style={{
           backgroundColor:"#00a46c",
           height:"22%",
           borderBottomLeftRadius:20,
           borderBottomRightRadius:20,
           paddingHorizontal:20
       }}>
        <View style={{width:"50%", alignItems:'flex-start', marginTop:'5%'}}>
        <Icons
                name='face-man-profile' size={30} color='white'
           />
           </View>
           <View style={{
               flexDirection:"row",
               alignItems:"center",
               width:"100%"
           }}>
            
               <View>
                    <Text style={{
                        fontSize:28,
                        color:"#FFF",
                        fontWeight:"bold",
                        marginLeft:'35%',
                        marginTop:-10,
                    }}>Grounds</Text>
                    <Text style={{
                        fontSize:18,
                        marginLeft:'10%',
                        color:"#FFF",
                        fontWeight:'bold',
                        marginTop: -10,
                    }}>
                        Pick a Ground with just one click</Text>
               </View>
               <View style={{width:"10%",alignItems:"flex-end", marginTop:-60}}>
                
                    <Icon name="notifications" size={30} color='white'/>
                    
               </View>
           </View>
           </View>
       <View>
       <View style={{
                   backgroundColor:"white",
                   paddingVertical:25,
                   paddingHorizontal:20,
                   marginHorizontal:20,
                   borderRadius:15,
                   marginTop:0,
                   flexDirection:"row",
                   alignItems:"center"
               }}>
                   <TextInput
                        placeholder="Search"
                        placeholderTextColor="#b1e5d3"
                        style={{
                            fontWeight:"bold",
                            marginTop:-30,
                            fontSize:18,
                            width:260
                        }}
                   />
               </View>
       </View>
        <ScrollView 
                    vertical
                    showsVerticalScrollIndicator={false}
                    style={{height:400}}
                >

                    <TouchableOpacity 
                        //onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:200,
                            elevation:3,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:375,
                        }}
                    >
                         <Image
                            source={require('../../assets/images/ground.jpeg')}
                        /> 
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>RLCA(Rashid Latif Cricket Academy)</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#00a46c",
                                paddingLeft:100
                            }}>4k Pkr</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        //onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:200,
                            elevation:3,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:375,
                        }}
                    >
                         <Image
                            source={require('../../assets/images/ground.jpeg')}
                        /> 
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>EidGaah Ground (North Nazimabad)</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#00a46c",
                                paddingLeft:100
                            }}>4k Pkr</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        //onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:200,
                            elevation:3,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:375,
                        }}
                    >
                         <Image
                            source={require('../../assets/images/ground.jpeg')}
                        /> 
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>TMC (F. B. Area)</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#00a46c",
                                paddingLeft:200
                            }}>4k Pkr</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        //onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:200,
                            elevation:3,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:375,
                        }}
                    >
                         <Image
                            source={require('../../assets/images/ground.jpeg')}
                        /> 
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>Al-Farooq Ground</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#00a46c",
                                paddingLeft:200,
                            }}>4k Pkr</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        //onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:200,
                            elevation:3,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:375,
                        }}
                    >
                         <Image
                            source={require('../../assets/images/ground.jpeg')}
                        /> 
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>Annu Bhai Park</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#00a46c",
                                paddingLeft:200,
                            }}>4k Pkr</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        //onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:200,
                            elevation:3,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:375,
                        }}
                    >
                         <Image
                            source={require('../../assets/images/ground.jpeg')}
                        /> 
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>National Stadium</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#00a46c",
                                paddingLeft:200,
                            }}>20k Pkr</Text>
                        </View>
                    </TouchableOpacity>
                    </ScrollView>       
                
        </View>
  )
}

export default Ground