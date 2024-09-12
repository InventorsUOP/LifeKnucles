import React from 'react';
import {  Image, StyleSheet, ScrollView } from 'react-native';
import Images from '@/constants/image'; 
import Description from '@/components/InfoPage/Description'; 

const WildFirePage: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Image source={Images.wildfire} style={styles.image} />
      <Description
        title="How Wildfires Happen in the Knuckles Mountain Range"
        content="The Knuckles Mountain Range, located in Sri Lanka, is renowned for its rich biodiversity and lush landscapes. However, like many mountainous regions, it is also vulnerable to wildfires. Understanding how wildfires occur in this area can help in managing and mitigating their impacts. Here’s an overview of how wildfires happen in the Knuckles Mountain Range and the factors contributing to their occurrence."
      />
      <Description
        subtitle="The Unique Environment of the Knuckles Mountain Range"
        content="The Knuckles Mountain Range is characterized by its rugged terrain, varied vegetation, and high rainfall. This unique environment includes tropical forests, grasslands, and montane forests, all of which influence wildfire behavior and risks."
      />
      <Description
        subtitle="How Wildfires Start"
        content="Wildfires in the Knuckles Mountain Range can start from various sources: Natural Causes, Human Activities, and Contributing Factors."
      />
      <Description
        subtitle="Natural Causes"
        content="Lightning strikes are a common natural cause of wildfires. During thunderstorms, lightning can ignite dry vegetation, especially in the drier months. Although the Knuckles region receives substantial rainfall, dry periods can still occur."
      />
      <Description
        subtitle="Human Activities"
        content="Human activities are significant contributors to wildfires, including Agricultural Burning, Campfires and Cigarettes, and Illegal Land Clearing."
      />
      <Description
        subtitle="Contributing Factors"
        content="Several factors influence how wildfires spread, including Vegetation Type and Condition, Weather Conditions, and Topography."
      />
      <Description
        subtitle="Impacts of Wildfires"
        content="Wildfires in the Knuckles Mountain Range can have significant impacts, including Biodiversity Loss, Soil Erosion, and Air Quality degradation."
      />
      <Description
        subtitle="Prevention and Management"
        content="Efforts to prevent and manage wildfires include Public Awareness, Controlled Burns, and Firebreaks and Monitoring."
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
});

export default WildFirePage;
