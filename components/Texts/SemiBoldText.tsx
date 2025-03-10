import React from 'react';
import { Text, TextProps, StyleProp, TextStyle } from 'react-native';

interface SemiBoldTextProps extends TextProps {
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
}

export const SemiBoldText = ({ style = {}, children } : SemiBoldTextProps) => (
    <Text style={[{ fontFamily: 'InterSemiBold' }, style]} >
        {children}
    </Text>
);