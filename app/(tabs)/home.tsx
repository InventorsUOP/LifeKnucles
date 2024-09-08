import AppHeader from "@/components/AppHeader";
import HomeAlert from "@/components/Home/HomeAlert";
import WildfireMap from "@/components/WildfireMap";
import { router } from "expo-router";
import React from "react";
import { View } from "react-native";
import { Text, Divider, FAB } from "react-native-paper";

export default function Home() {
  return (
    <>
      <AppHeader title="LifeKnuckles" />
      <View className="flex-none w-full h-1/3">
        <WildfireMap />
      </View>
      <View className="bg-gray-100 flex-1">
        <Text className="m-5 font-psemibold text-xl text-black">
          Recent Activities
        </Text>
        <Divider className="h-0.5 bg-black ml-5 mr-5" />
        <HomeAlert />
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
