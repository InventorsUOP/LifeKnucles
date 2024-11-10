// CommentCard.jsx
import React from 'react';
import { View, Text } from 'react-native';

const CommentCard = ({ id, author, date, time, content }) => {
    return (
        <View className="border p-4 mb-3 rounded-lg bg-green-200 shadow-md">
            <Text className="font-bold text-lg">{author}</Text>
            <Text className="text-gray-500 text-sm">{date} at {time}</Text>
            <Text className="mt-2 text-gray-700">{content}</Text>
        </View>
    );
};

export default CommentCard;
