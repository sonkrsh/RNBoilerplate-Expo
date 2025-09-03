import React from 'react';
import { View, StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity } from 'react-native';
import { StyledText } from '@/components/atoms/StyledText';
import { StyledView } from '@/components/atoms/StyledView';
import MicrosoftLogo from '@/assets/images/microsoft_logo.svg';
import { router } from 'expo-router';
const { height } = Dimensions.get('window');

export default function LoginScreen() {


  const handleMicrosoftLogin = () => {
    console.log('Microsoft login pressed');
    // Navigate to tabs after successful login
    router.push('/(tabs)');
  };

  return (
    <StyledView style={styles.container}>
      <View style={styles.imageSection}>
        <Image
          source={require('@/assets/images/login_image.png')}
          style={styles.backgroundImage}
          resizeMode="cover"
        />
      </View>

      <View style={styles.formSection}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.formContainer}>
          <StyledText style={styles.loginTitle}>Log in to Artnet App</StyledText>
          <StyledText style={styles.loginSubtitle}>
            Lorem ipsum dolor sit amet
          </StyledText>

          <TouchableOpacity style={styles.microsoftButton} onPress={handleMicrosoftLogin}>
            <View style={styles.microsoftIcon}>
              <MicrosoftLogo width={20} height={20} />
            </View>
            <StyledText style={styles.microsoftButtonText}>Log in with Microsoft</StyledText>
          </TouchableOpacity>

        </ScrollView>
      </View>
    </StyledView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  imageSection: {
    height: height * 0.5,
    position: 'relative',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitleText: {
    fontSize: 18,
    textAlign: 'center',
    opacity: 0.9,
  },
  formSection: {
    flex: 1,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 40,
    paddingVertical: 40,
  },
  loginTitle: {
    color: "#171717",
    fontSize: 28,
    fontWeight: 600,
    marginBottom: 8,
    textAlign: 'center',
  },
  loginSubtitle: {
    color: "#171717",
    fontSize: 14,
    fontWeight: 400,
    marginBottom: 40,
    textAlign: 'center',
  },
  microsoftButton: {
    backgroundColor: '#0050A6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 30,
  },
  microsoftIcon: {
    marginRight: 12,
  },
  microsoftButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '400',
  },
  footerContainer: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
  },
  linkText: {
    fontWeight: '600',
  },
});
