import { Image } from "expo-image";
import { Platform, StyleSheet, View } from "react-native";
import { useTranslation } from 'react-i18next';

import { HelloWave } from "@/components/atoms/HelloWave";
import { StyledText } from "@/components/atoms/StyledText";
import { StyledView } from "@/components/atoms/StyledView";
import { ParallaxScrollView } from "@/components/organisms/ParallaxScrollView";
import { LanguageToggle } from "@/components/molecules/LanguageToggle";

export default function HomeScreen() {
  const { t } = useTranslation();
  
  return (
    <ParallaxScrollView
      headerBackgroundColor="#A1CEDC"
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <StyledView style={styles.titleContainer}>
        <StyledText type="title">{t('dashboard')}</StyledText>
        <HelloWave />
      </StyledView>
      
      <StyledView style={styles.themeContainer}>
        <StyledText type="subtitle">{t('languageSettings')}</StyledText>
        <View style={styles.themeToggleRow}>
          <StyledText>{t('changeLanguage')}</StyledText>
          <LanguageToggle />
        </View>
      </StyledView>
      
      <StyledView style={styles.stepContainer}>
        <StyledText type="subtitle">{t('step1')}</StyledText>
        <StyledText>
          Edit{" "}
          <StyledText type="defaultSemiBold">app/(tabs)/index.tsx</StyledText>{" "}
          to see changes. Press{" "}
          <StyledText type="defaultSemiBold">
            {Platform.select({
              ios: "cmd + d",
              android: "cmd + m",
              web: "F12",
            })}
          </StyledText>{" "}
          to open developer tools.
        </StyledText>
      </StyledView>
      <StyledView style={styles.stepContainer}>
        <StyledText type="subtitle">{t('step2')}</StyledText>
        <StyledText>
          {`Tap the Explore tab to learn more about what's included in this starter app.`}
        </StyledText>
      </StyledView>
      <StyledView style={styles.stepContainer}>
        <StyledText type="subtitle">{t('step3')}</StyledText>
        <StyledText>
          {`When you're ready, run `}
          <StyledText type="defaultSemiBold">
            npm run reset-project
          </StyledText>{" "}
          to get a fresh <StyledText type="defaultSemiBold">app</StyledText>{" "}
          directory. This will move the current{" "}
          <StyledText type="defaultSemiBold">app</StyledText> to{" "}
          <StyledText type="defaultSemiBold">app-example</StyledText>.
        </StyledText>
      </StyledView>
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
