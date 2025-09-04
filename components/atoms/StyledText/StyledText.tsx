import { Colors } from "@/constants/Colors";
import { Text, type TextProps } from "react-native";
import { styles } from "./styles";

export type StyledTextProps = TextProps & {
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
  color?: string;
};

export function StyledText({
  style,
  type = "default",
  color,
  ...rest
}: StyledTextProps) {
  const textColor = color || (type === "link" ? Colors.link : Colors.text);

  return <Text style={[{ color: textColor }, styles[type], style]} {...rest} />;
}
