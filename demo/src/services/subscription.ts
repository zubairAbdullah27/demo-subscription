import { api } from '@/utils';
import { Alert } from 'react-native';
import { SubscriptionType, Subscription, ReceiptResponse } from '@/types';

export const submitReceipt = async (
    receipt: string,
    platform: 'ios' | 'android',
    token: string
): Promise<Subscription | null> => {
    try {
        const res = await api.post<ReceiptResponse>(
            '/subscription/submit-receipt',
            { receipt, platform },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return res.data.receipt;
    } catch (error: any) {
        const message = error.response?.data?.error || 'Failed to load subscription.';
        console.log("Error submitting subscription receipt", message)
        return null;
    }
};

export const getSubscription = async (
    token: string
): Promise<Subscription | null> => {
    try {
        const res = await api.get<Subscription>('/subscription/getsubscription', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return res.data;
    } catch (error: any) {
        const message = error.response?.data?.error || 'Failed to load subscription.';
        console.log("Error fetching subscription", message)
        return null;
    }
};
