import { View, type ViewProps } from 'react-native';
import { Colors } from '@/constants/Colors';

export type StyledViewProps = ViewProps & {
  backgroundColor?: string;
};

export function StyledView({ style, backgroundColor, ...otherProps }: StyledViewProps) {
  const bgColor = backgroundColor || Colors.background;

  return <View style={[{ backgroundColor: bgColor }, style]} {...otherProps} />;
}
