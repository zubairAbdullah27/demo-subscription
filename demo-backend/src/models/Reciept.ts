import mongoose from 'mongoose';

const receiptSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        platform: {
            type: String, enum: ['ios', 'android'],
            required: true,
        },
        receiptData: {
            type: String, required: true,
        },
        valid: {
            type: Boolean, required: true,
        },
        validUntil: {
            type: Date, required: false,
        },
        subscriptionType: {
            type: String, enum: ['weekly', 'monthly', 'yearly'], required: false,
        },
        productId: {
            type: String, required: false,
        },
        transactionId: {
            type: String, required: false,
        },
    },
    { timestamps: true }
);

export default mongoose.model('Receipt', receiptSchema);
