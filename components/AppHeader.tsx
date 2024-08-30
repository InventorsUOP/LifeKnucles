import { Appbar, Menu } from "react-native-paper";
import React, { useState, useRef } from "react";
import { View, findNodeHandle, UIManager } from "react-native";

interface AppHeaderProps {
  readonly title: string;
}

export default function AppHeader({ title }: AppHeaderProps) {
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const menuIconRef = useRef(null);

  const openMenu = () => {
    if (menuIconRef.current) {
      UIManager.measure(
        findNodeHandle(menuIconRef.current),
        (x, y, width, height, pageX, pageY) => {
          setMenuPosition({ x: pageX + 70, y: pageY + height + 10 });
          setMenuVisible(true);
        }
      );
    }
  };

  const closeMenu = () => setMenuVisible(false);

  return (
    <View>
      <Appbar.Header className="bg-primary">
        <Appbar.Content title={title} />
        {/* <Appbar.Action icon="magnify" onPress={() => {}} /> */}
        <Appbar.Action icon="bell" onPress={() => {}} />
        <Appbar.Action
          icon="menu"
          color="white"
          onPress={openMenu}
          ref={menuIconRef}
        />
      </Appbar.Header>
      <Menu
        visible={menuVisible}
        onDismiss={closeMenu}
        anchor={menuPosition}
        contentStyle={{
          backgroundColor: "#2E8B57",
          minWidth: 150,
        }}
        anchorPosition={"top"}
      >
        <Menu.Item onPress={() => {}} title="Account" />
        <Menu.Item onPress={() => {}} title="Rank" />
        <Menu.Item onPress={() => {}} title="Setting" />
      </Menu>
    </View>
  );
}
