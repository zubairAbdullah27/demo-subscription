import { useUser } from "@/context"
import { AuthStack } from "./auth";
import { UnAuthStack } from "./unauth";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

const MainNavigator = () => {
    const { isLoggedIn } = useUser();

    return (
        <NavigationContainer>
            {
                isLoggedIn ?
                    <AuthStack /> :
                    <UnAuthStack />
            }
        </NavigationContainer>
    )
}

export default MainNavigator;