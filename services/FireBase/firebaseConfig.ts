import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {
	API_KEY,
	APP_ID,
	MESSAGING_SENDER_ID,
	PROJECT_ID,
	STORAGE_BUCKET,
} from "./key";

const firebaseConfig = {
	apiKey: API_KEY,
	projectId: PROJECT_ID,
	storageBucket: STORAGE_BUCKET,
	messagingSenderId: MESSAGING_SENDER_ID,
	appId: APP_ID,
};

console.log("Firebase Config:", firebaseConfig);
const app = initializeApp(firebaseConfig);


const authFirebase = initializeAuth(app, {
	persistence: getReactNativePersistence(AsyncStorage),
});
const db = getFirestore(app);

export { app, authFirebase, db };
