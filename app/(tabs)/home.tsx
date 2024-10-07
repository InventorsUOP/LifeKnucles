import AppHeader from "@/components/AppHeader";
import HomeAlert from "@/components/Home/HomeAlert";
import React, { useState } from "react";
import { View } from "react-native";
import { Text, Divider, FAB } from "react-native-paper";
import { router } from "expo-router";
import MapView from "react-native-maps";
import MapSections from "@/components/common/MapSections";
import { initialValues } from "../WildFireAlert";

export default function Home() {
  const [formData, setFormData] = useState<FormData>(initialValues); // TODO: handle this propper way
  return (
    <>
      <AppHeader title="LifeKnuckles" />
      <View className="flex-none w-full h-1/3">
        <MapView
          style={{ flex: 1 }}
          provider={"google"}
          mapType="satellite"
          initialRegion={{
            latitude: 7.44,
            longitude: 80.75506,
            latitudeDelta: 0.25,
            longitudeDelta: 0.25,
          }}
        >
          <MapSections formData={formData} setFormData={setFormData} />
        </MapView>
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
