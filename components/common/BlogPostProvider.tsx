import images from "@/constants/image";
import { BlogPost } from "@/DTO/BlogPost";
import { createContext, useContext, useState } from "react";

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
        "   Wildfires, also known as forest fires, are uncontrolled fires that rapidly spread through vegetation. They can ignite through both natural causes and human activities. Lightning is one of the most common natural causes, generating heat that can ignite dry vegetation. Volcanic eruptions and spontaneous combustion in organic materials can also spark wildfires under the right conditions.\n \n   Human activities are significant contributors to wildfires. Unattended campfires, discarded cigarette butts, and acts of arson are prevalent causes. Equipment such as chainsaws and vehicles can create sparks, and faulty power lines can also ignite fires. These activities often occur in dry conditions, which make the vegetation more susceptible to catching fire. \n \n    Preventing wildfires involves public education, strict regulations, and proper land management practices. Key strategies include public awareness campaigns, fire bans during high-risk periods, and vegetation management through controlled burns. Developing efficient firefighting strategies and ensuring rapid response to emerging fires are also crucial in mitigating the impact of wildfires.",
      date: "2024-10-01",
    },
    {
      id: "2",
      title: "How Wildfires Happen in the Knuckles Mountain Range",
      image: images.safety,
      summary:
        "The Knuckles Mountain Range, located in Sri Lanka, is renowned for its rich biodiversity and lush landscapes. However, like many mountainous regions, it is also vulnerable to wildfires. Understanding how wildfires occur in this area can help in managing and mitigating their impacts. Here’s an overview of how wildfires happen in the Knuckles Mountain Range and the factors contributing to their occurrence.",
      content:
        "   The Knuckles Mountain Range, a UNESCO World Heritage site, is a biodiverse hotspot in central Sri Lanka. This mountain range is home to numerous species of flora and fauna, some of which are endemic to the region. While it is a haven for nature enthusiasts and researchers, it is not immune to the destructive force of wildfires. \n \n  Wildfires in the Knuckles Mountain Range can be attributed to both natural and human-induced causes. Natural causes include lightning strikes, which can ignite dry vegetation, especially during the dry season. Human activities, however, are a more significant contributor to wildfires in this region. Illegal agricultural practices, such as slash-and-burn farming, play a major role. Farmers often clear land for cultivation by burning vegetation, and these fires can easily spread uncontrollably. Additionally, discarded cigarette butts, unattended campfires, and even deliberate acts of arson contribute to the wildfire risk.\n \n    The unique topography and climatic conditions of the Knuckles Mountain Range further exacerbate the wildfire risk. The range experiences distinct wet and dry seasons. During the dry season, vegetation becomes highly flammable. The rugged terrain and strong winds can cause fires to spread rapidly, making them difficult to control.\n \n    Preventing and managing wildfires in the Knuckles Mountain Range requires a multi-faceted approach. Public awareness and education campaigns are crucial in teaching local communities about the dangers of wildfires and safe agricultural practices. Implementing strict regulations and monitoring illegal activities can help mitigate human-induced fires. Additionally, enhancing firefighting capabilities and developing early warning systems are essential in responding promptly to wildfire outbreaks.\n \n   Understanding the causes and contributing factors of wildfires in the Knuckles Mountain Range is key to preserving this unique ecosystem. By adopting comprehensive prevention and management strategies, we can protect the rich biodiversity and natural beauty of this remarkable region from the devastating impacts of wildfires.",
      date: "2024-10-05",
    },
    {
      id: "3",
      title: "Impacts of Wildfires",
      image: images.wildfire,
      summary:
        "Wildfires in the Knuckles Mountain Range can have significant impacts, including Biodiversity Loss, Soil Erosion, and Air Quality degradation.",
      content:
        "   Wildfires pose a significant threat to the Knuckles Mountain Range, a region celebrated for its rich biodiversity and unique ecosystems. The impacts of these fires extend far beyond the immediate destruction of vegetation and wildlife habitats, causing long-term ecological and environmental damage.\n \n   One of the most profound impacts of wildfires in the Knuckles Mountain Range is biodiversity loss. This region is home to numerous species of flora and fauna, many of which are endemic and cannot be found anywhere else in the world. When wildfires sweep through these habitats, they can lead to the destruction of entire populations of plants and animals, some of which may be endangered or at risk of extinction. The loss of biodiversity disrupts the delicate balance of the ecosystem, affecting everything from pollination to the food web.\n \n    Another significant impact of wildfires is soil erosion. Vegetation plays a crucial role in stabilizing the soil and preventing erosion. When wildfires burn through forests and grasslands, they remove this protective cover, leaving the soil exposed to the elements. Without the roots of plants to hold the soil in place, rainfall can easily wash away the topsoil, leading to severe erosion. This not only degrades the quality of the soil, making it less fertile and more difficult for plants to grow back, but also increases the risk of landslides and sedimentation in nearby water bodies.\n \n    Air quality degradation is another critical impact of wildfires. When vegetation burns, it releases large amounts of smoke and particulate matter into the atmosphere. This can lead to significant air pollution, which poses health risks to humans and animals alike. Fine particulate matter from wildfire smoke can cause respiratory problems, aggravate pre-existing health conditions, and reduce visibility. The release of carbon dioxide and other greenhouse gases also contributes to climate change, further exacerbating environmental challenges.\n \n    Understanding the impacts of wildfires in the Knuckles Mountain Range is essential for developing effective strategies to manage and mitigate these fires. By addressing the root causes and implementing comprehensive prevention and management plans, we can protect this unique region and ensure its ecological integrity for future generations.",
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
