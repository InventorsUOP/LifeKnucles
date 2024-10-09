import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import {
	API_KEY,
	PROJECT_ID,
	STORAGE_BUCKET,
	MESSAGING_SENDER_ID,
	APP_ID,
	DATABASE_URL,
} from "./key";

const firebaseConfig = {
	apiKey: API_KEY,
	projectId: PROJECT_ID,
	storageBucket: STORAGE_BUCKET,
	messagingSenderId: MESSAGING_SENDER_ID,
	appId: APP_ID,
	databaseURL: DATABASE_URL,
};

console.log("Firebase Config:", firebaseConfig);
const app = initializeApp(firebaseConfig);
const authFirebase = getAuth(app);
const db = getFirestore(app);
const rtdb = getDatabase(app);
const storage = getStorage(app);

export { app, authFirebase, db, rtdb, storage, storageRef, uploadBytes, getDownloadURL };
