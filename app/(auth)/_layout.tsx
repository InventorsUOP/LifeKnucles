import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

export default function GetStart() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen name="Login" options={{ headerShown: false }} />
        <Stack.Screen name="KnucklesPage" options={{ title: 'What is Knuckles' }} />
        <Stack.Screen name="WildFirePage" options={{ title: 'How WildFire Happen' }} />
        <Stack.Screen name="SafetyPrecautionPage" options={{ title: 'Safety Precaution' }} />
        <Stack.Screen name="AfterFirePage" options={{ title: 'What To Do After A Fire Happen' }} />
        <Stack.Screen name="AppTutorialPage" options={{ title: 'App Tutorial' }} />
      </Stack>
      <View className="w-full flex justify-center items-center h-full px-4">
        <Text className="text-3xl font-pblack">textInComponent</Text>
        <Text>Header Edit</Text>
      </View>
    </SafeAreaView>
  );
}
