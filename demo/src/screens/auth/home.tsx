import { HeaderContainer, LongTextButton, ScreenContainer, ResponsiveText } from "@/components"
import { View } from "react-native"
import React from "react"
import { useUser } from "@/context"
import { mscale, vscale } from "@/helper"

function Home({ navigation, route }: any) {

    const { subscription, setToken } = useUser()

    return (
        <ScreenContainer>
            <HeaderContainer
                title="Home"
                showBack={false}
            />

            <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-start" }}>
                {subscription && (
                    <View style={{ alignItems: "center", marginBottom: vscale(15), gap: vscale(10) }}>
                        <ResponsiveText size={mscale(18)} weight="600">
                            Your Subscription
                        </ResponsiveText>
                        <ResponsiveText size={mscale(14)}>
                            Plan: {subscription.subscriptionType?.toUpperCase()}
                        </ResponsiveText>
                        <ResponsiveText size={mscale(15)}>
                            Valid Until: {subscription.validUntil
                                ? new Date(subscription.validUntil).toLocaleDateString()
                                : 'Unknown'}
                        </ResponsiveText>
                    </View>
                )}

                <LongTextButton
                    text="Premium Features"
                    onPress={() => {
                        navigation.navigate("subscription")
                    }}
                />
                <LongTextButton
                    text="Logout"
                    onPress={() => {
                        setToken(null);
                    }}
                />
            </View>


        </ScreenContainer>
    )
}



export default Home