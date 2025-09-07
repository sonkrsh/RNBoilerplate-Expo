import LoginImage from "@/assets/images/login.svg";
import MicrosoftLogo from "@/assets/images/microsoft_logo.svg";
import { StyledText } from "@/components/atoms/StyledText";
import { StyledView } from "@/components/atoms/StyledView";
import { useMicrosoftAuth } from "@/services/auth/microsoftAuth";
import { router } from "expo-router";
import React from "react";
import {
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";

export default function LoginScreen() {
  const { signInWithMicrosoft, isLoading } = useMicrosoftAuth();

  const handleMicrosoftLogin = async () => {
    try {
      console.log("Microsoft login pressed");

      const result = await signInWithMicrosoft();

      if (result.success) {
        console.log("Login successful, tokens:", result.tokens);

        // Create user object from tokens (you can decode JWT or call user profile API)

        router.replace("/(tabs)");
      } else {
        console.error("Login failed:", result.error);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <StyledView style={styles.container}>
      <View style={styles.imageSection}>
        <LoginImage width="100%" height="100%" preserveAspectRatio="xMidYMid slice" style={styles.backgroundImage} />
      </View>

      <View style={styles.formSection}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.formContainer}
        >
          <StyledText style={styles.loginTitle}>
            Log in to Artnet App
          </StyledText>
          <StyledText style={styles.loginSubtitle}>
            Lorem ipsum dolor sit amet
          </StyledText>

          <TouchableOpacity
            style={[styles.microsoftButton, isLoading && styles.disabledButton]}
            onPress={handleMicrosoftLogin}
            disabled={isLoading}
          >
            <View style={styles.microsoftIcon}>
              <MicrosoftLogo width={20} height={20} />
            </View>
            <StyledText style={styles.microsoftButtonText}>
              {isLoading ? "Signing in..." : "Log in with Microsoft"}
            </StyledText>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </StyledView>
  );
}


