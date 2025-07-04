import React from "react";
import Home from "./home";
import Subscription from "./subscription";


import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Screen, Navigator } = createNativeStackNavigator();

export const AuthStack = () => (
    <Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="home"
    >
        <Screen name="home" component={Home} />
        <Screen name="subscription" component={Subscription} />
    </Navigator>
)