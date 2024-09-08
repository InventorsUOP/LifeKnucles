import { FormData } from "@/app/WildFireAlert";
import { FormColors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import React, { SetStateAction } from "react";
import { SubmitHandler } from "react-hook-form";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import CustomButton from "./common/CustomButton";
import IconButton from "./common/IconButton";

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
    <ScrollView>
      <Text style={styles.formTitle}> Wildfire Alert Form</Text>
      <Text style={styles.formDescription}>
        If you want to remain annonymous, leave name, address, contact number
        blank.
      </Text>
      <Text>Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={(event) =>
          setFormData((currentData) => ({
            ...currentData,
            name: event,
          }))
        }
        value={formData.name}
      />

      <Text>Address</Text>
      <TextInput
        style={styles.input}
        onChangeText={(event) =>
          setFormData((currentData) => ({
            ...currentData,
            address: event,
          }))
        }
        value={formData.address}
      />

      <Text>Contact Number</Text>
      <TextInput
        style={styles.input}
        onChangeText={(event) =>
          setFormData((currentData) => ({
            ...currentData,
            contactNumber: event,
          }))
        }
        value={formData.contactNumber}
        inputMode="tel"
      />

      <View>
        {formData.photos.length > 0 ? (
          <>
            <Text>Photos Of The Fire</Text>
            <View style={styles.photosContainer}>
              {formData.photos.map((photo, index) => (
                <View key={index} style={styles.photoContainer}>
                  <Image source={{ uri: photo }} style={styles.image} />
                  <TouchableOpacity
                    style={styles.removeButton}
                    onPress={() => removePhoto(index)}
                  >
                    <Ionicons name="close-circle" size={24} color="red" />
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </>
        ) : (
          <View>
            <Text></Text>
          </View>
        )}
      </View>
      <View style={styles.photoBtnContainer}>
        <View style={styles.photoButtonWrapper}>
          <IconButton
            title="Take Photos"
            iconName={"camera-plus-outline"}
            onPress={() => setShowCamera(true)}
          />
        </View>
        <View style={styles.photoButtonWrapper}>
          <IconButton
            title="Upload Images"
            iconName={"image-plus"}
            onPress={selectImageFromLibrary}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton title="Submit" onPress={() => handleSubmitBtn()} />
      </View>
    </ScrollView>
  );
};

export default WildfireAlertForm;

const styles = StyleSheet.create({
  formContainer: {
    padding: 20,
  },
  formTitle: {
    marginTop: 20,
    marginLeft: 5,
    fontSize: 22,
    fontWeight: "500",
    textAlign: "center",
  },
  formDescription: {
    marginVertical: 2,
    marginHorizontal: 20,
    fontSize: 16,
    fontWeight: "300",
    textAlign: "center",
    marginBottom: 15,
  },
  map: {
    flex: 1,
  },
  input: {
    borderColor: FormColors.border,
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
  photosContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  photoContainer: {
    position: "relative",
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
  },
  removeButton: {
    position: "absolute",
    top: 5,
    right: 5,
  },
  buttonContainer: {
    marginVertical: 5,
  },
  photoBtnContainer: {
    marginBottom: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  photoButtonWrapper: {
    flex: 1,
    marginHorizontal: 10,
  },
});
