import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "../screens/Profile";
import StackNavigator from "./StackNavigator";
import Logout from "../screens/Logout";

const Drawer =  createDrawerNavigator()

export default class DrawerNavigator extends React.Component{
    render(){
        return(
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={StackNavigator}/>
                <Drawer.Screen name="Profile" component={Profile}/>
                <Drawer.Screen name="Logout" component={Logout}/>
            </Drawer.Navigator>
        )
    }
}