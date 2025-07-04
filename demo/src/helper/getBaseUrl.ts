import { Platform } from 'react-native';
import { IOS_API_URL, ANDROID_API_URL } from '@env';

export const getBaseUrl = () => {
    return Platform.OS === 'ios' ? IOS_API_URL : ANDROID_API_URL;
};
