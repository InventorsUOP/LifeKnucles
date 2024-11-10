import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types'; // Import PropTypes

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

// Define prop types
AddComments.propTypes = {
    onSubmit: PropTypes.func.isRequired, // Expecting onSubmit to be a function and required
};

export default AddComments;
