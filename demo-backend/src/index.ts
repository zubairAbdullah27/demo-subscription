import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';
import subscriptionRoutes from './routes/subscriptionRoutes';

dotenv.config();
const app = express();

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/subscription', subscriptionRoutes);

mongoose.connect(process.env.MONGO_URI!)
    .then(() => {
        app.listen(4000, () => console.log('Server running on port 4000'));
    })
    .catch((err) => console.error('MongoDB connection error:', err));

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong', error: err.message });
});
