import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type MessageProps = {
    text: string;
    isUser: boolean; // To differentiate between user and system messages
};

const StatusMessage = ({ text, isUser }: MessageProps) => {
    return (
        <View style={[styles.messageContainer, isUser ? styles.userMessage : styles.systemMessage]}>
            <Text style={styles.messageText}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    messageContainer: {
        maxWidth: '80%',
        padding: 12,
        borderRadius: 12,
        marginVertical: 4,
    },
    userMessage: {
        alignSelf: 'flex-end',
        backgroundColor: '#1877f2', // Facebook blue
    },
    systemMessage: {
        alignSelf: 'flex-start',
        backgroundColor: '#e4e6eb', // Light gray
    },
    messageText: {
        fontSize: 16,
        color: '#000',
    },
});

export default StatusMessage;