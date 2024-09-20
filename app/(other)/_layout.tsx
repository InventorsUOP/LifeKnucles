import { Stack } from "expo-router";

export default function Other() {
  return (
    <Stack>
      <Stack.Screen name="alert" options={{ headerShown: false }} />
    </Stack>
  );
}
