import AppHeader from "@/components/AppHeader";
import WildfireMap from "@/components/WildfireMap";
import { router } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { FAB } from "react-native-paper";

export default function Home() {
  return (
    <>
      <AppHeader title="LifeKnuckles" />
      <View className="flex-none w-full h-1/3">
        <WildfireMap />
      </View>
      <View className="w-full h-2/3 bg-white relative ">
        <Text>Home</Text>
      </View>
      <FAB
        icon="plus"
        size="medium"
        mode="elevated"
        className="absolute m-4 right-0 bottom-0 bg-primary"
        onPress={() => router.push("/WildFireAlert")}
      />
    </>
  );
}
