import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Match } from '../../types';
import { MatchCard } from '../../components/MatchCard/MatchCard';
import { SkeletonCard } from '../../components/SkeletonCard/SkeletonCard';

interface MatchListProps {
  style?: object;
  loading: boolean;
  matches: Match[];
}

const { width } = Dimensions.get('window');
const isSmallScreen = width <= 620;

export const MatchList = ({ style = {}, loading, matches }: MatchListProps) => {

  const data = loading 
    ? Array.from({ length: 7 }, (_, i) => i) 
    : matches;

  return (
    <View style={[styles.list, style]}>
      {data.map((item, index) => (
        <React.Fragment key={typeof item === 'number' ? `skeleton-${index}` : item.title}>
          {index > 0 && <View style={styles.separator} />}
          {typeof item === 'number' ? <SkeletonCard /> : <MatchCard match={item} />}
        </React.Fragment>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    width: '100%',
  },
  contentContainer: {
    flexGrow: 1,
  },
  separator: {
    height: isSmallScreen ? 8 : 12,
  },
});
