import { ScrollView, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedText } from '@/components/atoms/ThemedText/ThemedText';
import { ThemedView } from '@/components/atoms/ThemedView/ThemedView';
import { IconSymbol } from '@/components/atoms/IconSymbol/IconSymbol';
import { HelloWave } from '@/components/atoms/HelloWave/HelloWave';
import { Collapsible } from '@/components/molecules/Collapsible/Collapsible';
import { ExternalLink } from '@/components/molecules/ExternalLink/ExternalLink';
import { useThemeColor } from '@/hooks/useThemeColor';

export default function ComponentsScreen() {
  const iconColor = useThemeColor({}, 'icon');
  const linkColor = useThemeColor({}, 'link');

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
      <ThemedView style={styles.section}>
        <ThemedText type="title">Component Library</ThemedText>
        <ThemedText>Explore all available components and their variants</ThemedText>
      </ThemedView>

      {/* Atoms Section */}
      <Collapsible title="🔸 Atoms - Basic Components">
        
        {/* ThemedText Variants */}
        <ThemedView style={styles.componentSection}>
          <ThemedText type="subtitle">ThemedText</ThemedText>
          <View style={styles.variantContainer}>
            <ThemedText type="default">Default text</ThemedText>
            <ThemedText type="title">Title text</ThemedText>
            <ThemedText type="subtitle">Subtitle text</ThemedText>
            <ThemedText type="defaultSemiBold">SemiBold text</ThemedText>
            <ThemedText type="link">Link text</ThemedText>
          </View>
        </ThemedView>

        {/* IconSymbol Variants */}
        <ThemedView style={styles.componentSection}>
          <ThemedText type="subtitle">IconSymbol</ThemedText>
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
        </ThemedView>

        {/* HelloWave */}
        <ThemedView style={styles.componentSection}>
          <ThemedText type="subtitle">HelloWave (Animated)</ThemedText>
          <HelloWave />
        </ThemedView>

        {/* ThemedView */}
        <ThemedView style={styles.componentSection}>
          <ThemedText type="subtitle">ThemedView</ThemedText>
          <ThemedView style={styles.themedViewExample}>
            <ThemedText>Themed container with automatic dark/light mode</ThemedText>
          </ThemedView>
        </ThemedView>

      </Collapsible>

      {/* Molecules Section */}
      <Collapsible title="🔹 Molecules - Composite Components">
        
        {/* Collapsible */}
        <ThemedView style={styles.componentSection}>
          <ThemedText type="subtitle">Collapsible</ThemedText>
          <Collapsible title="Nested Collapsible Example">
            <ThemedText>This is content inside a collapsible component</ThemedText>
            <ThemedText>It can contain any React elements</ThemedText>
          </Collapsible>
        </ThemedView>

        {/* ExternalLink */}
        <ThemedView style={styles.componentSection}>
          <ThemedText type="subtitle">ExternalLink</ThemedText>
          <ExternalLink href="https://expo.dev">
            <ThemedText type="link">Visit Expo Documentation</ThemedText>
          </ExternalLink>
        </ThemedView>

      </Collapsible>

      {/* Organisms Section */}
      <Collapsible title="🔷 Organisms - Complex Components">
        
        <ThemedView style={styles.componentSection}>
          <ThemedText type="subtitle">ParallaxScrollView</ThemedText>
          <ThemedText>Used in Explore tab - provides parallax header effect</ThemedText>
        </ThemedView>

        <ThemedView style={styles.componentSection}>
          <ThemedText type="subtitle">ErrorBoundary</ThemedText>
          <ThemedText>Wraps the entire app to catch JavaScript errors</ThemedText>
        </ThemedView>

      </Collapsible>

      {/* Hooks Section */}
      <Collapsible title="🎣 Custom Hooks">
        
        <ThemedView style={styles.componentSection}>
          <ThemedText type="subtitle">Available Hooks</ThemedText>
          <ThemedText>• useColorScheme - Get current theme</ThemedText>
          <ThemedText>• useThemeColor - Get themed colors</ThemedText>
          <ThemedText>• useAppDispatch - Redux dispatch</ThemedText>
          <ThemedText>• useAppSelector - Redux selector</ThemedText>
        </ThemedView>

      </Collapsible>

      {/* Environment Info */}
      <Collapsible title="⚙️ Environment & Config">
        
        <ThemedView style={styles.componentSection}>
          <ThemedText type="subtitle">Current Environment</ThemedText>
          <ThemedText>Check console for environment details</ThemedText>
        </ThemedView>

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