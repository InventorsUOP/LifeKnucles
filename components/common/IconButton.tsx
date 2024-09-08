import { FormColors } from "@/constants/Colors";
import React from "react";
import {
  GestureResponderEvent,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface Dimensions {
  width: number;
  height: number;
}

interface IconButtonProps {
  title: string;
  iconUri: any;
  dimensions?: Dimensions;
  onPress: (event: GestureResponderEvent) => void;
}

const IconButton = ({
  title,
  iconUri,
  dimensions = { width: 40, height: 40 },
  onPress,
}: IconButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.buttonContent}>
        <Image
          source={iconUri}
          style={{ width: dimensions.width, height: dimensions.height }}
        />
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
