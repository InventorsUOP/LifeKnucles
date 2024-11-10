import AppHeader from "@/components/AppHeader";
import React from "react";
import Post from "@/components/Post";
import { FlatList, View } from "react-native";

const posts = [
  { id: '1' }, // You can add more fields if needed
  { id: '2' },
  // Add more post data as needed
];

export default function Status() {
  const renderItem = ({ item }) => <Post />; // Render each Post component

  return (
    <View className="bg-gray-500 flex-1">
      <AppHeader title="status" />
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }} // Optional: Add padding at the bottom if needed
      />
    </View>
  );
}
