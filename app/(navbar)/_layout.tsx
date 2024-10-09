import { Stack } from "expo-router";

export default function More() {
  return (
    <Stack>
      <Stack.Screen name="settings" options={{ headerShown: false }} />
      <Stack.Screen name="account" options={{ headerShown: false }} />
    </Stack>
  );
}
