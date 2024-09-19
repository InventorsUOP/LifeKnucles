// InfoPage/_layout.tsx
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Slot } from "expo-router";

const Layout: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Slot />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 20,
  },
});

export default Layout;
