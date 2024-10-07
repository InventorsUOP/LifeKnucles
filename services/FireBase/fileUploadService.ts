import { storageRef, storage, uploadBytes, getDownloadURL } from "./firebaseConfig";

export const uploadPhoto = async (photo: string[]) => {
    const uploadUrls = [];

    for (const image of photo) {
        const photoRef = storageRef(storage, `fireAlerts/${Date.now()}_${Math.random()}.jpg`);

        const response = await fetch(image);
        const blob = await response.blob();

        await uploadBytes(photoRef, blob);

        const downloadUrl = await getDownloadURL(photoRef);
        uploadUrls.push(downloadUrl);
    }

    return uploadUrls;
}
