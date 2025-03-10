import { COLORS } from '@/constants/Colors';
import React, { useEffect } from 'react';
import { Text, StyleSheet, useWindowDimensions } from 'react-native';
import * as Font from 'expo-font';

interface LogoProps {
  style?: object;
}

export const Logo = ({ style = {} }: LogoProps) => {
  const { width } = useWindowDimensions();
  const isSmallScreen = width <= 512;
  const loadFonts = async () => {
    await Font.loadAsync({
      'TacticSans-BlkIt': require('@/assets/fonts/TacticSans-BlkIt.ttf'),
    });
    console.log('Fonts loaded successfully');
  };
  useEffect(() => {
    loadFonts();
  }, []);
  return (
    <Text 
      style={[
        styles.title, 
        { 
          fontSize: isSmallScreen ? 28 : 32,
          lineHeight: isSmallScreen ? 28 : 32,
        },
        style
      ]}
    >
      Match Tracker
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
        color: COLORS.primary,
        fontFamily: 'TacticSans-BlkIt',
  },
});
    