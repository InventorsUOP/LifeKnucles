import React, { useState, memo } from 'react';
import { View, Text, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Icons for like, dislike, and comment
import { Button } from 'react-native-paper'; // Import the Button component
import image from '@/constants/image'; // Import the image constants
import PropTypes from 'prop-types'; // Import PropTypes

// Create a separate IconComponent for the FontAwesome icon
const IconComponent = ({ iconName, size, color }) => (
    <FontAwesome
        name={iconName}
        size={size}
        color={color}
    />
);

// Define PropTypes for IconComponent
IconComponent.propTypes = {
    iconName: PropTypes.string.isRequired, // Icon name required
    size: PropTypes.number.isRequired,     // Icon size required
    color: PropTypes.string.isRequired,    // Icon color required
};

// Create a memoized IconButton component
const IconButton = memo(({ iconName, size, color, onPress, count, countColor }) => {
    return (
        <Button
            mode="text"
            onPress={onPress}
            icon={() => <IconComponent iconName={iconName} size={size} color={color} />}  // Use the IconComponent
            className="flex-row items-center w-20 h-20"
        >
            <Text className={`ml-2 text-lg`} style={{ color: countColor }}>{count}</Text>
        </Button>
    );
});

// Define PropTypes for IconButton
IconButton.propTypes = {
    iconName: PropTypes.string.isRequired, // Icon name required
    size: PropTypes.number,                // Icon size
    color: PropTypes.string,               // Icon color
    onPress: PropTypes.func.isRequired,    // Click handler
    count: PropTypes.number.isRequired,    // Like/Comment/Dislike count
    countColor: PropTypes.string           // Text color for the count
};

// Main ImageCard component
function ImageCard({ title, description }) {
    // State for likes, dislikes, and comments
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [comments, setComments] = useState(0);

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
                <IconButton
                    iconName="thumbs-up"
                    size={40}
                    color="blue"
                    onPress={() => setLikes(likes + 1)}
                    count={likes}
                    countColor="blue"
                />

                <IconButton
                    iconName="comment"
                    size={40}
                    color="gray"
                    onPress={() => setComments(comments + 1)}
                    count={comments}
                    countColor="gray"
                />

                <IconButton
                    iconName="thumbs-down"
                    size={40}
                    color="red"
                    onPress={() => setDislikes(dislikes + 1)}
                    count={dislikes}
                    countColor="red"
                />
            </View>
        </View>
    );
}

// Define PropTypes for ImageCard
ImageCard.propTypes = {
    title: PropTypes.string.isRequired,    // Title is required and should be a string
    description: PropTypes.string.isRequired, // Description is required and should be a string
};

export default ImageCard;
