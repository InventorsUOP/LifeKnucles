import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import AppHeader from "@/components/AppHeader";
import StatusImage from "@/components/community/StatusImage";
import StatusReactions from "@/components/community/StatusReactions";
import StatusComment from "@/components/community/StatusComment";
import StatusInput from "@/components/community/StatusInput";

export default function Status() {
  const [comments, setComments] = useState<Array<{ text: string; user: string }>>([]);

  const handleComment = (text: string) => {
    setComments([...comments, { text, user: "You" }]);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <AppHeader  title="life-kunuckel"/>
        <StatusImage/>
        <StatusReactions />
        {comments.map((comment, index) => (
          <StatusComment key={index} text={comment.text} user={comment.user} />
        ))}
      </ScrollView>
      <StatusInput onComment={handleComment} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
