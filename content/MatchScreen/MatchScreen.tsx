import { ErrorMessage } from '@/components/ErrorMessage/ErrorMessage';
import { Logo } from '@/components/Logo/Logo';
import { RefetchButton } from '@/components/RefetchButton/RefetchButton';
import { CustomSelect } from '@/components/Select/Select';
import { useFilter } from '@/hooks/useFilter';
import { useMatchesState } from '@/hooks/useMatchesState';
import React from 'react';
import { View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { MatchList } from '../MatchList/MatchList';


const { width } = Dimensions.get('window');
const isLargeScreen = width > 1290;
const isMediumScreen = width <= 1290 && width > 512;
const isSmallScreen = width <= 512;

export const MatchScreen = () => {
  const { selectedOption, setSelectedOption, options } = useFilter();
  const { matches, error, loading, onReset } = useMatchesState(selectedOption);

  return (
    <View style={styles.screen} >
      <View style={styles.container}>
        <View style={styles.inner}>
          <View style={styles.top}>
            <View style={[styles.controls, styles.controlsFirst]}>
              <Logo />
              {isLargeScreen && (
                <CustomSelect
                  options={options}
                  onChange={setSelectedOption}
                  value={selectedOption}
                />
              )}
            </View>
            {!isLargeScreen && (
              <View style={[styles.controls, styles.controlsSecond]}>
                <CustomSelect
                  options={options}
                  onChange={setSelectedOption}
                  value={selectedOption}
                  style={styles.fullWidth}
                />
                <RefetchButton
                  onPress={onReset}
                  disabled={loading}
                  style={styles.fullWidth}
                />
              </View>
            )}
            <View style={[styles.controls, styles.controlsLast]}>
              {error && <ErrorMessage error={error} />}
              {isLargeScreen && (
                <RefetchButton
                  onPress={onReset}
                  disabled={loading}
                />
              )}
            </View>
          </View>
          <ScrollView removeClippedSubviews={false}>
            <MatchList
              loading={loading}
              matches={matches}
            />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingVertical: isSmallScreen ? 32 : 42,

  },
  scrollContent: {
  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  inner: {
    flex: 1,
  },
  top: {
    marginBottom: 20,
    flexDirection: isLargeScreen ? 'row' : 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 20
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: isSmallScreen ? 10 : 12,
  },
  controlsFirst: {
    justifyContent: isLargeScreen ? 'flex-start' : 'center',
    width: '100%',
  },
  controlsSecond: {
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: isSmallScreen ? 'column' : 'row',
  },
  controlsLast: {
    justifyContent: isLargeScreen ? 'flex-start' : 'flex-end',
    width: '100%',
  },
  fullWidth: {
    width: '100%',
  },
});
