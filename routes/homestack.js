import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../src/screens/SignIn";
import SignUp from "../src/screens/SignUp";
import ForgotPassword from "../src/screens/ForgotPassword";
import Home from "../src/screens/Home";
import Ground from "../src/screens/Ground";
 
const Stack = createNativeStackNavigator();

export const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Ground" component={Ground}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};