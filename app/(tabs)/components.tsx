import { ScrollView, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyledText } from '@/components/atoms/StyledText';
import { StyledView } from '@/components/atoms/StyledView';
import { IconSymbol } from '@/components/atoms/IconSymbol/IconSymbol';
import { HelloWave } from '@/components/atoms/HelloWave/HelloWave';
import { Collapsible } from '@/components/molecules/Collapsible/Collapsible';
import { ExternalLink } from '@/components/molecules/ExternalLink/ExternalLink';

import { Colors } from '@/constants/Colors';

export default function ComponentsScreen() {
  const iconColor = Colors.icon;
  const linkColor = Colors.link;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
      <StyledView style={styles.section}>
        <StyledText type="title">Component Library</StyledText>
        <StyledText>Explore all available components and their variants</StyledText>
      </StyledView>

      {/* Atoms Section */}
      <Collapsible title="🔸 Atoms - Basic Components">
        
        {/* StyledText Variants */}
        <StyledView style={styles.componentSection}>
          <StyledText type="subtitle">StyledText</StyledText>
          <View style={styles.variantContainer}>
            <StyledText type="default">Default text</StyledText>
            <StyledText type="title">Title text</StyledText>
            <StyledText type="subtitle">Subtitle text</StyledText>
            <StyledText type="defaultSemiBold">SemiBold text</StyledText>
            <StyledText type="link">Link text</StyledText>
          </View>
        </StyledView>

        {/* IconSymbol Variants */}
        <StyledView style={styles.componentSection}>
          <StyledText type="subtitle">IconSymbol</StyledText>
          <View style={styles.iconRow}>
            <IconSymbol name="house.fill" size={24} color={iconColor} />
            <IconSymbol name="paperplane.fill" size={24} color={iconColor} />
            <IconSymbol name="chevron.right" size={24} color={iconColor} />
            <IconSymbol name="chevron.left.forwardslash.chevron.right" size={24} color={iconColor} />
          </View>
          <View style={styles.iconRow}>
            <IconSymbol name="house.fill" size={16} color={linkColor} />
            <IconSymbol name="house.fill" size={32} color={linkColor} />
            <IconSymbol name="house.fill" size={48} color={linkColor} />
          </View>
        </StyledView>

        {/* HelloWave */}
        <StyledView style={styles.componentSection}>
          <StyledText type="subtitle">HelloWave (Animated)</StyledText>
          <HelloWave />
        </StyledView>

        {/* StyledView */}
        <StyledView style={styles.componentSection}>
          <StyledText type="subtitle">StyledView</StyledText>
          <StyledView style={styles.themedViewExample}>
            <StyledText>Styled container with consistent background color</StyledText>
          </StyledView>
        </StyledView>

      </Collapsible>

      {/* Molecules Section */}
      <Collapsible title="🔹 Molecules - Composite Components">
        
        {/* Collapsible */}
        <StyledView style={styles.componentSection}>
          <StyledText type="subtitle">Collapsible</StyledText>
          <Collapsible title="Nested Collapsible Example">
            <StyledText>This is content inside a collapsible component</StyledText>
            <StyledText>It can contain any React elements</StyledText>
          </Collapsible>
        </StyledView>

        {/* ExternalLink */}
        <StyledView style={styles.componentSection}>
          <StyledText type="subtitle">ExternalLink</StyledText>
          <ExternalLink href="https://expo.dev">
            <StyledText type="link">Visit Expo Documentation</StyledText>
          </ExternalLink>
        </StyledView>

      </Collapsible>

      {/* Organisms Section */}
      <Collapsible title="🔷 Organisms - Complex Components">
        
        <StyledView style={styles.componentSection}>
          <StyledText type="subtitle">ParallaxScrollView</StyledText>
          <StyledText>Used in Explore tab - provides parallax header effect</StyledText>
        </StyledView>

        <StyledView style={styles.componentSection}>
          <StyledText type="subtitle">ErrorBoundary</StyledText>
          <StyledText>Wraps the entire app to catch JavaScript errors</StyledText>
        </StyledView>

      </Collapsible>

      {/* Hooks Section */}
      <Collapsible title="🎣 Custom Hooks">
        
        <StyledView style={styles.componentSection}>
          <StyledText type="subtitle">Available Hooks</StyledText>
          <StyledText>• useAppDispatch - Redux dispatch</StyledText>
          <StyledText>• useAppSelector - Redux selector</StyledText>
        </StyledView>

      </Collapsible>

      {/* Environment Info */}
      <Collapsible title="⚙️ Environment & Config">
        
        <StyledView style={styles.componentSection}>
          <StyledText type="subtitle">Current Environment</StyledText>
          <StyledText>Check console for environment details</StyledText>
        </StyledView>

      </Collapsible>

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
  section: {
    padding: 20,
  },
  componentSection: {
    marginVertical: 12,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  variantContainer: {
    marginTop: 8,
    gap: 8,
  },
  iconRow: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 8,
    alignItems: 'center',
  },
  themedViewExample: {
    padding: 12,
    marginTop: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#DDD',
  },
});