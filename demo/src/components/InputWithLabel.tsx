import React from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TextInputProps,
    ViewStyle,
    TextStyle,
} from 'react-native';
import { fontSize, vscale, hscale } from '@/helper';

interface InputWithLabelProps extends TextInputProps {
    label: string;
    containerStyle?: ViewStyle;
    inputStyle?: TextStyle;
    error?: string;
}

export const InputWithLabel: React.FC<InputWithLabelProps> = ({
    label,
    containerStyle,
    inputStyle,
    error,
    ...inputProps
}) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={[styles.input, inputStyle]}
                placeholderTextColor="#999"
                {...inputProps}
            />
            {!!error && <Text style={styles.error}>{error}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: vscale(10)
    },
    label: {
        fontSize: fontSize(14),
        marginBottom: vscale(4),
        color: '#333',
        fontWeight: '500',
        paddingVertical: vscale(5),
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: hscale(6),
        paddingVertical: vscale(10),
        paddingHorizontal: hscale(12),
        fontSize: fontSize(14),
        color: '#000',
    },
    error: {
        color: '#e74c3c',
        fontSize: fontSize(12),
        marginTop: vscale(4),
    },
});
