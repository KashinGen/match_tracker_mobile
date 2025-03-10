import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Player } from '../../types';
import { UserBadge } from '../UserBadge/UserBadge';
import { COLORS } from '@/constants/Colors';
import { MeduimText } from '../Texts/MeduimText';
import { SemiBoldText } from '../Texts/SemiBoldText';


interface TeamInfoProps {
  style?: object;
  place: number;
  players: Player[];
  points: number;
  total_kills: number;
}

const { width } = Dimensions.get('window');
const isSmallScreen = width <= 620;

export const TeamInfo = (props: TeamInfoProps) => {
  const { style, place, players, points, total_kills } = props;

  return (
    <View style={[styles.wrapper, style]}>
      <View style={styles.users}>
        {players.map((player) => (
          <UserBadge key={player.username} {...player} style={styles.userBadge} />
        ))}
      </View>
      <View style={styles.row}>
        <View style={styles.info}>
          <MeduimText style={styles.label}>Points:</MeduimText>
          <SemiBoldText style={styles.count}>{points}</SemiBoldText>
        </View>
        <View style={styles.hr} />
        <View style={styles.info}>
          <MeduimText style={styles.label}>Место:</MeduimText>
          <SemiBoldText style={styles.count}>{place}</SemiBoldText>
        </View>
        <View style={styles.hr} />
        <View style={styles.info}>
          <MeduimText style={styles.label}>Всего убийств:</MeduimText>
          <SemiBoldText style={styles.count}>{total_kills}</SemiBoldText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    width: '100%',
    gap: 8,
    
  },
  users: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    width: '100%',
    gap: 8,
  },
  userBadge: {
    width: '32%', // Примерно соответствует repeat(3, 1fr) с учетом gap
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.backgroundInfo,
    borderRadius: 4,
    padding: 14,
    paddingHorizontal: isSmallScreen ? 12 : 24,
  },
  hr: {
    height: 13,
    width: 1,
    backgroundColor: '#141a21',
    marginHorizontal: 4,
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    color: COLORS.primary,
  },
  label: {
    color: COLORS.labelColor,
    flexDirection: 'row', flexWrap: 'nowrap'
  },
  count: {
    color: COLORS.primary,
  },
});
