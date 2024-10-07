import { TouchableOpacity, View, Image, ScrollView, Alert } from "react-native";
import {
  Button,
  Icon,
  MD2Colors,
  Modal,
  Portal,
  Text,
} from "react-native-paper";
import ImageViewing from "react-native-image-viewing";
import React from "react";
import { useFireAlertById, useFireAlerts } from "../common/FireAlertProvider";

interface HomeAlertModalProps {
  visible: boolean;
  hideModal: () => void;
  id: string;
}

export default function HomeAlertModal({
  visible,
  hideModal,
  id,
}: Readonly<HomeAlertModalProps>) {
  const [isImageViewingVisible, setImageViewingVisible] = React.useState(false);
  const fireAlerts = useFireAlerts();
  const alert = useFireAlertById(id);
  const images = alert?.photos.map((uri) => ({ uri })) || [];

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={{
          padding: 20,
          backgroundColor: "white",
          margin: 20,
          borderRadius: 10,
        }}
      >
        <Text variant="titleLarge">{alert?.title}</Text>
        <Text className="text-gray mb-2">
          {alert?.formattedDate + " " + alert?.formattedTime}
        </Text>
        <View className="flex-row justify-between">
          <View className="flex-row items-center">
            <Icon source="check-circle" size={20} color={MD2Colors.green500} />
            <Text className="text-green-500">
              {" "}
              {(alert?.confirmedBy || []).length} Confirmed
            </Text>
          </View>
          <View className="flex-row items-center">
            <Icon source="alert-circle" size={20} color={MD2Colors.red500} />
            <Text className="text-red-500">
              {" "}
              {(alert?.reportedAsSpamBy || []).length} Marked as Spam
            </Text>
          </View>
        </View>
        <Text className="mb-4 mt-2">{alert?.description}</Text>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <ScrollView horizontal={true}>
            {images.map((image, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setImageViewingVisible(true)}
              >
                <Image
                  source={{ uri: image.uri }}
                  style={{ width: 80, height: 80, margin: 5, borderRadius: 10 }}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <ImageViewing
          images={images}
          imageIndex={0}
          visible={isImageViewingVisible}
          onRequestClose={() => setImageViewingVisible(false)}
        />
        <Button onPress={hideModal} className="mt-4">
          Close
        </Button>
      </Modal>
    </Portal>
  );
}
