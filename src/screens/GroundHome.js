import React from 'react'
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native'
import { TextInput, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'
import Icon from 'react-native-vector-icons/Ionicons'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

const GroundHome = () => {
    return (
        <View style={styles.root}>
            <View style={styles.bar}>
                <View style={styles.pro}>
                    <Icons
                        name='face-man-profile' size={30} color='white' />
                </View>
                <View style={styles.bar1}>
                    <View style={{ width: '50%' }}>
                        <Text style={styles.bartext}>Hi User</Text>
                    </View>

                    <View style={styles.not}>
                        <Icon name="notifications" size={30} color='white' />
                    </View>
                </View>
            </View>
            <LinearGradient style={styles.lg}
                colors={["rgba(0,164,109,0.4)", "transparent"]}>
                <View style={styles.srch}>
                    <TextInput placeholder="Search"
                        placeholderTextColor="#b1e5d3" style={styles.srcht} />
                </View>
            </LinearGradient>
            <ScrollView style={styles.sc} horizontal
                showsHorizontalScrollIndicator={false}>
                <TouchableOpacity style={styles.to}>
                    <Image
                        source={require('../../assets/images/ground.jpeg')}
                    />
                    <View style={styles.tos}>
                        <Text style={styles.tot}>Enter your Ground</Text>
                    </View>

                </TouchableOpacity>
                <TouchableOpacity style={styles.to}>
                    <Image
                        source={require('../../assets/images/ground.jpeg')}
                    />
                    <View style={styles.tos}>
                        <Text style={styles.tot}>Enter your Ground</Text>
                    </View>

                </TouchableOpacity>
                <TouchableOpacity style={styles.to}>
                    <Image
                        source={require('../../assets/images/ground.jpeg')}
                    />
                    <View style={styles.tos}>
                        <Text style={styles.tot}>Enter your Ground</Text>
                    </View>

                </TouchableOpacity>
                <TouchableOpacity style={styles.to}>
                    <Image
                        source={require('../../assets/images/ground.jpeg')}
                    />
                    <View style={styles.tos}>
                        <Text style={styles.tot}>Enter your Ground</Text>
                    </View>

                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: "#FFF",
        flex: 1
    },
    bar: {
        backgroundColor: "#00a46c",
        height: "28%",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingHorizontal: 20
    },
    pro: {
        width: "50%", alignItems: 'flex-start', marginTop: '15%'
    },
    not: {
        width: "50%", alignItems: "flex-end", marginTop: -125
    },
    bar1: {
        flexDirection: "row",
        alignItems: "center",
        //marginTop:25,
        width: "100%"
    },
    bartext: {
        fontSize: 28,
        color: "#FFF",
        fontWeight: "bold",
        marginTop: 50,
    },
    lg: {
        left: 0,
        right: 0,
        height: 80,
        marginTop: -45,
    },
    srch: {
        backgroundColor: "#FFF",
        paddingVertical: 8,
        paddingHorizontal: 20,
        marginHorizontal: 20,
        borderRadius: 15,
        marginTop: 25,
        flexDirection: "row",
        alignItems: "center"
    },
    srcht: {
        fontWeight: "bold",
        fontSize: 18,
        width: 260
    },
    to: {
        height: 300,
        elevation: 2,
        backgroundColor: "#FFF",
        marginLeft: 20,
        marginTop: 20,
        borderRadius: 15,
        marginBottom: 10,
        width: 160
    },
    tos: {
        flexDirection: "row",
        paddingTop: 10,
        paddingHorizontal: 10
    },
    tot: {
        fontWeight: "bold"
    },
    sc: {
        height: 400,
    },
    lg1: {
        position: "absolute",
        left: 0,
        right: 0,
        height: 100,
        marginTop: 150,
        top: 0
    },
})

export default GroundHome