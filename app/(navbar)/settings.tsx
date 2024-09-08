import React from "react";
import { View, Text, Switch } from "react-native";
import { List, Divider } from "react-native-paper";
import AppHeader from "@/components/AppHeader";

export default function Settings() {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <>
      <AppHeader title="Settings" />
      <View className="flex-1 bg-gray-100 p-5">
        <List.Section>
          <List.Item
            title="Notifications"
            right={() => (
              <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
            )}
          />
          <Divider />
          <List.Item title="Dark Mode" right={() => <Switch />} />
          <Divider />
          <List.Item title="Language" description="English" />
          <Divider />
        </List.Section>
      </View>
    </>
  );
}
