import React, { ReactNode } from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ScreenContainerProps {
    children: ReactNode;
    style?: ViewStyle;
    edges?: ('top' | 'right' | 'bottom' | 'left')[];
}

export const ScreenContainer: React.FC<ScreenContainerProps> = ({
    children,
    style,
    edges = ['top', 'bottom'], // default safe area edges
}) => {
    return (
        <SafeAreaView style={[styles.container, style]} edges={edges}>
            {children}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff', // default background
        paddingHorizontal: 16,
    },
});
