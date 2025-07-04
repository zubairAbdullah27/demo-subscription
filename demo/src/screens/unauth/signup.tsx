import { HeaderContainer, InputWithLabel, ScreenContainer, LongTextButton } from "@/components"
import { View } from "react-native"
import React, { useState } from "react"
import { signup } from "@/services";
import { useUser } from "@/context";

function Signup({ navigation, route }: any) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const { setToken } = useUser()

    return (
        <ScreenContainer>
            <HeaderContainer
                title="Signup"
            />
            <View>
                <InputWithLabel
                    label="Name"
                    onChangeText={setName}
                    value={name}
                    placeholder="Please enter your name"
                />
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
                    text="Signup"
                    onPress={() => {
                        signup(name, email, password).then(res => {
                            if (res) {
                                setToken(res.token);
                            }
                        }).catch(err => {
                            console.log("Error signing up", err)
                        })
                    }}
                />
                <LongTextButton
                    text="Signin"
                    onPress={() => {
                        navigation.goBack()
                    }}
                />
            </View>
        </ScreenContainer>
    )
}



export default Signup