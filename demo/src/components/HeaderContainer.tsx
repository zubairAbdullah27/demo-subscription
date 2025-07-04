import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { fontSize, hscale, vscale } from '@/helper';

interface HeaderContainerProps {
    title: string;
    showBack?: boolean
}

export const HeaderContainer: React.FC<HeaderContainerProps> = ({ title, showBack=true }) => {
    const navigation = useNavigation();
    const canGoBack = navigation.canGoBack();

    return (
        <View style={styles.container}>
            {canGoBack && showBack ? (
                <TouchableOpacity style={styles.backButton} onPress={() => { navigation.goBack() }}>
                    <Text style={styles.backText}>{'< Back'}</Text>
                </TouchableOpacity>
            ) : (
                <View style={styles.placeholder} />
            )}
            <Text style={styles.title}>{title}</Text>
            <View style={styles.placeholder} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: vscale(56),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: hscale(16),
        marginBottom: 10,
    },
    title: {
        textAlign: 'center',
        fontSize: fontSize(16),
        fontWeight: '600',
        color: '#000',
    },
    backButton: {
        padding: hscale(4),
    },
    backText: {
        fontSize: fontSize(20),
        fontWeight: 'bold',
        color: '#000',
    },
    placeholder: {
        width: fontSize(20),
    },
});

