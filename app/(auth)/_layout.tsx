import { Stack } from "expo-router";
import React from "react";

export default function GetStart() {
  return (
    <Stack>
      <Stack.Screen name="login" options={{ headerShown: false }} />
    </Stack>
  );
}
