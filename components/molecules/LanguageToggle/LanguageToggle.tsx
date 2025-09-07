import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Colors } from '@/constants/Colors';
import { styles } from './styles';

export function LanguageToggle() {
  const { i18n } = useTranslation();
  const backgroundColor = Colors.card;
  const textColor = Colors.text;
  const borderColor = Colors.border;

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'hi' : 'en';
    i18n.changeLanguage(newLang);
  };

  const currentLang = i18n.language === 'en' ? 'English' : 'हिंदी';

  return (
    <TouchableOpacity 
      style={[styles.container, { backgroundColor, borderColor }]} 
      onPress={toggleLanguage}
      activeOpacity={0.7}
    >
      <Text style={[styles.text, { color: textColor }]}>
        {currentLang}
      </Text>
    </TouchableOpacity>
  );
}

