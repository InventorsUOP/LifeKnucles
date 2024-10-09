import React from "react";
import { View, Text } from "react-native";
import { Button, Avatar, Divider } from "react-native-paper";
import AppHeader from "@/components/AppHeader";

export default function Account() {
  return (
    <>
      <AppHeader title="Account" />
      <View className="flex-1 bg-gray-100 p-5">
        <View className="items-center">
          <Avatar.Image size={120} source={{ uri: "https://via.placeholder.com/150" }} />
          <Text className="font-psemibold text-2xl mt-4">sandun</Text>
          <Text className="font-pregular text-lg text-gray-600">sandun@gmail.com</Text>
        </View>

        <Divider className="my-4" />

        <Button
          mode="contained"
          className="w-full h-12 bg-primary"
          onPress={() => console.log("Logout Pressed")}
        >
          Logout
        </Button>
      </View>
    </>
  );
}
