import { COLORS } from '@/constants/Colors';
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Animated, { useAnimatedStyle, withSpring, withTiming, useSharedValue } from 'react-native-reanimated';

const { width } = Dimensions.get('window');
const isSmallScreen = width <= 620;

type ScoreAnimationProps = {
  homeScore: number;
  awayScore: number;
};

function ScoreAnimation({ homeScore, awayScore }: ScoreAnimationProps) {
  return (
    <View style={styles.score}>
      <AnimateScore score={homeScore} />
      <Text style={styles.colon}>:</Text>
      <AnimateScore score={awayScore} />
    </View>
  );
}

type AnimateScoreProps = {
  score: number;
};

const AnimateScore = React.memo(({ score }: AnimateScoreProps) => {
  const animatedValue = useSharedValue(1);
  const [prevScore, setPrevScore] = React.useState(score);

  React.useEffect(() => {
    if (prevScore !== score) {
      animatedValue.value = 0;
      animatedValue.value = withSpring(1, { stiffness: 100, damping: 30 });
      setPrevScore(score);
    }
  }, [score, prevScore]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: animatedValue.value,
      transform: [
        { translateY: (1 - animatedValue.value) * (isSmallScreen ? 17 : 24) },
      ],
    };
  });

  return (
    <View style={styles.scoreContainer}>
      <Animated.Text style={[styles.scoreText, animatedStyle]}>
        {score}
      </Animated.Text>
    </View>
  );
});

const styles = StyleSheet.create({
  score: {
    flexDirection: 'row',
    alignItems: 'center',
    height: isSmallScreen ? 17 : 24,
    
  },
  scoreContainer: {
    width: isSmallScreen ? 20 : 30,
    height: isSmallScreen ? 17 : 24,
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreText: {
    fontSize: isSmallScreen ? 14 : 20,
    lineHeight: isSmallScreen ? 17 : 24,
    fontWeight: 'bold',
    color: COLORS.primary
  },
  colon: {
    fontSize: isSmallScreen ? 14 : 20,
    lineHeight: isSmallScreen ? 17 : 24,
    fontWeight: 'bold',
    marginHorizontal: 2,
    color: COLORS.primary
  },
});

export default ScoreAnimation;
