import { useEffect } from 'react';
import { router } from 'expo-router';
import { View, ActivityIndicator } from 'react-native';
import { StyledText } from '@/components/atoms/StyledText';
import { Colors } from '@/constants/Colors';
import { useAuth } from '@/contexts/AuthContext';

export default function AuthRouter() {
  const { isAuthenticated, isLoading } = useAuth();
  
  useEffect(() => {
    // Wait for auth context to initialize
    if (!isLoading) {
      if (isAuthenticated) {
        router.replace('/(tabs)');
      } else {
        router.replace('/login');
      }
    }
  }, [isAuthenticated, isLoading]);

  // Loading screen while checking authentication
  return (
    <View style={{ 
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center',
      backgroundColor: Colors.background 
    }}>
      <ActivityIndicator size="large" color={Colors.primary} />
      <StyledText style={{ marginTop: 16, color: Colors.text }}>
        Loading...
      </StyledText>
    </View>
  );
}
