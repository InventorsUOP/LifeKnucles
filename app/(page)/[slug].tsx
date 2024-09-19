// InfoPage/[slug].tsx
import React from "react";
import { Image, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import Description from "@/components/InfoPage/Description";
import * as contentData from "@/app/(page)/content";

interface Content {
  image: any;
  descriptions: { id: string; subtitle: string; content: string }[];
}

type ContentDataKeys = keyof typeof contentData;

const DynamicPage: React.FC = () => {
  const { slug } = useLocalSearchParams();

  const contentKey = `${slug}Content` as ContentDataKeys;
  const content = contentData[contentKey] as Content | undefined;

  if (!content) {
    return (
      <Description
        subtitle="Page Not Found"
        content="No content available for this page."
      />
    );
  }

  return (
    <>
      <Image source={content.image} style={styles.image} />
      {content.descriptions.map((desc) => (
        <Description
          key={desc.id}
          subtitle={desc.subtitle}
          content={desc.content}
        />
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
    marginBottom: 20,
  },
});

export default DynamicPage;
