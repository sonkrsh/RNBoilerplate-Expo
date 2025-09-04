import MicrosoftLogo from "@/assets/images/microsoft_logo.svg";
import { StyledText } from "@/components/atoms/StyledText";
import { StyledView } from "@/components/atoms/StyledView";
import { useMicrosoftAuth } from "@/services/auth/microsoftAuth";
import { router } from "expo-router";
import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
const { height } = Dimensions.get("window");

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
        <Image
          source={require("@/assets/images/login_image.png")}
          style={styles.backgroundImage}
          resizeMode="cover"
        />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  imageSection: {
    height: height * 0.5,
    position: "relative",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitleText: {
    fontSize: 18,
    textAlign: "center",
    opacity: 0.9,
  },
  formSection: {
    flex: 1,
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 40,
    paddingVertical: 40,
  },
  loginTitle: {
    color: "#171717",
    fontSize: 28,
    fontWeight: 600,
    marginBottom: 8,
    textAlign: "center",
  },
  loginSubtitle: {
    color: "#171717",
    fontSize: 14,
    fontWeight: 400,
    marginBottom: 40,
    textAlign: "center",
  },
  microsoftButton: {
    backgroundColor: "#0050A6",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 30,
  },
  disabledButton: {
    opacity: 0.6,
  },
  microsoftIcon: {
    marginRight: 12,
  },
  microsoftButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "400",
  },
  footerContainer: {
    alignItems: "center",
  },
  footerText: {
    fontSize: 16,
  },
  linkText: {
    fontWeight: "600",
  },
});
