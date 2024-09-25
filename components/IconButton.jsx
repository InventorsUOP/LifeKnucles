import React, { memo } from 'react';
import { Text } from 'react-native';
import { Button } from 'react-native-paper'; // Import the Button component
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome icons
import PropTypes from 'prop-types'; // Import PropTypes

const IconButton = memo(({ iconName, size, color, onPress, count, countColor }) => {
    return (
        <Button
            mode="text"
            onPress={onPress}
            icon={() => (
                <FontAwesome
                    name={iconName}
                    size={size}
                    color={color}
                />
            )}
            className="flex-row items-center w-20 h-20"
        >
            <Text className={`ml-2 text-lg`} style={{ color: countColor }}>{count}</Text>
        </Button>
    );
});

// Define prop types for IconButton
IconButton.propTypes = {
    iconName: PropTypes.string.isRequired, // Icon name required
    size: PropTypes.number,                // Icon size
    color: PropTypes.string,               // Icon color
    onPress: PropTypes.func.isRequired,    // Click handler
    count: PropTypes.number.isRequired,    // Like/Comment/Dislike count
    countColor: PropTypes.string           // Text color for the count
};

export default IconButton;
