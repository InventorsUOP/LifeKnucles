import { FlatList } from "react-native";
import HomeAlertCard from "./HomeAlertCard";
import { useFireAlerts } from "../common/FireAlertProvider";

export default function HomeAlert() {
  const fireAlerts = useFireAlerts();

  return (
    <FlatList
      data={fireAlerts}
      renderItem={({ item }) => <HomeAlertCard id={item.id} current={true} />} // TODO: Handle the current status
      keyExtractor={(item) => item.id}
      className="m-3"
    />
  );
}
