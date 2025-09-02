import { Image } from "expo-image";
import { Platform, StyleSheet, View } from "react-native";
import { useTranslation } from 'react-i18next';

import { HelloWave } from "@/components/atoms/HelloWave";
import { ThemedText } from "@/components/atoms/ThemedText";
import { ThemedView } from "@/components/atoms/ThemedView";
import { ParallaxScrollView } from "@/components/organisms/ParallaxScrollView";
import { ThemeToggle } from "@/components/molecules/ThemeToggle";
import { LanguageToggle } from "@/components/molecules/LanguageToggle";

export default function HomeScreen() {
  const { t } = useTranslation();
  
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">{t('dashboard')}</ThemedText>
        <HelloWave />
      </ThemedView>
      
      <ThemedView style={styles.themeContainer}>
        <ThemedText type="subtitle">{t('themeSettings')}</ThemedText>
        <View style={styles.themeToggleRow}>
          <ThemedText>{t('toggleTheme')}</ThemedText>
          <ThemeToggle />
        </View>
      </ThemedView>
      
      <ThemedView style={styles.themeContainer}>
        <ThemedText type="subtitle">{t('languageSettings')}</ThemedText>
        <View style={styles.themeToggleRow}>
          <ThemedText>{t('changeLanguage')}</ThemedText>
          <LanguageToggle />
        </View>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">{t('step1')}</ThemedText>
        <ThemedText>
          Edit{" "}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>{" "}
          to see changes. Press{" "}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: "cmd + d",
              android: "cmd + m",
              web: "F12",
            })}
          </ThemedText>{" "}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">{t('step2')}</ThemedText>
        <ThemedText>
          {`Tap the Explore tab to learn more about what's included in this starter app.`}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">{t('step3')}</ThemedText>
        <ThemedText>
          {`When you're ready, run `}
          <ThemedText type="defaultSemiBold">
            npm run reset-project
          </ThemedText>{" "}
          to get a fresh <ThemedText type="defaultSemiBold">app</ThemedText>{" "}
          directory. This will move the current{" "}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{" "}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  themeContainer: {
    gap: 12,
    marginBottom: 16,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  themeToggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
