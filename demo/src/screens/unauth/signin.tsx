import { HeaderContainer, InputWithLabel, LongTextButton, ScreenContainer } from "@/components"
import { View } from "react-native"
import React, { useState } from "react"
import { useUser } from "@/context";
import { login } from "@/services";

function Signin({ navigation, route }: any) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { setToken } = useUser();



    return (
        <ScreenContainer>
            <HeaderContainer
                title="Signin"
                showBack={false}
            />
            <View>
                <InputWithLabel
                    label="Email"
                    onChangeText={setEmail}
                    value={email}
                    placeholder="Please enter your email"
                />
                <InputWithLabel
                    label="Password"
                    onChangeText={setPassword}
                    value={password}
                    placeholder="Please enter your password"
                />
                <LongTextButton
                    text="Signin"
                    onPress={() => {
                        login(email, password).then(res => {
                            if (res) {
                                setToken(res.token);
                            }
                        }).catch(err => {
                            console.log("Error singin in", err)
                        })
                    }}
                />
                <LongTextButton
                    text="Signup"
                    onPress={() => {
                        navigation.navigate("signup")
                    }}
                />
            </View>
        </ScreenContainer>
    )
}



export default Signin