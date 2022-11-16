import React from 'react'
import {View, Text, Image, ImageBackground} from 'react-native'
import {TextInput,ScrollView,TouchableOpacity} from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'
import Icon from 'react-native-vector-icons/Ionicons'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

const RLCA = () => {
  return (
    <View style={{
        backgroundColor:"#FFF",
        flex:1
    }}>
       <View style={{
           backgroundColor:"#00a46c",
           height:"20%",
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
                        marginLeft:'35%',
                        marginTop:-25,
                    }}>Grounds</Text>
                    <Text style={{
                        fontSize:18,
                        marginLeft:'10%',
                        color:"#FFF",
                        fontWeight:'bold',
                        marginTop: -5,
                    }}>
                        Pick a Ground with just one click</Text>
               </View>
               <View style={{width:"10%",alignItems:"flex-end", marginTop:-60}}>
                
                    <Icon name="notifications" size={30} color='white'/>
                    
               </View>
               
           </View>
           
           </View>
           <View>
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
                            marginLeft:15,
                            borderRadius:15,
                            //marginBottom:20,
                            marginTop:10,
                            width:330,
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
                    </ScrollView>
               </View>
           </View>

);
}
export default RLCA