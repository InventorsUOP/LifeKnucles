import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AddComments = ({ onSubmit }) => {
    const [comment, setComment] = useState('');

    const handleSubmit = () => {
        if (comment.trim()) {
            onSubmit(comment); // Trigger onSubmit passed from the parent
            setComment(''); // Clear the input field after submission
        }
    };

    return (
        <View className="flex-row items-center border border-gray-300 rounded-full bg-white p-2 mb-2">
            <TextInput
                value={comment}
                onChangeText={setComment}
                placeholder="Write a comment..."
                className="flex-1 mr-2 p-2 rounded-full bg-gray-100"
            />
            <TouchableOpacity onPress={handleSubmit} className="p-2">
                <Icon name="paper-plane" size={24} color="#007bff" />
            </TouchableOpacity>
        </View>
    );
};

export default AddComments;
