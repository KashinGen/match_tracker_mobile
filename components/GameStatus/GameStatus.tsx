import React from 'react';
import { Text, StyleSheet, Dimensions } from 'react-native';

import { Status } from '@/types';
import { COLORS } from '@/constants/Colors';
import { SemiBoldText } from '../Texts/SemiBoldText';

interface GameStatusProps {
  style?: object;
  status: Status;
}

const getStyleFromStatus = (status: Status) => {
  switch (status) {
    case 'Finished':
      return styles.finished;
    case 'Scheduled':
      return styles.scheduled;
    case 'Ongoing':
      return styles.ongoing;
    default:
      return {};
  }
};

export const GameStatus = ({ style = {}, status }: GameStatusProps) => {
  return (
    <SemiBoldText style={[styles.status, getStyleFromStatus(status), style]}>
      {status}
    </SemiBoldText>
  );
};

const { width } = Dimensions.get('window');
const isSmallScreen = width <= 620;

const styles = StyleSheet.create({
  status: {
    fontSize: 12,
    fontWeight: '600',
    lineHeight: isSmallScreen ? 23 : 27,
    width: isSmallScreen ? 70 : 92,
    height: isSmallScreen ? 23 : 27,
    borderRadius: 4,
    overflow: 'hidden',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    color: COLORS.primary,
  },
  finished: {
    backgroundColor: COLORS.danger,
  },
  ongoing: {
    backgroundColor: COLORS.green,
  },
  scheduled: {
    backgroundColor: COLORS.orange,
  },
});
