import { useTheme } from "@/contexts/ThemeContext";

export function useColorScheme() {
  let colorScheme: string = "light";
  try {
    const theme = useTheme();
    colorScheme = theme.colorScheme;
  } catch {
    // fallback to "light"
  }
  return colorScheme;
}
