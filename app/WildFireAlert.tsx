import AppHeader from "@/components/AppHeader";
import MapSections from "@/components/common/MapSections";
import WildfireAlertForm from "@/components/WildfireAlertFrom";
import { Camera, CameraView } from "expo-camera";
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MapView from "react-native-maps";

export interface FormData {
  markedSections: Sections[];
  name: string;
  address: string;
  contactNumber: string;
  photos: string[];
}

const initialValues: FormData = {
  markedSections: [],
  name: "",
  address: "",
  contactNumber: "",
  photos: [],
};

const WildfireAlert: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialValues);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const cameraRef = useRef<CameraView | null>(null);
  const [showCamera, setShowCamera] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      if (photo) {
        setFormData((currentData) => ({
          ...currentData,
          photos: [...formData.photos, photo.uri],
        }));
        setShowCamera(false);
      }
    }
  };

  const onSubmit = () => {
    console.log("Form Data:");
  };

  return (
    <>
      <View style={styles.container}>
        <View>
          <AppHeader title="Alert a Fire" />
        </View>

        <View style={styles.mapArea}>
          <MapView
            style={styles.map}
            provider={"google"}
            mapType="satellite"
            initialRegion={{
              latitude: 7.44,
              longitude: 80.75506,
              latitudeDelta: 0.25,
              longitudeDelta: 0.25,
            }}
          >
            <MapSections formData={formData} setFormData={setFormData} />
          </MapView>
        </View>

        <View style={styles.formArea}>
          <WildfireAlertForm
            formData={formData}
            setFormData={setFormData}
            onSubmit={onSubmit}
            setShowCamera={setShowCamera}
          />
        </View>
      </View>

      {showCamera && (
        <View style={styles.cameraContainer}>
          <CameraView style={styles.camera} ref={cameraRef} />
          <View style={styles.cameraButtonContainer}>
            <TouchableOpacity style={styles.cameraButton} onPress={takePicture}>
              <Text style={styles.cameraButtonText}>Take Picture</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.cameraButton, styles.cancelButton]}
              onPress={() => setShowCamera(false)}
            >
              <Text style={styles.cameraButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "black",
  },
  container: {
    flex: 1,
  },
  mapArea: {
    flex: 0.5,
  },
  map: {
    flex: 1,
  },
  formArea: {
    flex: 0.5,
    paddingHorizontal: 15,
    marginVertical: 15,
  },
  cameraButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  cameraButton: {
    backgroundColor: "#2E8B57", // Primary color
    padding: 10,
    borderRadius: 5,
  },
  cancelButton: {
    backgroundColor: "red",
  },
  cameraButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  cameraContainer: {
    ...StyleSheet.absoluteFillObject, // Full screen
    justifyContent: "flex-end",
  },
  camera: {
    ...StyleSheet.absoluteFillObject, // Full screen
  },
});

export default WildfireAlert;
