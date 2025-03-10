import { useState, useCallback } from 'react';
import  { useAnimatedStyle, withTiming, useSharedValue } from 'react-native-reanimated';

export const useAccordion = (initiallyExpanded = false) => {
  const [isExpanded, setIsExpanded] = useState(initiallyExpanded);
  const heightValue = useSharedValue(initiallyExpanded ? 1 : 0);
  const [contentHeight, setContentHeight] = useState(0);

  const toggleAccordion = useCallback(() => {
    setIsExpanded(!isExpanded);
    heightValue.value = withTiming(isExpanded ? 0 : 1, { duration: 300 });
  }, [isExpanded, heightValue]);

  const animatedStyle = useAnimatedStyle(() => ({
    height: heightValue.value * contentHeight,
    opacity: heightValue.value,
  }));


  const onLayout = (event: any) => {
    const { height } = event.nativeEvent.layout;
    setContentHeight(height);
  };


  return {
    isExpanded,
    toggleAccordion,
    onLayout,
    animatedStyle
  };
};
