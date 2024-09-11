import AppHeader from "@/components/AppHeader";
import React from "react";
import Post from "@/components/Post";
import { FlatList, View, StyleSheet } from "react-native";

const posts = [
  { id: '1' }, // You can add more fields if needed
  { id: '2' },
  // Add more post data as needed
];

export default function LeaderBoard() {
  const renderItem = ({ item }) => <Post />; // Render each Post component

  return (
    <View style={styles.container}>
      <AppHeader title="Leaderboard" />
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Optional: Set a background color for the container
  },
  flatListContent: {
    paddingBottom: 20, // Optional: Add padding at the bottom if needed
  },
});

