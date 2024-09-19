import AppHeader from "@/components/AppHeader";
import MapSections from "@/components/common/MapSections";
import WildfireAlertForm from "@/components/WildfireAlertFrom";
import { Camera, CameraView } from "expo-camera";
import React, { useEffect, useRef, useState } from "react";
import { View } from "react-native";
import MapView from "react-native-maps";
import { Button } from "react-native-paper";

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

export default function WildfireAlert() {
  const [formData, setFormData] = useState<FormData>(initialValues);
  const cameraRef = useRef<CameraView | null>(null);
  const [showCamera, setShowCamera] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Camera.requestCameraPermissionsAsync();
        if (status !== "granted") {
          alert("Camera access is required to take photos");
        }
      } catch (error) {
        console.error("Error requesting camera permissions:", error);
      }
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync();
        if (photo) {
          setFormData((currentData) => ({
            ...currentData,
            photos: [...formData.photos, photo.uri],
          }));
          setShowCamera(false);
        }
      } catch (error) {
        console.error("Error capturing image:", error);
        alert("Failed to capture image. Please try again.");
      }
    } else {
      console.log("Camera is not ready");
    }
  };

  const onSubmit = () => {
    console.log("Form Data:");
  };

  return (
    <>
      <AppHeader title="Alert a Fire" />
      <View className="flex-1">
        <View className="h-1/2">
          <MapView
            style={{ flex: 1 }}
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

        <View className="h-1/2 m-5 pb-10">
          <WildfireAlertForm
            formData={formData}
            setFormData={setFormData}
            onSubmit={onSubmit}
            setShowCamera={setShowCamera}
          />
        </View>
      </View>

      {showCamera && (
        <View className="absolute inset-0 w-full h-full flex-end">
          <CameraView
            className="absolute inset-0 w-full h-full"
            ref={cameraRef}
          />
          <View className="absolute bottom-0 w-full flex-row justify-between p-20">
            <Button
              mode="contained"
              onPress={takePicture}
              className="bg-primary"
            >
              Take Picture
            </Button>
            <Button
              mode="contained"
              onPress={() => setShowCamera(false)}
              className="bg-red"
            >
              Cancel
            </Button>
          </View>
        </View>
      )}
    </>
  );
}
