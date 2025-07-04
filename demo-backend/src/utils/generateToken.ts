import jwt from 'jsonwebtoken';

export const generateToken = (userId: string): string => {
    return jwt.sign({ userId }, process.env.JWT_SECRET as string, {
        expiresIn: '7d',
    });
};
