import React from 'react';
import { Text, TextProps, StyleProp, TextStyle } from 'react-native';

interface MediumTextProps extends TextProps {
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
}

export const MeduimText = ({ style = {}, children } : MediumTextProps) => (
    <Text style={[{ fontFamily: 'InterMedium' }, style]} >
        {children}
    </Text>
);