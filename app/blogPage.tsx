import {
  ScrollView,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import { Appbar, Text } from "react-native-paper";
import { useRouter } from "expo-router";
import { useBlogPosts } from "@/components/common/BlogPostProvider";

// interface CustomBlogPageProps {
//   title: string;
//   date: string;
//   image: ImageSourcePropType;
//   content: string;
// }
// {
//   title,
//   date,
//   image,
//   content,
// }: Readonly<CustomBlogPageProps>

export default function BlogPage() {
  const router = useRouter();
  const blogPosts = useBlogPosts();

  return (
    <>
      {blogPosts.length === 0 ? (
        <Text>No Blog Posts</Text>
      ) : (
        <>
          <Appbar.Header className="bg-primary">
            <Appbar.BackAction onPress={() => router.back()} />
            <Appbar.Content title={blogPosts[0].title} />
          </Appbar.Header>
          <ScrollView style={styles.container}>
            {/* {image && <Image source={{ uri: image }} style={styles.image} />} */}
            <Image source={blogPosts[0].image} style={styles.image} />
            <Text style={styles.title}>{blogPosts[0].title}</Text>
            <Text style={styles.metadata}>{blogPosts[0].date}</Text>
            <Text style={styles.content}>{blogPosts[0].content}</Text>
          </ScrollView>
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  metadata: {
    fontSize: 14,
    color: "#666",
    marginBottom: 16,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: "#444",
  },
});
