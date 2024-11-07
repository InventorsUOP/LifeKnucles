import { useState } from "react";
import { View } from "react-native";
import {
  Avatar,
  Button,
  Card,
  Icon,
  MD2Colors,
  Text,
} from "react-native-paper";
import HomeAlertModal from "./HomeAlertModal";
import { useFireAlertById } from "../common/FireAlertProvider";

interface HomeAlertCardProps {
  id: string;
  current: boolean;
}

const fireIcon = () => (
  <Avatar.Icon size={45} icon="fire" className="bg-red-500" />
);

export default function HomeAlertCard({
  id,
  current,
}: Readonly<HomeAlertCardProps>) {
  const [visible, setVisible] = useState(false);

  const alert = useFireAlertById(id);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <>
      <Card
        className={`m-2 shadow-lg rounded-lg ${
          current ? "bg-red-100 border-l-4 border-red-600" : "bg-white"
        }`}
        onPress={showModal}
      >
        <Card.Title
          title={alert?.title}
          subtitle={alert?.formattedDate + " " + alert?.formattedTime}
          titleStyle={{ fontWeight: "600", color: "#111827", fontSize: 18 }}
          subtitleStyle={{ color: "#6b7280" }}
          left={fireIcon}
        />
        <Card.Content>
          <Text className="text-gray-700">{alert?.description}</Text>
          <View className="flex-row justify-between">
            <View className="flex-row items-center">
              <Icon
                source="check-circle"
                size={20}
                color={MD2Colors.green500}
              />
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
        </Card.Content>
        <Card.Actions>
          <Button textColor="green" dark={true}>
            View
          </Button>
        </Card.Actions>
      </Card>

      <HomeAlertModal visible={visible} hideModal={hideModal} id={id} />
    </>
  );
}
