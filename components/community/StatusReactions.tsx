import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"; // Install this package

const StatusReactions = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.reactionButton}>
                <Icon name="thumb-up" size={20} color="#666" />
                <Text style={styles.reactionText}>Like</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.reactionButton}>
                <Icon name="chat" size={20} color="#666" />
                <Text style={styles.reactionText}>Comment</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.reactionButton}>
                <Icon name="share" size={20} color="#666" />
                <Text style={styles.reactionText}>Share</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: "#e0e0e0",
    },
    reactionButton: {
        flexDirection: "row",
        alignItems: "center",
    },
    reactionText: {
        fontSize: 14,
        marginLeft: 4,
        color: "#666",
    },
});

export default StatusReactions;