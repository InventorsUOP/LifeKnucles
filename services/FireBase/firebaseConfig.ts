import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {
	API_KEY,
	PROJECT_ID,
	STORAGE_BUCKET,
	MESSAGING_SENDER_ID,
	APP_ID,
} from "./key";

const firebaseConfig = {
	apiKey: API_KEY,
	projectId: PROJECT_ID,
	storageBucket: STORAGE_BUCKET,
	messagingSenderId: MESSAGING_SENDER_ID,
	appId: APP_ID,
};

// const firebaseConfig = {
// 	apiKey: API_KEY,
// 	projectId: PROJECT_ID,
// 	storageBucket: STORAGE_BUCKET,
// 	messagingSenderId: MESSAGING_SENDER_ID,
// 	appId: APP_ID,
// };
console.log("Firebase Config:", firebaseConfig);
const app = initializeApp(firebaseConfig);
const authFirebase = getAuth(app);
const db = getFirestore(app);

export { app, authFirebase, db };
