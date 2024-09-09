import { Stack } from "expo-router";
import React from "react";

export default function GetStart() {
  return (
    <Stack>
      <Stack.Screen name="Login" options={{ headerShown: false }} />
      <Stack.Screen name="KnucklesPage" options={{ title: 'What is Knuckles' }} />
      <Stack.Screen name="WildFirePage" options={{ title: 'How WildFire Happen' }} />
      <Stack.Screen name="SafetyPrecautionPage" options={{ title: 'Safety Precaution' }} />
      <Stack.Screen name="AfterFirePage" options={{ title: 'What To Do After A Fire Happen' }} />
      <Stack.Screen name="AppTutorialPage" options={{ title: 'App Tutorial' }} />
      
    </Stack>
  );
}
