import { COLORS } from '@/constants/Colors';
import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import { MeduimText } from '../Texts/MeduimText';
import { SemiBoldText } from '../Texts/SemiBoldText';


interface UserBadgeProps {
  style?: object;
  username: string;
  kills: number;
}

const { width } = Dimensions.get('window');
const isSmallScreen = width <= 620;
const isMediumScreen = width <= 1785;

export const UserBadge = ({ kills, username, style = {} }: UserBadgeProps) => {
  return (
    <View style={[styles.badge, style]}>
      <View style={styles.infoWrapper}>
        <Image
          source={require('@/assets/images/user.png')} 
          style={styles.avatar}
          resizeMode="cover"
        />
        <SemiBoldText style={styles.name}>{username}</SemiBoldText>
      </View>
      <View style={styles.killsWrapper}>
        <MeduimText style={styles.label}>Убийств:</MeduimText>
        <SemiBoldText style={styles.count}>{kills}</SemiBoldText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    backgroundColor: COLORS.backgroundInfo,
    borderRadius: 4,
    padding: isSmallScreen ? 7 : 8,
    paddingHorizontal: isSmallScreen ? 12 : 24,
    flexDirection: isMediumScreen ? 'column' : 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: isSmallScreen ? 4 : 8,
    color: COLORS.primary,
  },
  infoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  killsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  avatar: {
    width: isSmallScreen ? 32 : 36,
    height: isSmallScreen ? 32 : 36,
  },
  name: {
    fontWeight: '600',
    color: COLORS.primary,
    fontSize: isSmallScreen ? 14 : 16, 
  },
  label: {
    color: COLORS.labelColor
  },
  count: {
    color: COLORS.primary,
  },
});
