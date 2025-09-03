import "@/i18n";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { Provider } from "react-redux";

import { ErrorBoundary } from "@/components/organisms/ErrorBoundary";
import { store } from "@/store/store";

export default function RootLayout() {
  const [loaded] = useFonts({
    Graphik: require("../assets/fonts/Graphik-Regular.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              headerTitle: "ARTNET",
              headerTitleStyle: {
                fontWeight: "500",
                fontSize: 32,
              },
              headerShown: true,
            }}
          />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="light" />
      </Provider>
    </ErrorBoundary>
  );
}
