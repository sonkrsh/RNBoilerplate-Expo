import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

// Direct imports - testing tree shaking
import { Collapsible } from '@/components/molecules/Collapsible/Collapsible';
import { ExternalLink } from '@/components/molecules/ExternalLink/ExternalLink';
import { ParallaxScrollView } from '@/components/organisms/ParallaxScrollView/ParallaxScrollView';
import { StyledText } from '@/components/atoms/StyledText';
import { StyledView } from '@/components/atoms/StyledView';
import { IconSymbol } from '@/components/atoms/IconSymbol/IconSymbol';

export default function ExploreScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor="#D0D0D0"
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <StyledView style={styles.titleContainer}>
        <StyledText type="title">Explore</StyledText>
      </StyledView>
      <StyledText>This app includes example code to help you get started.</StyledText>
      <Collapsible title="File-based routing">
        <StyledText>
          This app has two screens:{' '}
          <StyledText type="defaultSemiBold">app/(tabs)/index.tsx</StyledText> and{' '}
          <StyledText type="defaultSemiBold">app/(tabs)/explore.tsx</StyledText>
        </StyledText>
        <StyledText>
          The layout file in <StyledText type="defaultSemiBold">app/(tabs)/_layout.tsx</StyledText>{' '}
          sets up the tab navigator.
        </StyledText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <StyledText type="link">Learn more</StyledText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Android, iOS, and web support">
        <StyledText>
          You can open this project on Android, iOS, and the web. To open the web version, press{' '}
          <StyledText type="defaultSemiBold">w</StyledText> in the terminal running this project.
        </StyledText>
      </Collapsible>
      <Collapsible title="Images">
        <StyledText>
          For static images, you can use the <StyledText type="defaultSemiBold">@2x</StyledText> and{' '}
          <StyledText type="defaultSemiBold">@3x</StyledText> suffixes to provide files for
          different screen densities
        </StyledText>
        <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <StyledText type="link">Learn more</StyledText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Custom fonts">
        <StyledText>
          Open <StyledText type="defaultSemiBold">app/_layout.tsx</StyledText> to see how to load{' '}
          <StyledText style={{ fontFamily: 'SpaceMono' }}>
            custom fonts such as this one.
          </StyledText>
        </StyledText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <StyledText type="link">Learn more</StyledText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Styled components">
        <StyledText>
          This template uses styled components with consistent colors. The{' '}
          <StyledText type="defaultSemiBold">StyledText</StyledText> and{' '}
          <StyledText type="defaultSemiBold">StyledView</StyledText> components provide
          consistent styling throughout the app.
        </StyledText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/styling/">
          <StyledText type="link">Learn more</StyledText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Animations">
        <StyledText>
          This template includes an example of an animated component. The{' '}
          <StyledText type="defaultSemiBold">components/HelloWave.tsx</StyledText> component uses
          the powerful <StyledText type="defaultSemiBold">react-native-reanimated</StyledText>{' '}
          library to create a waving hand animation.
        </StyledText>
        {Platform.select({
          ios: (
            <StyledText>
              The <StyledText type="defaultSemiBold">components/ParallaxScrollView.tsx</StyledText>{' '}
              component provides a parallax effect for the header image.
            </StyledText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
