import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from '@/contexts/ThemeContext';
import { useThemeColor } from '@/hooks/useThemeColor';

export function ThemeToggle() {
  const { colorScheme, toggleTheme } = useTheme();
  const backgroundColor = useThemeColor({}, 'background');
  const iconColor = useThemeColor({}, 'text');

  return (
    <TouchableOpacity 
      style={[styles.container, { backgroundColor }]} 
      onPress={toggleTheme}
      activeOpacity={0.7}
    >
      <MaterialIcons 
        name={colorScheme === 'dark' ? 'light-mode' : 'dark-mode'} 
        size={24} 
        color={iconColor} 
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});