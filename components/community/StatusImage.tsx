import React from "react";
import { View, Image, StyleSheet } from "react-native";

const StatusImage = () => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: "https://cdn.britannica.com/90/191790-050-092C8C2A/Wildfire-Stanislaus-National-Forest-California-2013.jpg" }}
                style={styles.image}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 300,
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
});

export default StatusImage;