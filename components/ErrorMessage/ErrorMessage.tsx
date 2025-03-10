import { ERROR_UNKNOWN_MESSAGE } from '@/const';
import { COLORS } from '@/constants/Colors';
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { MeduimText } from '../Texts/MeduimText';


interface ErrorMessageProps {
  style?: object;
  error?: string;
}

export const ErrorMessage = ({
  style = {},
  error = ERROR_UNKNOWN_MESSAGE,
}: ErrorMessageProps) => {
  return (
    <View style={[styles.wrapper, style]}>
      <Image
        style={styles.icon}
        source={require('@/assets/images/error.png')} 
        resizeMode="contain"
      />
      <MeduimText style={styles.errorText}>{error}</MeduimText>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    paddingHorizontal: 24,
    backgroundColor: COLORS.backgroundMessage, 
    borderRadius: 4,
    
  },
  icon: {
    width: 20, 
    height: 20, 
    marginRight: 10, 
  },
  errorText: {
    fontSize: 18,
    fontWeight: '500',
    color: COLORS.primary,
  },
});
