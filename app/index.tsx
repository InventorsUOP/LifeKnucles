import GetStartedAuth from "@/components/GetStartedAuth";
import GetStartedHeader from "@/components/GetStartedHeader";
import image from "@/constants/image";
import { useRouter } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";
import { ImageBackground, View } from "react-native";
import { Button, Divider, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const router = useRouter();
  return (
    <ImageBackground
      source={image.bgimage}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <SafeAreaView>
        <View className="flex justify-between items-center px-4">
          <GetStartedHeader />
          <GetStartedAuth />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
