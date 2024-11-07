import { ImageSourcePropType } from "react-native";

export type BlogPost = {
  id: string;
  title: string;
  date: string;
  image: ImageSourcePropType;
  summary: string;
  content: string;
};
