import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  ScrollView,
} from "react-native";
import CustomButton from "@/components/CustomButton";
import images from "@/constants/image";
import { useRouter } from "expo-router";
import AppHeader from "@/components/AppHeader";

export default function InfoPageProps() {
  const router = useRouter();

  return (
    <>
      <AppHeader title="App Info" />
      <ImageBackground
        source={images.backgroundimage}
        className="flex-1 resize-cover"
      >
        <ScrollView className="flex-1 p-4 bg-white bg-opacity-90">
          <View className="flex flex-row items-center mb-5">
            <TextInput
              placeholder="Search..."
              className="flex-1 h-10 border border-gray-300 rounded-lg px-3"
            />
          </View>
          <Image source={images.backgroundImage} className="w-full h-52 mb-5" />
          <Text className="text-2xl font-bold mb-2">Welcome to App Info</Text>
          <Text className="text-base leading-6 mb-5">
            This page serves as a comprehensive guide to understanding the
            Knuckles Mountain Range, its environmental significance, the dangers
            it faces such as wildfires, and the preventive measures we can take.
            Explore the sections below to learn more about the Knuckles
            ecosystem, how wildfires happen, safety precautions, and what
            actions to take in case of an emergency. Our app also provides a
            tutorial to help you navigate and make the most of its features.
          </Text>
          <View className="mb-5 space-y-3">
            <CustomButton
              text="What is Knuckles"
              onpress={() => router.push("/(page)/KnucklesPage")}
            />
            <CustomButton
              text="How WildFire Happen"
              onpress={() => router.push("/WildFirePage")}
            />
            <CustomButton
              text="Safety Precaution"
              onpress={() => router.push("/SafetyPrecautionPage")}
            />
            <CustomButton
              text="What To Do After A Fire Happen"
              onpress={() => router.push("/AfterFirePage")}
            />
            <CustomButton
              text="App Tutorial"
              onpress={() => router.push("/AppTutorialPage")}
            />
          </View>
          <View className="mt-0 p-2 bg-gray-100 rounded-lg">
            <Text className="text-red-500 m-5 italic">
              Developed By: Inventors Club University Of Peradeniya
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
}
