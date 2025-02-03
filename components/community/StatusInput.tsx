import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"; // Install this package

type StatusInputProps = {
    onComment: (text: string) => void;
};

const StatusInput = ({ onComment }: StatusInputProps) => {
    const [comment, setComment] = useState("");

    const handleComment = () => {
        if (comment.trim()) {
            onComment(comment);
            setComment("");
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Write a comment..."
                value={comment}
                onChangeText={setComment}
            />
            <TouchableOpacity onPress={handleComment}>
                <Icon name="send" size={24} color="#1877f2" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: "#e0e0e0",
    },
    input: {
        flex: 1,
        padding: 8,
        borderRadius: 20,
        backgroundColor: "#f0f2f5",
        marginRight: 8,
    },
});

export default StatusInput;