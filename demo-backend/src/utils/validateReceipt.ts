interface ValidatedReceipt {
  valid: boolean;
  validUntil?: Date;
  subscriptionType?: 'weekly' | 'monthly' | 'yearly';
  productId?: string;
  transactionId?: string;
}

const getDurationDays = (type: 'weekly' | 'monthly' | 'yearly') => {
  switch (type) {
    case 'weekly': return 7;
    case 'monthly': return 30;
    case 'yearly': return 365;
  }
};

export const validateReceipt = (
  receipt: string,
  platform: 'ios' | 'android'
): ValidatedReceipt => {
  if (!receipt || receipt.length < 10) {
    return { valid: false };
  }

  const now = new Date();
  const lower = receipt.toLowerCase();

  let subscriptionType: 'weekly' | 'monthly' | 'yearly' | null = null;

  if (lower.includes('weekly')) subscriptionType = 'weekly';
  else if (lower.includes('monthly')) subscriptionType = 'monthly';
  else if (lower.includes('yearly')) subscriptionType = 'yearly';

  if (!subscriptionType) return { valid: false };

  const days = subscriptionType === 'weekly'
    ? 7
    : subscriptionType === 'monthly'
      ? 30
      : 365;

  return {
    valid: true,
    validUntil: new Date(now.getTime() + days * 24 * 60 * 60 * 1000),
    subscriptionType,
    productId: `com.example.${platform}.${subscriptionType}`,
    transactionId: `${platform}_txn_${Date.now()}`,
  };
};

