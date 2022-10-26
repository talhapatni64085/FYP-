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
           height:"17%",
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
                    }}>RLCA</Text>
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
</View>
);
}
export default RLCA