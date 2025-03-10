import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withTiming, Easing } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '@/constants/Colors';



const { width } = Dimensions.get('window');
const isSmallScreen = width <= 612;



export  const SkeletonCard = () => {
  const translateX = useSharedValue(0);

  React.useEffect(() => {
    translateX.value = withRepeat(
      withTiming(width, { 
        duration: 1500, 
        easing: Easing.bezier(0.4, 0.0, 0.2, 1) 
      }),
      -1,
      false
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  return (
    <View style={[styles.container, ]}>
      <Animated.View style={[styles.gradientWrapper, animatedStyle]}>
        <LinearGradient
          colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradient}
        />
      </Animated.View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.backgroundCard,
    borderRadius: 4,
    overflow: 'hidden',
    height: isSmallScreen ? 97 : 87,
    width: '100%'

  },
  gradientWrapper: {
    ...StyleSheet.absoluteFillObject,
    width: width * 2,
  },
  gradient: {
    flex: 1,
  },
});