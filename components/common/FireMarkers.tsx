import { Image } from "react-native";
import { Marker } from "react-native-maps";

const MapFireIndicator = ({ fireSection }: { fireSection: MapSection }) => {
  const fireIcon = require("../../assets/images/fire.png");

  const { sectionCenter } = fireSection;
  const defaultCoordinate: Coordinate = { latitude: 0, longitude: 0 };

  const centerCoordinate = sectionCenter || defaultCoordinate;

  return (
    <Marker coordinate={centerCoordinate}>
      <Image source={fireIcon} style={{ width: 40, height: 40 }} />
    </Marker>
  );
};

export default MapFireIndicator;
