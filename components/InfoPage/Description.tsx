import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

interface DescriptionProps {
  subtitle: string;
  content: string;
}

const Description: React.FC<DescriptionProps> = ({ subtitle, content }) => {
  return (
    <View className="p-2">
      <Text variant="titleMedium" className="text-black mt-2">
        {subtitle}
      </Text>
      <Text variant="bodyMedium" className="text-black">
        {content}
      </Text>
    </View>
  );
};

export default Description;
