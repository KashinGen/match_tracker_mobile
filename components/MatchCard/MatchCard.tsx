import React from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions, Text, ViewStyle, StyleProp } from 'react-native';
import { Match } from '../../types';
import { TeamBadge } from '../TeamBadge/TeamBadge';
import { GameStatus } from '../GameStatus/GameStatus';
import { TeamInfo } from '../TeamInfo/TeamInfo';
import { useAccordion } from '../../hooks/useAccordion';
import ScoreAnimation from '../ScoreAnimation/ScoreAnimation';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { Icon } from './Icon';
import { COLORS } from '@/constants/Colors';


interface MatchCardProps {
  style?: object;
  match: Match;
}

const { width } = Dimensions.get('window');
const isSmallScreen = width <= 620;
const isMediumScreen = width <= 1095;
const isLargeScreen = width <= 1220;

export const MatchCard = ({ style = {}, match }: MatchCardProps) => {
  const {     isExpanded,
    toggleAccordion,
    onLayout,
    animatedStyle } = useAccordion();
  const { status, awayScore, awayTeam, homeScore, homeTeam } = match;


  const chevronStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: withTiming(isExpanded ? '180deg' : '0deg', { duration: 300 }) }],
    };
  });

  return (
    <View style={[styles.match, style, isExpanded && styles.expanded]}>
      <TouchableOpacity
        style={[styles.header, isExpanded && styles.expandedHeader]}
        onPress={toggleAccordion}
        activeOpacity={0.7}
      >
        <View style={styles.topContent}>
          <TeamBadge name={awayTeam.name} />
          <View style={styles.scoreWrapper}>
            <ScoreAnimation
              awayScore={awayScore}
              homeScore={homeScore}
            />
            <GameStatus status={status} />
          </View>
          <TeamBadge name={homeTeam.name} />
        </View>
        {!isSmallScreen && <Animated.View style={chevronStyle}><Icon /></Animated.View>}
      </TouchableOpacity>

      <Animated.View style={[styles.info, animatedStyle]}>
        <View style={styles.content} onLayout={onLayout}>
          <TeamInfo
            place={awayTeam.place}
            players={awayTeam.players}
            points={awayTeam.points}
            total_kills={awayTeam.total_kills}
          />
          {isSmallScreen && (
            <View style={styles.versus}>
              <View style={styles.versusLine} />
              <Text style={styles.versusText}>VS</Text>
              <View style={styles.versusLine} />
            </View>
          )}
          <TeamInfo
            place={homeTeam.place}
            players={homeTeam.players}
            points={homeTeam.points}
            total_kills={homeTeam.total_kills}
          />
        </View>
      </Animated.View>
      {isSmallScreen && (
        <View style={styles.iconWrapper}>
          <Animated.View style={chevronStyle}><Icon /></Animated.View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  match: {
    borderRadius: 4,
    width: '100%',
    backgroundColor: COLORS.backgroundCard,
  },
  expanded: {},
  header: {
    padding: isSmallScreen ? 8 : 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  expandedHeader: {
    paddingBottom: isSmallScreen ? 16 : 32,
  },
  topContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  scoreWrapper: {
    alignItems: 'center',
    gap: 4,
  },
  info: {
    overflow: 'hidden',
  },
  content: {
    display: 'flex',
    flexDirection: isMediumScreen ? 'column' : 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 12,
    paddingHorizontal: isMediumScreen ? 6 : 12,
    paddingTop: isMediumScreen ? 0 : 12,
    paddingBottom: isMediumScreen ? 8 : 12,
    gap: isSmallScreen ? 8 : (isLargeScreen ? 12 : 32),
  },
  versus: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 21,
  },
  versusLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#13181f',
  },
  versusText: {
    color: '#313a47',
    paddingHorizontal: 10,
  },
  iconWrapper: {
    display: 'flex',
    paddingBottom: 8,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
  
