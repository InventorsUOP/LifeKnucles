import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Icons for like and dislike
import image from '@/constants/image'; // Import the image constants

function ImageCard({ title, description }) {
    // State for likes and dislikes
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    // Handlers for like and dislike
    const handleLike = () => {
        setLikes(likes + 1);
    };

    const handleDislike = () => {
        setDislikes(dislikes + 1);
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

            {/* Like & Dislike buttons */}
            <View className="flex-row mt-4 justify-between">
                <TouchableOpacity onPress={handleLike} className="flex-row items-center">
                    <FontAwesome name="thumbs-up" size={50} color="blue" />
                    <Text className="ml-2">{likes}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleDislike} className="flex-row items-center">
                    <FontAwesome name="thumbs-down" size={50} color="red" />
                    <Text className="ml-2">{dislikes}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default ImageCard;
