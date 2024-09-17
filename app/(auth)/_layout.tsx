import { Stack } from "expo-router";
import React from "react";

export default function GetStart() {
	return (
		<Stack>
			<Stack.Screen name="Login" options={{ headerShown: false }} />
			<Stack.Screen name="Signup" options={{ headerShown: false }} />
		</Stack>
	);
}
