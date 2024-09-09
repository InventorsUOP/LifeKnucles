
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface DescriptionProps {
  text: string;
}

const Description: React.FC<DescriptionProps> = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.descriptionText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  descriptionText: {
    fontSize: 16,
    color: '#333',
  },
});

export default Description;
