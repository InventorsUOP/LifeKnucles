import React, { useState } from "react";
import { BottomNavigation } from "react-native-paper";
import Home from "./home";
import Community from "./community";
import Info from "./info";
import Status from "./status";

export default function TabLayout() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "home",
      title: "Home",
      focusedIcon: "home",
      unfocusedIcon: "home-outline",
    },
    {
      key: "Status",
      title: "Status",
      focusedIcon: "message",
      unfocusedIcon: "message-outline",
    },
    {
      key: "info",
      title: "Info",
      focusedIcon: "information",
      unfocusedIcon: "information-outline",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    community: Community,
    info: Info,
    Status: Status,
  });

  return (
    <BottomNavigation
      shifting={true}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{
        backgroundColor: "#2E8B57",
        elevation: 1,
        borderRadius: 10,
      }}
      sceneAnimationEnabled={false}
      activeColor="white"
      inactiveColor="black"
      compact={true}
      safeAreaInsets={{ bottom: 0 }}
    />
  );
}
