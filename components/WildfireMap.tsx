import React, { useState } from "react";
import MapView, { Polygon } from "react-native-maps";

export default function WildfireMap() {
  const [markedSections, setMarkedSections] = useState({});

  const sections = [
    {
      id: "section1",
      coordinates: [
        { latitude: 7.451053, longitude: 80.736968 },
        { latitude: 7.428724, longitude: 80.751887 },
        { latitude: 7.441284, longitude: 80.798614 },
        { latitude: 7.472544, longitude: 80.814377 },
      ],
    },
    {
      id: "section2",
      coordinates: [
        { latitude: 7.420629, longitude: 80.775532 },
        { latitude: 7.442122, longitude: 80.836896 },
        { latitude: 7.411143, longitude: 80.866716 },
        { latitude: 7.373514, longitude: 80.803016 },
      ],
    },
    // Add more sections as needed
  ];

  const handleSectionPress = (id) => {
    setMarkedSections((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <MapView
      provider={"google"}
      mapType="satellite"
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 7.451053,
        longitude: 80.736968,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      {sections.map((section) => (
        <Polygon
          key={section.id}
          coordinates={section.coordinates}
          strokeColor="#F00"
          fillColor={
            markedSections[section.id]
              ? "rgba(255,0,0,0.5)"
              : "rgba(0,0,255,0.1)"
          }
          tappable={true}
          onPress={() => handleSectionPress(section.id)}
        />
      ))}
    </MapView>
  );
}
