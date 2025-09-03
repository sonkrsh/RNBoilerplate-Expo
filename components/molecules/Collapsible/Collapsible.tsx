import { PropsWithChildren, useState } from 'react';
import { TouchableOpacity } from 'react-native';

import { StyledText } from '@/components/atoms/StyledText';
import { StyledView } from '@/components/atoms/StyledView';
import { IconSymbol } from '@/components/atoms/IconSymbol/IconSymbol';
import { Colors } from '@/constants/Colors';
import { styles } from './styles';

export type CollapsibleProps = PropsWithChildren & { title: string };

export function Collapsible({ children, title }: CollapsibleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const iconColor = Colors.icon;

  return (
    <StyledView>
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

        <StyledText type="defaultSemiBold">{title}</StyledText>
      </TouchableOpacity>
      {isOpen && <StyledView style={styles.content}>{children}</StyledView>}
    </StyledView>
  );
}

