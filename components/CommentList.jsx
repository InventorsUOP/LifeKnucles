import React, { useState } from 'react';
import { FlatList, View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import CommentCard from './CommentsCard';
import AddComment from './AddComments';

export default function CommentList() {
    const [comments, setComments] = useState([
        {
            id: "1",
            author: "John Doe",
            date: "25-08-18",
            time: "03:15 PM",
            content: "Great post! Really informative.",
        },
        {
            id: "2",
            author: "Jane Smith",
            date: "25-08-18",
            time: "04:20 PM",
            content: "I have a question about the topic discussed.",
        },
        {
            id: "3",
            author: "Samuel Green",
            date: "26-08-18",
            time: "12:35 PM",
            content: "Thanks for sharing!",
        },
        {
            id: "4",
            author: "Lisa Brown",
            date: "27-08-18",
            time: "10:10 AM",
            content: "Can you explain more about the last point?",
        },
        {
            id: "5",
            author: "Michael Johnson",
            date: "27-08-18",
            time: "11:45 AM",
            content: "This is very useful, thanks!",
        },
    ]);

    // Function to add new comment
    const addComment = (newComment) => {
        const newId = (comments.length + 1).toString(); // Generate new id
        const currentDate = new Date().toLocaleDateString(); // Get current date
        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // Get current time

        const newCommentObject = {
            id: newId,
            author: "Anonymous", // You can modify this to accept the author name dynamically
            date: currentDate,
            time: currentTime,
            content: newComment,
        };

        setComments([...comments, newCommentObject]); // Add the new comment to the state
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={comments}
                renderItem={({ item }) => (
                    <CommentCard
                        id={item.id}
                        author={item.author}
                        date={item.date}
                        time={item.time}
                        content={item.content}
                    />
                )}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContent}
            />
            <View style={styles.addCommentContainer}>
                <AddComment onSubmit={addComment} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    listContent: {
        paddingBottom: 60, // Ensure there's enough space for the AddComment component
    },
    addCommentContainer: {
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    },
});
