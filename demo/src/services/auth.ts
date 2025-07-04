import { api } from '@/utils';
import { Alert } from 'react-native';

interface AuthResponse {
    success: boolean;
    token: string;
}

const isValidEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export const signup = async (
    name: string,
    email: string,
    password: string
): Promise<AuthResponse | null> => {
    if (!name.trim()) {
        Alert.alert('Validation Error', 'Name is required.');
        return null;
    }

    if (!isValidEmail(email)) {
        Alert.alert('Validation Error', 'Please enter a valid email.');
        return null;
    }

    if (password.length < 6) {
        Alert.alert('Validation Error', 'Password must be at least 6 characters.');
        return null;
    }

    try {
        const response = await api.post<AuthResponse>('/auth/signup', {
            name,
            email,
            password,
        });
        return response.data;
    } catch (error: any) {
        const message = error.response?.data?.error || 'Signup failed. Please try again.';
        Alert.alert('Signup Error', message);
        return null;
    }
};


export const login = async (
    email: string,
    password: string
): Promise<AuthResponse | null> => {
    if (!isValidEmail(email)) {
        Alert.alert('Validation Error', 'Please enter a valid email.');
        return null;
    }

    if (password.length < 6) {
        Alert.alert('Validation Error', 'Password must be at least 6 characters.');
        return null;
    }

    try {
        const response = await api.post<AuthResponse>('/auth/login', {
            email,
            password,
        });
        return response.data;
    } catch (error: any) {
        const message = error.response?.data?.error || 'Login failed. Please try again.';
        Alert.alert('Login Error', message);
        return null;
    }
};
