import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Modal, StyleSheet, Dimensions } from 'react-native';
import { SelectOption } from '../../types';
import { Icon } from './Icon';
import { COLORS } from '@/constants/Colors';
import { MeduimText } from '../Texts/MeduimText';

interface CustomSelectProps {
  style?: object;
  options: SelectOption[];
  placeholder?: string;
  onChange: (selectedOption: SelectOption) => void;
  value: SelectOption;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  placeholder = 'Select an option',
  onChange,
  value,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [dropdownTop, setDropdownTop] = useState(0);
  const selectRef = useRef<View>(null);
  
  const toggleOpen = () => setIsOpen(!isOpen);

  const handleOptionPress = (option: SelectOption) => {
    onChange(option);
    setIsOpen(false);
  };

    const openDropdown = () => {
    if (selectRef.current) {
      selectRef.current.measure((fx, fy, width, height, px, py) => {
        setDropdownTop(py + height - 10);
      });
    }
    setIsOpen(true);
  };


  const iconStyles = [
    styles.icon,
    isOpen && { transform: [{ rotate: '180deg' }] },
  ].filter(Boolean); 
  
  const filteredIconStyles = iconStyles.filter(style => style !== false);


  return (
    <View style={styles.selectContainer}>
      <TouchableOpacity
        style={[styles.selectHeader, isOpen && styles.open]}
        onPress={openDropdown}
        activeOpacity={0.8}
        ref={selectRef}
      >
        <MeduimText style={styles.headerText}>{value ? value.label : placeholder}</MeduimText>
        <Icon style={filteredIconStyles} />
      </TouchableOpacity>
      <Modal
        visible={isOpen}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsOpen(false)}
      >
        <TouchableOpacity 
          style={styles.modalOverlay} 
          activeOpacity={1} 
          onPress={() => setIsOpen(false)}
        >
          <View style={[styles.modalContent, { top: dropdownTop }]}>
            <FlatList
              data={options}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.selectOption}
                  onPress={() => handleOptionPress(item)}
                  disabled={item.value === value.value}
                >
                  <MeduimText style={[
                    styles.optionText,
                    item.value === value.value && styles.disabledOptionText
                  ]}>
                    {item.label}
                  </MeduimText>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  selectContainer: {
    minWidth: 170,
  },
  selectHeader: {
    width: '100%',
    padding: 16,
    paddingRight: 20,
    borderRadius: 4,
    backgroundColor: COLORS.backgroundCard,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    color: COLORS.gray,
    fontWeight: '500',
    fontSize: 16
  },
  icon: {
    marginLeft: 12,
  },
  open: {
    backgroundColor: COLORS.backgroundMessage,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: width - 40,
    maxHeight: 300,
    backgroundColor: COLORS.backgroundMessage,
    borderRadius: 4,
    padding: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    position: 'absolute',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  selectOption: {
    padding: 12,
  },
  optionText: {
    color: COLORS.gray,
    fontWeight: '500',
    fontSize: 16
  },
  disabledOptionText: {
    color: COLORS.selectOptionDisabledColor,
  },
});
