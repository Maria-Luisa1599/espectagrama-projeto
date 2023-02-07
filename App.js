import React from "react";
import { firebaseConfig } from "./config";
import firebase from "firebase";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import LoadingScreen from "./screens/loadingScreen";
import LoginScreen from "./screens/loginScreen";
import DashboardScreen from "./screens/dashboardScreen";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  DashboardScreen: DashboardScreen
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

export default function App() {
  return <AppNavigator />;
}
