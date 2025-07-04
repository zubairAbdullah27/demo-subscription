import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Subscription } from '@/types';
import { getSubscription } from '@/services';

interface UserContextType {
    token: string | null;
    setToken: (token: string | null) => void;
    isLoggedIn: boolean;
    subscription: Subscription | null;
    setSubscription: (subscription: Subscription | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [token, setToken] = useState<string | null>(null);
    const [subscription, setSubscription] = useState<Subscription | null>(null);

    const value: UserContextType = {
        token,
        setToken,
        isLoggedIn: !!token,
        subscription,
        setSubscription,
    };

    useEffect(() => {
        if (token) {
            getSubscription(token).then(res => {
                setSubscription(res);
            }).catch(err => {
                console.log("Error fetching subscription in use context", err)
            })
        }
        return (() => {
            setSubscription(null);
        })
    }, [token])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = (): UserContextType => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
