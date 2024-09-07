import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { PaperProvider } from "react-native-paper";
import { View, ActivityIndicator, ImageBackground } from "react-native";
import "react-native-reanimated";
import image from "@/constants/image";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
    "PermanentMarker-Regular": require("../assets/fonts/PermanentMarker-Regular.ttf"),
    "Montserrat-Black": require("../assets/fonts/Montserrat-VariableFont_wght.ttf"),
    "Montserrat-Italic": require("../assets/fonts/Montserrat-Italic-VariableFont_wght.ttf"),
  });

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    if (loaded) {
      setAppIsReady(true);
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!appIsReady) {
    return (
      <ImageBackground
        source={image.bgimage}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <View>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      </ImageBackground>
    );
  }

  return (
    <PaperProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </PaperProvider>
  );
}
