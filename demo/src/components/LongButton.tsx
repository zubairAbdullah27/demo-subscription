import React from 'react';
import { TouchableOpacity, StyleSheet, Text, ViewStyle, TextStyle } from 'react-native';
import { fontSize, vscale, hscale } from "@/helper"

interface LongTextButtonProps {
  text: string;
  onPress: () => void;
  backgroundColor?: string;
  textColor?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
}

export const LongTextButton: React.FC<LongTextButtonProps> = ({
  text,
  onPress,
  backgroundColor = '#007AFF',
  textColor = '#fff',
  style,
  textStyle,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.button,
        { backgroundColor: disabled ? '#ccc' : backgroundColor },
        style,
      ]}
    >
      <Text style={[styles.text, { color: textColor }, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    paddingVertical: vscale(14),
    borderRadius: hscale(8),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: vscale(5),
  },
  text: {
    fontSize: fontSize(16),
    fontWeight: '600',
    textAlign: 'center',
  },
});

