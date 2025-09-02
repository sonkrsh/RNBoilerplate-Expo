import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { ThemedView } from '@/components/atoms/ThemedView/ThemedView';
import { ThemedText } from '@/components/atoms/ThemedText/ThemedText';
import { MicrosoftSignIn } from '@/components/molecules/MicrosoftSignIn';
import { exchangeCodeForTokens } from '@/services/auth/tokenExchange';

export default function AuthScreen() {
  const { t } = useTranslation();

  const handleSuccess = async (code: string) => {
    try {
      console.log('Auth code:', code);
      
      // Exchange code for tokens
      const tokens = await exchangeCodeForTokens(code);
      console.log('Access token:', tokens.access_token);
      console.log('Refresh token:', tokens.refresh_token);
      
      // Store tokens securely
      // Navigate to authenticated area
    } catch (error) {
      console.error('Token exchange failed:', error);
    }
  };

  const handleError = (error: any) => {
    console.error('Auth error:', error);
    // Handle authentication error
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <ThemedView style={styles.content}>
          <ThemedText type="title">Authentication</ThemedText>
          <ThemedText>Sign in to access your account</ThemedText>
          
          <ThemedView style={styles.section}>
            <ThemedText type="subtitle">Microsoft Sign In</ThemedText>
            <MicrosoftSignIn
              onSuccess={handleSuccess}
              onError={handleError}
            />
          </ThemedView>
        </ThemedView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingBottom: 100, // Space for floating tab bar
  },
  section: {
    marginTop: 24,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
});