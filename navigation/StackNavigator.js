import React from "react";
import PostScreen from "../screens/PostScreen";
import TabNavigator from "./TabNavigator";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator()

export default class StackNavigator extends React.Component{
    render(){
        return(
            <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={TabNavigator}/>
                <Stack.Screen name="PostScreen" component={PostScreen}/>
            </Stack.Navigator>
        )
    }
}