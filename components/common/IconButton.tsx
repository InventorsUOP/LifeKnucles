import { FormColors } from "@/constants/Colors";
import React from "react";
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-paper";

interface Dimensions {
  width: number;
  height: number;
}

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
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.buttonContent}>
        <Icon color="#aaa" source={iconName} size={iconSize} />
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: FormColors.border,
    padding: 15,
    borderRadius: 15,
  },
  buttonContent: {
    flexDirection: "column",
    alignItems: "center",
  },
  buttonText: {
    color: "#000",
    marginTop: 5,
    fontSize: 15,
    fontWeight: "400",
  },
});

export default IconButton;
