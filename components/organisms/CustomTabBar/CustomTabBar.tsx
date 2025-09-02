import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { BlurView } from 'expo-blur';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useColorScheme } from '@/hooks/useColorScheme';

export function CustomBottomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  const backgroundColor = useThemeColor({}, 'background');
  const borderColor = useThemeColor({}, 'border');
  const colorScheme = useColorScheme();
  const { t } = useTranslation();

  const getTabIcon = (routeName: string, focused: boolean) => {
    const color = focused ? '#FFFFFF' : '#6B7280';
    const size = 20;

    switch (routeName) {
      case 'index':
        return <MaterialIcons name="dashboard" size={size} color={color} />;
      case 'explore':
        return <MaterialIcons name="track-changes" size={size} color={color} />;
      case 'components':
        return <MaterialIcons name="article" size={size} color={color} />;
      case 'auth':
        return <MaterialIcons name="login" size={size} color={color} />;
      default:
        return <MaterialIcons name="dashboard" size={size} color={color} />;
    }
  };

  const getTabLabel = (routeName: string) => {
    switch (routeName) {
      case 'index':
        return t('dashboard');
      case 'explore':
        return t('explore');
      case 'components':
        return t('components');
      case 'auth':
        return t('auth');
      default:
        return routeName;
    }
  };

  return (
    <>
      {/* Blur overlay for space below tab bar */}
      <BlurView
        intensity={100}
        tint={colorScheme}
        style={[
          styles.blurOverlay,
          { height: 28 + insets.bottom }
        ]}
      />
      
      {/* Tab bar */}
      <View style={[
        styles.tabBar, 
        { 
          marginBottom: 16 + insets.bottom,
          backgroundColor,
          borderColor,
        }
      ]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={`tab-${route.name}`}
            onPress={onPress}
            style={styles.tabItem}
            activeOpacity={0.7}
          >
            <View style={[
              styles.tabContent,
              isFocused && styles.tabContentActive
            ]}>
              {getTabIcon(route.name, isFocused)}
              {isFocused && (
                <Text style={styles.tabLabel}>
                  {getTabLabel(route.name)}
                </Text>
              )}
            </View>
          </TouchableOpacity>
        );
      })}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  blurOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    marginHorizontal: 16,
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 16,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'space-between',
    zIndex: 2,
  },
  tabItem: {
    alignItems: 'center',
  },
  tabContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    minHeight: 40,
  },
  tabContentActive: {
    backgroundColor: '#3B82F6',
  },
  tabLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
    marginLeft: 8,
  },
});