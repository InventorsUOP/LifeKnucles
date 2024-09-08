import { Image } from "react-native";
import { Marker } from "react-native-maps";
import { Icon } from "react-native-paper";

const MapFireIndicator = ({ fireSection }: { fireSection: MapSection }) => {
  const fireIcon = require("../../assets/images/fire.png");

  const { sectionCenter } = fireSection;
  const defaultCoordinate: Coordinate = { latitude: 0, longitude: 0 };

  const centerCoordinate = sectionCenter || defaultCoordinate;

  return (
    <Marker coordinate={centerCoordinate}>
      <Icon source={"fire-circle"} size={40} />
    </Marker>
  );
};

export default MapFireIndicator;
