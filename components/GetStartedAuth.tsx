import { View, Text } from "react-native";
import { Button, Divider } from "react-native-paper";
import CustomButton from "./CustomButton";
import { useRouter } from "expo-router";

export default function GetStartedAuth() {
	const router = useRouter();
	return (
		<View className="mt-6">
			<View className="flex-row justify-between row space-x-4">
				<CustomButton
					text={"Sign-in"}
					onpress={() => router.push("Login")}
					icon="login"
				/>

				<CustomButton
					text={"Sign-up"}
					onpress={() => router.push("Signup")}
					icon="account-plus"
				/>
			</View>

			<Text className="text-white text-center mt-4">or</Text>
			<Divider className="h-0.5 bg-white m-2" />

			<View className="flex-row space-x-4 justify-center mt-5">
				<Button
					mode="contained-tonal"
					icon="google"
					className="w-[140px] h-[55px]"
					contentStyle={{ height: "100%" }}
					labelStyle={{ fontSize: 17 }}
					onPress={() => console.log("Google Sign-in Button Pressed")}
					buttonColor="#2E8B57"
				>
					Google
				</Button>

				<Button
					mode="contained-tonal"
					icon="facebook"
					className="w-[140px] h-[55px]"
					contentStyle={{ height: "100%" }}
					labelStyle={{ fontSize: 17 }}
					onPress={() => console.log("Facebook Sign-in Button Pressed")}
					buttonColor="#1877F2"
				>
					Facebook
				</Button>
			</View>
		</View>
	);
}
