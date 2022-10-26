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
        <View style={{width:"50%", alignItems:'flex-start', marginTop:'15%'}}>
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
                        marginLeft:'45%',
                        marginTop:-25,
                    }}>Grounds</Text>
                    <Text style={{
                        fontSize:18,
                        marginLeft:'25%',
                        color:"#FFF",
                        fontWeight:'bold',
                    }}>
                        Pick a Ground with just one click</Text>
               </View>
               <View style={{width:"15%",alignItems:"flex-end", marginTop:-60}}>
                
                    <Icon name="notifications" size={30} color='white'/>
                    
               </View>
           </View>
           </View>
       <LinearGradient
        colors={["rgba(0,164,109,0.4)", "transparent"]}
        style={{
            left:0,
            right:0,
            height:90,
            marginTop:-80
        }}
       >
        <View style={{
                   backgroundColor:"#FFF",
                   paddingVertical:8,
                   paddingHorizontal:20,
                   marginHorizontal:20,
                   borderRadius:15,
                   marginTop:25,
                   flexDirection:"row",
                   alignItems:"center"
               }}>
                   <TextInput
                        placeholder="Search"
                        placeholderTextColor="#b1e5d3"
                        style={{
                            fontWeight:"bold",
                            fontSize:18,
                            width:260
                        }}
                   />
               </View>
            </LinearGradient>
        <ScrollView 
                    vertical
                    showsVerticalScrollIndicator={false}
                    style={{height:400}}
                >
<LinearGradient
                        colors={["rgba(0,164,109,0.09)", "transparent"]}
                        style={{
                            position:"absolute",
                            left:0,
                            right:0,
                            height:100,
                            marginTop:-100,
                            top:0
                        }}
                    />

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