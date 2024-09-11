import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
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
        <View style={styles.container}>
            <TextInput
                value={comment}
                onChangeText={setComment}
                placeholder="Write a comment..."
                style={styles.textInput}
            />
            <TouchableOpacity onPress={handleSubmit} style={styles.iconButton}>
                <Icon name="paper-plane" size={24} color="#007bff" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: '#fff',
        padding: 10,
        marginBottom: 10,
    },
    textInput: {
        flex: 1,
        marginRight: 10,
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#f0f0f0',
    },
    iconButton: {
        padding: 10,
    },
});

export default AddComments;
