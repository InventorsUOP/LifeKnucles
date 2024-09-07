import { View } from "react-native";
import {
  Button,
  Icon,
  MD2Colors,
  Modal,
  Portal,
  Text,
} from "react-native-paper";

interface HomeAlertModalProps {
  visible: boolean;
  hideModal: () => void;
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  confirmedCount: number;
  spamCount: number;
}

export default function HomeAlertModal({
  visible,
  hideModal,
  id,
  title,
  date,
  time,
  description,
  confirmedCount,
  spamCount,
}: Readonly<HomeAlertModalProps>) {
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
        <Text variant="titleLarge">{title}</Text>
        <Text className="text-gray mb-2">{date + " " + time}</Text>
        <View className="flex-row justify-between">
          <View className="flex-row items-center">
            <Icon source="check-circle" size={20} color={MD2Colors.green500} />
            <Text className="text-green-500"> {confirmedCount} Confirmed</Text>
          </View>
          <View className="flex-row items-center">
            <Icon source="alert-circle" size={20} color={MD2Colors.red500} />
            <Text className="text-red-500"> {spamCount} Marked as Spam</Text>
          </View>
        </View>
        <Text className="mb-4 mt-2">{description}</Text>
        <Button onPress={hideModal} className="mt-4">
          Close
        </Button>
      </Modal>
    </Portal>
  );
}
