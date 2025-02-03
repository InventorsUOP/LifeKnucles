import AppHeader from "@/components/AppHeader";
import StatusInput from "@/components/status/StatusInput";
import StatusMessage from "@/components/status/StatusMessage";
import React, { useState } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { FAB } from "react-native-paper";

export default function LeaderBoard() {
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([]);

  // Function to handle sending messages
  const handleSend = (text: string) => {
    setMessages([...messages, { text, isUser: true }]);
    // Simulate a system response
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: 'Thank you for your message!', isUser: false }]);
    }, 1000);
  };

  return (
    <>
      <AppHeader title="Status" />
      <View style={styles.container}>
        <Text style={styles.title}>Recent Updates</Text>
        <ScrollView style={styles.messagesContainer}>
          {messages.map((msg, index) => (
            <StatusMessage key={index} text={msg.text} isUser={msg.isUser} />
          ))}
        </ScrollView>
        <StatusInput onSend={handleSend} />
      </View>
      <FAB
        icon="refresh"
        size="medium"
        mode="elevated"
        style={styles.fab}
        onPress={() => setMessages([])} // Clear messages or refresh data
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f2f5",
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 16,
  },
  messagesContainer: {
    flex: 1,
    marginBottom: 16,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 80,
    backgroundColor: "#1877f2", // Facebook blue
  },
});


