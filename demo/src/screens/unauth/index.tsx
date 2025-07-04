import React from "react";
import Signin from "./signin";
import Signup from "./signup";


import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Screen, Navigator } = createNativeStackNavigator();

export const UnAuthStack = () => (
    <Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="signin"
    >
        <Screen name="signin" component={Signin} />
        <Screen name="signup" component={Signup} />
    </Navigator>
)