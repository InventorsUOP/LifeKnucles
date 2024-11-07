import images from "@/constants/image";
import { BlogPost } from "@/DTO/BlogPost";
import { fetchBlogPosts } from "@/services/FireBase/BlogPostService";
import { createContext, useContext, useEffect, useState } from "react";

type BlogContextType = {
  blogPosts: BlogPost[];
  postID: string;
  setPostID: (id: string) => void;
};

const BlogPageContext = createContext<BlogContextType>({
  blogPosts: [],
  postID: "",
  setPostID: () => {},
});

export const BlogPostsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [postID, setPostID] = useState("");
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([
    {
      id: "1",
      title: "How Wildfires Start",
      image: images.knuclkes,
      summary:
        "Wildfires in the Knuckles Mountain Range can start from various sources: Natural Causes, Human Activities, and Contributing Factors.",
      content:
        "React Native allows you to create mobile applications that work across both Android and iOS platforms...",
      date: "2024-10-01",
    },
    {
      id: "2",
      title: "How Wildfires Happen in the Knuckles Mountain Range",
      image: images.knuclkes,
      summary:
        "The Knuckles Mountain Range, located in Sri Lanka, is renowned for its rich biodiversity and lush landscapes. However, like many mountainous regions, it is also vulnerable to wildfires. Understanding how wildfires occur in this area can help in managing and mitigating their impacts. Here’s an overview of how wildfires happen in the Knuckles Mountain Range and the factors contributing to their occurrence.",
      content:
        "Firebase offers a suite of tools for app development, including authentication, real-time databases...",
      date: "2024-10-05",
    },
    {
      id: "3",
      title: "Impacts of Wildfires",
      image: images.knuclkes,
      summary:
        "Wildfires in the Knuckles Mountain Range can have significant impacts, including Biodiversity Loss, Soil Erosion, and Air Quality degradation.",
      content:
        "With react-navigation, you can easily navigate between different screens in your app...",
      date: "2024-10-10",
    },
  ]);

  // useEffect(() => {
  //   fetchBlogPosts()
  //     .then((blogPosts) => {
  //       setBlogPosts(blogPosts);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching blog posts: ", error);
  //     });
  // }, []);

  return (
    <BlogPageContext.Provider value={{ blogPosts, postID, setPostID }}>
      {children}
    </BlogPageContext.Provider>
  );
};

export const useBlogPosts = () => {
  const context = useContext(BlogPageContext);
  if (!context) {
    throw new Error("useBlogPosts must be used within a BlogPostsProvider");
  }
  return context.blogPosts;
};

export const useBlogPostById = () => {
  const context = useContext(BlogPageContext);
  if (!context) {
    throw new Error("useBlogPostById must be used within a BlogPostsProvider");
  }
  return context.blogPosts.find((post) => post.id === context.postID);
};

export const useSetPostID = () => {
  const context = useContext(BlogPageContext);
  if (!context) {
    throw new Error("useSetPostID must be used within a BlogPostsProvider");
  }
  return context.setPostID;
};
