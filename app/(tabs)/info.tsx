import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import images from "@/constants/image";
import { useRouter } from "expo-router";
import AppHeader from "@/components/AppHeader";
import {
  useBlogPosts,
  useSetPostID,
} from "@/components/common/BlogPostProvider";

export default function InfoPageProps() {
  const router = useRouter();
  const blogPosts = useBlogPosts();
  const setPostID = useSetPostID();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        setPostID(item.id);
        router.push("../blogPage");
      }}
    >
      <View className="p-1 border-b-2 border-b-indigo-500">
        <Text className="text-lg mb-1 font-semibold">{item.title}</Text>
        <Text className="text-sm text-gray-200 text-justify" numberOfLines={2}>
          {item.summary}
        </Text>
        <Text className="text-xs text-gray-300 mt-1">{item.date}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      <AppHeader title="App Info" />
      <ScrollView className="flex-1 p-4 bg-white bg-opacity-90">
        <View className="flex flex-row items-center mb-5">
          <TextInput
            placeholder="Search..."
            className="flex-1 h-10 border border-gray-300 rounded-lg px-3"
          />
        </View>
        <Image source={images.knucles} className="w-full h-52 mb-5" />
        <Text className="text-2xl font-bold mb-2">Welcome to App Info</Text>
        <Text className="text-base leading-6 text-justify">
          This page serves as a comprehensive guide to understanding the
          Knuckles Mountain Range, its environmental significance, the dangers
          it faces such as wildfires, and the preventive measures we can take.
          Explore the sections below to learn more about the Knuckles ecosystem,
          how wildfires happen, safety precautions, and what actions to take in
          case of an emergency. Our app also provides a tutorial to help you
          navigate and make the most of its features.
        </Text>
        <Text className="mb-5 font-psemibold text-xl text-black underline">
          Recent Blogs
        </Text>
        <View className="mb-5 space-y-3 flex-1 pl-3 pr-2">
          {blogPosts.map((post) => (
            <View key={post.id}>{renderItem({ item: post })}</View>
          ))}
        </View>
        <View className="mt-0 bg-gray-100 rounded-lg">
          <Text className="text-red-500 m-5 italic mt-2">
            Developed By: Inventors Club University Of Peradeniya
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
