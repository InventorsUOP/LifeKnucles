import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"; // Install this package

type CommentProps = {
    text: string;
    user: string;
};

const StatusComment = ({ text, user }: CommentProps) => {
    const [liked, setLiked] = useState(false);

    return (
        <View style={styles.commentContainer}>
            <Text style={styles.userName}>{user}</Text>
            <Text style={styles.commentText}>{text}</Text>
            <TouchableOpacity onPress={() => setLiked(!liked)} style={styles.reactionButton}>
                <Icon name={liked ? "thumb-up" : "thumb-up-off-alt"} size={16} color={liked ? "#1877f2" : "#666"} />
                <Text style={[styles.reactionText, { color: liked ? "#1877f2" : "#666" }]}>Like</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    commentContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#e0e0e0",
    },
    userName: {
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 4,
    },
    commentText: {
        fontSize: 14,
        color: "#333",
    },
    reactionButton: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 4,
    },
    reactionText: {
        fontSize: 14,
        marginLeft: 4,
    },
});

export default StatusComment;