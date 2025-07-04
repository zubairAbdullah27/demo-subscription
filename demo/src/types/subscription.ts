export type SubscriptionType = 'monthly' | 'yearly' | 'trial';

export interface Subscription {
    valid: boolean;
    validUntil?: Date;
    subscriptionType?: SubscriptionType;
    productId?: string;
    transactionId?: string;
}


export interface ReceiptResponse {
    success: boolean;
    subscribed: boolean;
    receipt: Subscription;
}
