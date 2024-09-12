// InfoPage/pages/AfterFirePage.tsx
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Description from "@/components/InfoPage/Description"; 
import Images from "@/constants/image"; 

const AfterFirePage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={Images.safety} style={styles.image} />
      <Description text="Safety"  />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
});

export default AfterFirePage;
