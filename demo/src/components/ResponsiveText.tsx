import React from 'react';
import { Text as RNText, TextProps as RNTextProps, StyleSheet, TextStyle } from 'react-native';
import { fontSize as getFontSize } from "@/helper";

interface ResponsiveTextProps extends RNTextProps {
    size?: number;           // base font size before scaling
    weight?: TextStyle['fontWeight'];
    color?: string;
    align?: TextStyle['textAlign'];
    numberOfLines?: number;
    style?: TextStyle | TextStyle[];
}

export const ResponsiveText: React.FC<ResponsiveTextProps> = ({
    children,
    size = 14,
    weight = 'normal',
    color = '#000',
    align = 'left',
    numberOfLines,
    style,
    ...rest
}) => {
    return (
        <RNText
            {...rest}
            numberOfLines={numberOfLines}
            style={[
                {
                    fontSize: getFontSize(size),
                    fontWeight: weight,
                    color,
                    textAlign: align,
                },
                style,
            ]}
        >
            {children}
        </RNText>
    );
};
