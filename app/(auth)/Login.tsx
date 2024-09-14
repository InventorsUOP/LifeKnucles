import React from 'react';
import { ImageBackground, TextInput, View, Text, TouchableOpacity } from 'react-native';
import image from "@/constants/image";

export default function Login() {
  return (
    <ImageBackground

    source={image.bgimage}
    style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} 
    imageStyle={{ opacity: 0.5 }}
  >
    <View className="bg-white/30 p-8 rounded-2xl w-80 shadow-md items-center shadow-2xl">
      <TextInput
        placeholder="User Name"
        placeholderTextColor="#AAA"
        className="bg-white/50 px-4 py-4 rounded-full mb-10 text-lg text-gray-700 border border-black  w-full font-pregular"
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="#AAA"
        secureTextEntry
        className="bg-white/50 px-4 py-4 rounded-full mb-10 text-lg text-gray-700 border border-black  w-full font-pregular"
      />
      
        <TouchableOpacity className="bg-green-600 py-1 rounded-full w-40  shadow-2xl">
        <Text className="text-white text-center text-lg font-pregular">Log In</Text>
        </TouchableOpacity>
      
    </View>

  </ImageBackground>
  );
}
