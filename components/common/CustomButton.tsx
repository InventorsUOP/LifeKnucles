import { FormColors } from "@/constants/Colors";
import React from "react";
import { GestureResponderEvent, Text, TouchableOpacity } from "react-native";

interface CustomButtonProps {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
}

const CustomButton = ({ title, onPress }: CustomButtonProps) => {
  return (
    <TouchableOpacity
      className="bg-green-600 py-4 px-6 rounded-full w-7/12 mx-auto flex items-center justify-center"
      onPress={onPress}
    >
      <Text className="text-white text-lg">{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
