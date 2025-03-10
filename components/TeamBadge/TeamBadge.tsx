import { COLORS } from '@/constants/Colors';
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { SemiBoldText } from '../Texts/SemiBoldText';

interface TeamBadgeProps {
  style?: object;
  name: string;
}

const { width } = Dimensions.get('window');
const isSmallScreen = width <= 620;

export const TeamBadge = ({ style = {}, name }: TeamBadgeProps) => {
  return (
    <View style={[styles.badge, style]}>
      <Image
        source={require('@/assets/images/team-icon.png')} 
        style={styles.image}
        resizeMode="contain"
      />
      <SemiBoldText style={styles.name}>{name}</SemiBoldText>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: isSmallScreen ? 6 : 14,
  },
  image: {
    width: isSmallScreen ? 28 : 48,
    height: isSmallScreen ? 28 : 48,
  },
  name: {
    fontWeight: '600',
    color: COLORS.primary,
    fontSize: isSmallScreen ? 14 : 16, 
  },
});
