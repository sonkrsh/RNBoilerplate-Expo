import { SymbolView, SymbolViewProps, SymbolWeight } from 'expo-symbols';
import { StyleProp, ViewStyle } from 'react-native';

export function IconSymbol({
  name,
  size = 24,
  color,
  style,
  weight = 'regular',
}: {
  name: SymbolViewProps['name'];
  size?: number;
  color: string;
  style?: StyleProp<ViewStyle>;
  weight?: SymbolWeight;
}) {
  // Validate and sanitize symbol name to prevent XSS
  const sanitizedName = (typeof name === 'string' ? name.replace(/[<>"'&]/g, '') : name) as SymbolViewProps['name'];
  
  return (
    <SymbolView
      weight={weight}
      tintColor={color}
      resizeMode="scaleAspectFit"
      name={sanitizedName}
      style={[
        {
          width: size,
          height: size,
        },
        style,
      ]}
    />
  );
}
