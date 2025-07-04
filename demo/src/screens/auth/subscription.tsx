import React from "react";
import { Alert, Platform, View } from "react-native";
import { HeaderContainer, LongTextButton, ScreenContainer } from "@/components";
import { submitReceipt } from "@/services/subscription";
import { useUser } from "@/context";

function Subscription({ navigation }: any) {
    const { token, subscription, setSubscription } = useUser();

    const handleSubmitReceipt = async (plan: 'weekly' | 'monthly' | 'yearly' | 'fail') => {
        if (!token) return;

        const mockReceipt =
            plan === 'fail'
                ? `${Platform.OS}_invalid_receipt_${Date.now()}`
                : `${Platform.OS}_${plan}_mock_receipt_${Date.now()}`;

        const result = await submitReceipt(mockReceipt, Platform.OS === 'ios' ? 'ios' : 'android', token);

        if (result?.valid) {
            setSubscription(result);
            Alert.alert('Success', `Your ${plan} subscription is active!`);
            navigation.goBack();
        } else {
            Alert.alert('Invalid', 'Failed to validate subscription.');
        }
    };

    type PlanType = 'weekly' | 'monthly' | 'yearly';

    const plans: PlanType[] = ['weekly', 'monthly', 'yearly'];
    const currentPlan = subscription?.valid ? subscription.subscriptionType : null;


    return (
        <ScreenContainer>
            <HeaderContainer title="Subscription" />
            <View style={{ justifyContent: "center", alignItems: "center", flex: 1, gap: 12 }}>
                {plans.map((plan) => {
                    const isActive = currentPlan === plan;

                    return (
                        <LongTextButton
                            key={plan}
                            text={`Subscribe ${plan.charAt(0).toUpperCase() + plan.slice(1)}`}
                            onPress={() => handleSubmitReceipt(plan)}
                            disabled={isActive}
                            style={{
                                backgroundColor: isActive ? '#4CAF50' : '#007AFF',
                                opacity: isActive ? 0.7 : 1,
                            }}
                        />
                    );
                })}
                <LongTextButton
                    text="Fail Subscription"
                    onPress={() => handleSubmitReceipt('fail')}
                />
            </View>
        </ScreenContainer>
    );
}

export default Subscription;
