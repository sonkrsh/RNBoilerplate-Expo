import type { PropsWithChildren, ReactElement } from 'react';
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';

import { StyledView } from '@/components/atoms/StyledView';
import { useBottomTabOverflow } from '@/components/organisms/TabBarBackground/TabBarBackground';
import { styles } from './styles';

const HEADER_HEIGHT = 250;

export type ParallaxScrollViewProps = PropsWithChildren<{
  headerImage: ReactElement;
  headerBackgroundColor: string;
}>;

type Props = ParallaxScrollViewProps;

export function ParallaxScrollView({
  children,
  headerImage,
  headerBackgroundColor,
}: Props) {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const bottom = useBottomTabOverflow();
  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(scrollOffset.value, [-HEADER_HEIGHT, 0, HEADER_HEIGHT], [2, 1, 1]),
        },
      ],
    };
  });

  return (
    <StyledView style={styles.container}>
      <Animated.ScrollView
        ref={scrollRef}
        scrollEventThrottle={16}
        scrollIndicatorInsets={{ bottom }}
        contentContainerStyle={{ paddingBottom: bottom }}>
        <Animated.View
          style={[
            styles.header,
            { backgroundColor: headerBackgroundColor },
            headerAnimatedStyle,
          ]}>
          {headerImage}
        </Animated.View>
        <StyledView style={styles.content}>{children}</StyledView>
      </Animated.ScrollView>
    </StyledView>
  );
}

export default ParallaxScrollView;
