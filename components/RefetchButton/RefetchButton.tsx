import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import { Icon } from './Icon'; 
import { COLORS } from '@/constants/Colors';
import { SemiBoldText } from '../Texts/SemiBoldText';


interface RefetchButtonProps {
  style?: object;
  onPress: () => void;
  disabled?: boolean;
}

const { width } = Dimensions.get('window');
const isSmallScreen = width <= 512;

export const RefetchButton = ({
  style = {},
  onPress,
  disabled = false,
  ...rest
}: RefetchButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.btn,
        disabled && styles.btnDisabled,
        isSmallScreen && styles.btnFullWidth,
        style
      ]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
      {...rest}
    >
      <SemiBoldText style={styles.text}>Обновить</SemiBoldText>
      <Icon width={18} height={18} color={COLORS.primary} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: COLORS.danger,
    padding: 15,
    paddingHorizontal: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    color: COLORS.primary,
    fontSize: 18,


  },
  btnDisabled: {
    backgroundColor: COLORS.btnDisabled,
  },
  btnFullWidth: {
    // width: '100%',
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.primary,
    marginRight: 10,
  },
});
