import React, { useEffect } from 'react';
import { TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { ThemedText } from '@/components/atoms/ThemedText/ThemedText';
import { ThemedView } from '@/components/atoms/ThemedView/ThemedView';
import { useMicrosoftAuth } from '@/services/auth/microsoftAuth';

interface MicrosoftSignInProps {
  onSuccess?: (token: string) => void;
  onError?: (error: any) => void;
}

export function MicrosoftSignIn({ onSuccess, onError }: MicrosoftSignInProps) {
  const { request, response, signInWithMicrosoft } = useMicrosoftAuth();

  useEffect(() => {
    if (response?.type === 'success') {
      const { code } = response.params;
      onSuccess?.(code);
    } else if (response?.type === 'error') {
      onError?.(response.error);
    }
  }, [response]);

  const handleSignIn = async () => {
    try {
      await signInWithMicrosoft();
    } catch (error) {
      Alert.alert('Error', 'Failed to sign in with Microsoft');
      onError?.(error);
    }
  };

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={handleSignIn}
      disabled={!request}
    >
      <ThemedView style={styles.content}>
        <MaterialIcons name="business" size={20} color="#FFFFFF" />
        <ThemedText style={styles.text}>Sign in with Microsoft</ThemedText>
      </ThemedView>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0078D4',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
});