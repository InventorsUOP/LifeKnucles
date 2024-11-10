import { ScrollView, Image } from "react-native";
import { Appbar, Text } from "react-native-paper";
import { useRouter } from "expo-router";
import {
  useBlogPostById,
  useBlogPosts,
} from "@/components/common/BlogPostProvider";

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
  const blogPost = useBlogPostById();

  return (
    <>
      {blogPosts.length === 0 ? (
        <Text>No Blog Posts</Text>
      ) : (
        <>
          <Appbar.Header className="bg-primary">
            <Appbar.BackAction onPress={() => router.back()} />
            <Appbar.Content title={blogPost.title} />
          </Appbar.Header>
          <ScrollView className="pt-5 flex-1 p-5">
            {/* {image && <Image source={{ uri: image }} style={styles.image} />} */}
            <Image
              source={blogPost.image}
              className="h-[200] w-full mb-5 rounded-md"
            />
            <Text variant="headlineSmall" className="text-black font-psemibold">
              {blogPost.title}
            </Text>
            <Text variant="labelSmall" className="text-black">
              {blogPost.date}
            </Text>
            <Text className="text-justify text-black pt-5" variant="bodyLarge">
              {blogPost.content}
            </Text>
          </ScrollView>
        </>
      )}
    </>
  );
}
