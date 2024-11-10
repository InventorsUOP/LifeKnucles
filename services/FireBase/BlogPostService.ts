import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { BlogPost } from "@/DTO/BlogPost";

export async function fetchBlogPosts() {
    try {
        const blogPosts: BlogPost [] = [];
        const querySnapshot = await getDocs(collection(db, "blogPosts"));

        //const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        
        querySnapshot.forEach(documentSnapshot => {
            const data = documentSnapshot.data();
            blogPosts.push({
                id: documentSnapshot.id,
                title: data.title,
                date: data.date,
                image: data.image,
                summary: data.summary,
                content: data.content
            });
        });

        console.log("Fetched blog posts: ", blogPosts);
        return blogPosts;

    } catch (error) {
        console.error("Error fetching blog posts: ", error);
        return [];
    }
}
