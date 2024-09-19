import { FormData } from "@/app/WildFireAlert";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import React, { SetStateAction } from "react";
import { SubmitHandler } from "react-hook-form";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import IconButton from "./common/IconButton";
import { Button } from "react-native-paper";

const WildfireAlertForm = ({
  onSubmit,
  formData,
  setFormData,
  setShowCamera,
}: {
  onSubmit: SubmitHandler<FormData>;
  formData: FormData;
  setFormData: React.Dispatch<SetStateAction<FormData>>;
  setShowCamera: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const handleSubmitBtn = () => {
    console.log(formData);
  };

  const removePhoto = (index: number) => {
    setFormData((currentData) => ({
      ...currentData,
      photos: currentData.photos.filter((_, i) => i !== index),
    }));
  };

  const selectImageFromLibrary = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access the gallery is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 1,
    });

    if (!result.canceled && result.assets) {
      const newPhotos = result.assets.map((asset) => asset.uri);
      setFormData((currentData) => ({
        ...currentData,
        photos: [...formData.photos, ...newPhotos],
      }));
    }
  };

  return (
    <ScrollView className="p-2">
      <Text className="text-2xl font-semibold text-center mt-5">
        Wildfire Alert Form
      </Text>
      <Text className="text-center text-base font-light mt-2 mb-4 mx-5">
        If you want to remain anonymous, leave name, address, and contact number
        blank.
      </Text>

      <Text className="mb-1">Name</Text>
      <TextInput
        className="border border-green-600 p-3 rounded-lg mb-4"
        onChangeText={(event) =>
          setFormData((currentData) => ({
            ...currentData,
            name: event,
          }))
        }
        value={formData.name}
      />

      <Text className="mb-1">Address</Text>
      <TextInput
        className="border border-green-600 p-3 rounded-lg mb-4"
        onChangeText={(event) =>
          setFormData((currentData) => ({
            ...currentData,
            address: event,
          }))
        }
        value={formData.address}
      />

      <Text className="mb-1">Contact Number</Text>
      <TextInput
        className="border border-green-600 p-3 rounded-lg mb-4"
        onChangeText={(event) =>
          setFormData((currentData) => ({
            ...currentData,
            contactNumber: event,
          }))
        }
        value={formData.contactNumber}
        inputMode="tel"
      />

      {formData.photos.length > 0 && (
        <>
          <Text>Photos Of The Fire</Text>
          <View className="flex flex-row flex-wrap">
            {formData.photos.map((photo, index) => (
              <View key={photo} className="relative m-2">
                <Image source={{ uri: photo }} className="w-24 h-24" />
                <TouchableOpacity
                  className="absolute top-1 right-1"
                  onPress={() => removePhoto(index)}
                >
                  <Ionicons name="close-circle" size={24} color="red" />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </>
      )}

      <View className="flex flex-row justify-center my-3">
        <View className="flex-1 mx-2">
          <IconButton
            title="Take Photos"
            iconName={"camera-plus-outline"}
            onPress={() => setShowCamera(true)}
          />
        </View>
        <View className="flex-1 mx-2">
          <IconButton
            title="Upload Images"
            iconName={"image-plus"}
            onPress={selectImageFromLibrary}
          />
        </View>
      </View>

      <View className="my-5 pt-2">
        <Button
          mode="contain"
          className="bg-green-600"
          onPress={handleSubmitBtn}
        >
          Submit
        </Button>
      </View>
    </ScrollView>
  );
};

export default WildfireAlertForm;
