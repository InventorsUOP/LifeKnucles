import { Appbar, Badge, List, Menu, Modal, Portal } from "react-native-paper";
import React, { useState, useRef } from "react";
import { View, findNodeHandle, UIManager } from "react-native";
import { useFireAlerts } from "./common/FireAlertProvider";

interface AppHeaderProps {
  readonly title: string;
}

export default function AppHeader({ title }: AppHeaderProps) {
  const [menuVisible, setMenuVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const menuIconRef = useRef(null);
  const fireAlerts = useFireAlerts();

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
  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <View>
      <Appbar.Header className="bg-primary">
        <Appbar.Content title={title} />
        {/* <Appbar.Action icon="magnify" onPress={() => {}} /> */}
        <View>
          <Appbar.Action icon="bell" onPress={openModal} />
          <Badge className="absolute">{(fireAlerts || []).length}</Badge>
        </View>
        <Appbar.Action
          icon="menu"
          color="white"
          onPress={openMenu}
          ref={menuIconRef}
        />
      </Appbar.Header>
      <Portal>
        <Modal
          visible={modalVisible}
          onDismiss={closeModal}
          contentContainerStyle={{
            backgroundColor: "white",
            padding: 20,
            margin: 20,
            borderRadius: 10,
          }}
        >
          {(fireAlerts || []).length > 0 ? (
            fireAlerts.map((alert) => (
              <List.Item key={alert.id} title={alert.title} />
            ))
          ) : (
            <List.Item title="No Alerts" />
          )}
        </Modal>
      </Portal>
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
