import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function GetStart() {
  return (
    <SafeAreaView>
      <View className="w-full flex justify-center items-center h-full px-4">
        <Text className="text-3xl font-pblack"> textInComponent </Text>
        <Text>Header Edit</Text>
      </View>
    </SafeAreaView>
  );
}
