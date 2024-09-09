import React, { useState } from "react";
import { ImageBackground, TextInput, View, Text, Alert } from "react-native";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"; // Import updateProfile
import { useRouter } from "expo-router";
import CustomButton from "@/components/CustomButton";
import image from "@/constants/image";
import { authFirebase } from "@/services/FireBase/firebaseConfig"; // Import Firebase auth instance from firebase.js

export default function SignUp() {
	const router = useRouter();

	// States for storing inputs
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState("");

	// Handle sign-up logic
	const handleSignUp = async () => {
		if (password !== confirmPassword) {
			setError("Passwords do not match");
			return;
		}

		try {
			// Create a new user with email and password
			const userCredential = await createUserWithEmailAndPassword(
				authFirebase,
				email,
				password
			);
			router.push("home"); // Navigate to the home screen after successful sign-up
		} catch (err) {
			setError(err.message);
			Alert.alert("Sign-up Error", err.message); // Display error alert
		}
	};

	return (
		<ImageBackground
			source={image.bgimage}
			style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
			imageStyle={{ opacity: 0.5 }}
		>
			<View className="bg-white/30 p-8 rounded-2xl w-80 shadow-md items-center shadow-2xl">
				{/* Email Input */}
				<TextInput
					placeholder="Email"
					placeholderTextColor="#AAA"
					className="bg-white/50 px-4 py-4 rounded-full mb-10 text-lg text-gray-700 border border-black w-full"
					value={email}
					onChangeText={setEmail} // Store the email input
				/>

				{/* Password Input */}
				<TextInput
					placeholder="Password"
					placeholderTextColor="#AAA"
					secureTextEntry
					className="bg-white/50 px-4 py-4 rounded-full mb-10 text-lg text-gray-700 border border-black w-full"
					value={password}
					onChangeText={setPassword} // Store the password input
				/>

				{/* Confirm Password Input */}
				<TextInput
					placeholder="Re-enter Password"
					placeholderTextColor="#AAA"
					secureTextEntry
					className="bg-white/50 px-4 py-4 rounded-full mb-10 text-lg text-gray-700 border border-black w-full"
					value={confirmPassword}
					onChangeText={setConfirmPassword} // Store the confirm password input
				/>

				{/* Error Display */}
				{error ? (
					<Text style={{ color: "red", marginBottom: 10 }}>{error}</Text>
				) : null}

				{/* Sign-up Button */}
				<CustomButton
					text={"Sign-up"}
					onpress={handleSignUp} // Call handleSignUp on button press
					icon="account-plus"
				/>
			</View>
		</ImageBackground>
	);
}
