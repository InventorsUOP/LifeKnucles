import { storageRef, storage, uploadBytes, getDownloadURL, rtdb } from "./firebaseConfig";
import { ref as databaseRef, push } from "firebase/database";

export const uploadPhoto = async (photo: string[]) => {
    const uploadUrls = [];

    for (const image of photo) {
        const uniqueKey = push(databaseRef(rtdb, 'uniqueKeys')).key;
        const photoRef = storageRef(storage, `fireAlerts/${Date.now()}_${uniqueKey}.jpg`);

        const response = await fetch(image);
        const blob = await response.blob();

        await uploadBytes(photoRef, blob);

        const downloadUrl = await getDownloadURL(photoRef);
        uploadUrls.push(downloadUrl);
    }

    return uploadUrls;
}
