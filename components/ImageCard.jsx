import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Icons for like, dislike, and comment
import { Button } from 'react-native-paper'; // Import the Button component
import image from '@/constants/image'; // Import the image constants
import PropTypes from 'prop-types'; // Import PropTypes

function ImageCard({ title, description }) {
    // State for likes, dislikes, and comments
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [comments, setComments] = useState(0);

    // Handlers for like, dislike, and comment
    const handleLike = () => {
        setLikes(likes + 1);
    };

    const handleDislike = () => {
        setDislikes(dislikes + 1);
    };

    const handleComment = () => {
        setComments(comments + 1);
    };

    return (
        <View className="border p-4 mb-3 rounded-lg bg-white shadow-md">
            <Image
                source={image.statusImage} // Use the imported image
                className="w-full h-[200px] rounded-[10px]"
                resizeMode="cover"
            />
            <Text className="font-bold text-lg mt-4">{title}</Text>
            <Text className="text-gray-700 mt-2">{description}</Text>

            {/* Like, Dislike, and Comment buttons */}
            <View className="flex-row mt-4 justify-between">
                <Button
                    mode="text"
                    onPress={handleLike}
                    icon={() => (
                        <FontAwesome
                            name="thumbs-up"
                            size={40} // Set icon size through the size prop
                            color="blue" // Color applied directly through props
                        />
                    )}
                    className="flex-row items-center w-20 h-20" // Tailwind classes for width and height
                >
                    <Text className="text-blue-500 text-lg ml-2">{likes}</Text>
                </Button>

                <Button
                    mode="text"
                    onPress={handleComment}
                    icon={() => (
                        <FontAwesome
                            name="comment"
                            size={40} // Set icon size through the size prop
                            color="gray" // Color applied directly through props
                        />
                    )}
                    className="flex-row items-center w-20 h-20" // Tailwind classes for width and height
                >
                    <Text className="text-gray-500 text-lg ml-2">{comments}</Text>
                </Button>

                <Button
                    mode="text"
                    onPress={handleDislike}
                    icon={() => (
                        <FontAwesome
                            name="thumbs-down"
                            size={40} // Set icon size through the size prop
                            color="red" // Color applied directly through props
                        />
                    )}
                    className="flex-row items-center w-20 h-20" // Tailwind classes for width and height
                >
                    <Text className="text-red-500 text-lg ml-2">{dislikes}</Text>
                </Button>
            </View>
        </View>
    );
}

// Define prop types
ImageCard.propTypes = {
    title: PropTypes.string.isRequired, // title is required and should be a string
    description: PropTypes.string.isRequired, // description is required and should be a string
};

export default ImageCard;
