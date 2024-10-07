import CustomButton from "@/components/CustomButton";
import image from "@/constants/image";
import { authFirebase } from "@/services/FireBase/firebaseConfig";
import { useRouter } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Alert, ImageBackground, Text, TextInput, View } from "react-native";

export default function Login() {
	const router = useRouter();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleLogin = async () => {
		try {
			const userCredential = await signInWithEmailAndPassword(
				authFirebase,
				email,
				password
			);
			router.push("home");
		} catch (err: any) {
			setError(err.message); // Set error message if login fails
			Alert.alert("Login Error", err.message); // Display alert with the error
		}
	};

	return (
		<ImageBackground
			source={image.bgimage}
			style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
			imageStyle={{ opacity: 0.5 }}
		>
			<View className="bg-white/30 p-8 rounded-2xl w-80 shadow-md items-center shadow-2xl">
				<TextInput
					placeholder="Email"
					placeholderTextColor="#AAA"
					className="bg-white/50 px-4 py-4 rounded-full mb-10 text-lg text-gray-700 border border-black w-full font-pregular"
					value={email}
					onChangeText={setEmail} // Store email input
					keyboardType="email-address"
					autoCapitalize="none"
				/>
				<TextInput
					placeholder="Password"
					placeholderTextColor="#AAA"
					secureTextEntry
					className="bg-white/50 px-4 py-4 rounded-full mb-10 text-lg text-gray-700 border border-black w-full font-pregular"
					value={password}
					onChangeText={setPassword} // Store password input
				/>
				{error ? (
					<Text style={{ color: "red", marginBottom: 10 }}>{error}</Text>
				) : null}
				<CustomButton text={"Sign-in"} onpress={handleLogin} icon="login" />
			</View>
		</ImageBackground>
	);
}
