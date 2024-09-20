import React, { useState } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { Button, Card, Text, Icon, MD2Colors } from "react-native-paper";
import MapView, { Marker } from "react-native-maps";
import image from "@/constants/image";
import { SafeAreaView } from "react-native-safe-area-context";

// interface FireAlertScreenProps {
//   id: string;
//   title: string;
//   date: string;
//   time: string;
//   description: string;
//   confirmedCount: number;
//   spamCount: number;
//   latitude: number;
//   longitude: number;
// }
// {
//     id,
//     title,
//     date,
//     time,
//     description,
//     confirmedCount,
//     spamCount,
//     latitude,
//     longitude,
//   }: Readonly<FireAlertScreenProps>

export default function alert() {
  const [markedAsConfirmed, setMarkedAsConfirmed] = useState(false);
  const [markedAsSpam, setMarkedAsSpam] = useState(false);

  const handleConfirm = () => setMarkedAsConfirmed(true);
  const handleSpam = () => setMarkedAsSpam(true);

  const title = "Fire Alert";
  const date = "2024-10-05";
  const time = "02:30 PM";
  const description = "Fire near the section 4";
  const confirmedCount = 5;
  const spamCount = 2;
  const latitude = 7.420629;
  const longitude = 80.775532;

  return (
    <ImageBackground
      source={image.bgalert}
      style={{ flex: 1, justifyContent: "center" }}
    >
      <SafeAreaView>
        <View className="flex-row justify-center items-center">
          <Text
            className="center"
            variant="displayMedium"
            style={{ color: "#b91c1c" }}
          >
            Fire Alert!
          </Text>
        </View>
        {/* <Card style={styles.alertCard}>
          <Card.Title
            title={title}
            subtitle={`${date} ${time}`}
            titleStyle={styles.alertTitle}
            subtitleStyle={styles.alertSubtitle}
            left={() => <Icon icon="fire" size={50} color={MD2Colors.red500} />}
          />
          <Card.Content>
            <Text style={styles.description}>{description}</Text>

            <View className="flex-row justify-between">
              <View className="flex-row items-center">
                <Icon
                  source="check-circle"
                  size={20}
                  color={MD2Colors.green500}
                />
                <Text className="text-green-500">
                  {" "}
                  {confirmedCount} Confirmed
                </Text>
              </View>
              <View className="flex-row items-center">
                <Icon
                  source="alert-circle"
                  size={20}
                  color={MD2Colors.red500}
                />
                <Text className="text-red-500">
                  {" "}
                  {spamCount} Marked as Spam
                </Text>
              </View>
            </View>

           
            
          </Card.Content>
        </Card> */}
        <View className="m-5 h-[400px]">
          <MapView
            className="w-full h-full"
            initialRegion={{
              latitude: latitude,
              longitude: longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          >
            <Marker coordinate={{ latitude: latitude, longitude: longitude }} />
          </MapView>
        </View>
        <View className="flex-row space-x-4 justify-center mt-5">
          <Button
            mode="contained"
            icon="check-circle"
            onPress={handleConfirm}
            disabled={markedAsConfirmed}
            style={styles.confirmButton}
          >
            Confirm
          </Button>

          <Button
            mode="contained"
            icon="alert-circle"
            onPress={handleSpam}
            disabled={markedAsSpam}
            style={styles.spamButton}
          >
            Mark as Spam
          </Button>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
  },
  alertCard: {
    backgroundColor: "rgba(255, 255, 255, 0.82)",
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 10,
  },
  alertTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#b91c1c",
  },
  alertSubtitle: {
    fontSize: 16,
    color: "#6b7280",
  },
  description: {
    marginVertical: 10,
    fontSize: 16,
    color: "#111827",
  },
  statusText: {
    fontSize: 14,
    color: "#4b5563",
  },
  map: {
    height: 200,
    width: "100%",
    marginVertical: 20,
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  confirmButton: {
    backgroundColor: MD2Colors.green500,
  },
  spamButton: {
    backgroundColor: MD2Colors.red500,
  },
});
