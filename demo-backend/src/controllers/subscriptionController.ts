import { Response } from 'express';
import { AuthenticatedRequest } from '../types/express';
import Receipt from '../models/Reciept'
import { validateReceipt } from '../utils/validateReceipt';

export const submitReceipt = async (req: AuthenticatedRequest, res: Response) => {
    try {
        const userId = req.user?.id;
        const { receipt, platform } = req.body;

        const {
            valid,
            validUntil,
            subscriptionType,
            productId,
            transactionId,
        } = validateReceipt(receipt, platform);

        const receiptDoc = await Receipt.create({
            userId,
            platform,
            receiptData: receipt,
            valid,
            validUntil,
            subscriptionType,
            productId,
            transactionId,
        });
        res.json({
            success: true,
            subscribed: valid,
            receipt: receiptDoc,
        });
    } catch (err) {
        console.error('Receipt submission error:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};




export const getSubscription = async (req: AuthenticatedRequest, res: Response) => {
    try {
        const userId = req.user?.id;
        const latestReceipt = await Receipt.findOne({ userId, valid: true })
            .sort({ createdAt: -1 });
        if (!latestReceipt) {
            res.status(404).json({ error: 'No active subscription found.' });
            return
        }

        res.json({
            valid: latestReceipt.valid,
            validUntil: latestReceipt.validUntil,
            subscriptionType: latestReceipt.subscriptionType,
            productId: latestReceipt.productId,
            transactionId: latestReceipt.transactionId,
        });
    } catch (err) {
        console.error('Get subscription error:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};
