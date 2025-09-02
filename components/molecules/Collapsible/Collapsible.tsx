import { PropsWithChildren, useState, useMemo } from 'react';
import { TouchableOpacity } from 'react-native';

import { ThemedText } from '@/components/atoms/ThemedText/ThemedText';
import { ThemedView } from '@/components/atoms/ThemedView/ThemedView';
import { IconSymbol } from '@/components/atoms/IconSymbol/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { styles } from './styles';

export type CollapsibleProps = PropsWithChildren & { title: string };

export function Collapsible({ children, title }: CollapsibleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useColorScheme() ?? 'light';
  const iconColor = useMemo(() => Colors[theme].icon, [theme]);

  return (
    <ThemedView>
      <TouchableOpacity
        style={styles.heading}
        onPress={() => setIsOpen((value) => !value)}
        activeOpacity={0.8}>
        <IconSymbol
          name="chevron.right"
          size={18}
          color={iconColor}
          style={{ transform: [{ rotate: isOpen ? '90deg' : '0deg' }] }}
        />

        <ThemedText type="defaultSemiBold">{title}</ThemedText>
      </TouchableOpacity>
      {isOpen && <ThemedView style={styles.content}>{children}</ThemedView>}
    </ThemedView>
  );
}

