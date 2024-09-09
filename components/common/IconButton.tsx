import { FormColors } from "@/constants/Colors";
import React from "react";
import {
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-paper";

interface IconButtonProps {
  title: string;
  iconName: string;
  iconSize?: number;
  onPress: (event: GestureResponderEvent) => void;
}

const IconButton = ({
  title,
  iconName,
  iconSize = 40,
  onPress,
}: IconButtonProps) => {
  return (
    <TouchableOpacity
      className="border border-green-600 p-4 rounded-lg"
      onPress={onPress}
    >
      <View className="flex flex-col items-center">
        <Icon color="#aaa" source={iconName} size={iconSize} />
        <Text className="text-black mt-1 text-base font-normal">{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default IconButton;
