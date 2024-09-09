import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground, TextInput, ScrollView } from 'react-native';
import CustomButton from '@/components/CustomButton';
import images from '@/constants/image'; 

interface InfoPageProps {
  navigation: {
    navigate: (screen: string) => void;
  };
}

const InfoPage: React.FC<InfoPageProps> = ({ navigation }) => {
  const handleNavigation = (page: string) => {
    navigation.navigate(page);
  };

  return (
    <ImageBackground source={images.backgroundImage} style={styles.background}>
      <ScrollView style={styles.container}>
        <View style={styles.topBar}>
          <CustomButton
            text="Back to Account"
            onpress={() => navigation.navigate('home')} 
          />
          <TextInput placeholder="Search..." style={styles.searchBar} />
        </View>
        <Image source={images.backgroundImage} style={styles.image} />
        <Text style={styles.title}>Welcome to App Info</Text>
        <Text style={styles.content}>
          This page serves as a comprehensive guide to understanding the Knuckles Mountain Range, 
          its environmental significance, the dangers it faces such as wildfires, and the preventive measures 
          we can take. Explore the sections below to learn more about the Knuckles ecosystem, how wildfires happen, 
          safety precautions, and what actions to take in case of an emergency. Our app also provides a tutorial to help 
          you navigate and make the most of its features.
        </Text>
        <View style={styles.buttonContainer}>
          <CustomButton
            text="What is Knuckles"
            onpress={() => handleNavigation('KnucklesPage')}
          />
          <CustomButton
            text="How WildFire Happen"
            onpress={() => handleNavigation('WildFirePage')}
          />
          <CustomButton
            text="Safety Precaution"
            onpress={() => handleNavigation('SafetyPrecautionPage')}
          />
          <CustomButton
            text="What To Do After A Fire Happen"
            onpress={() => handleNavigation('AfterFirePage')}
          />
          <CustomButton
            text="App Tutorial"
            onpress={() => handleNavigation('AppTutorialPage')}
          />
        </View>
        <View style={styles.authorSection}>
          <Text style={styles.author}>Developed By: Inventors Club University Of Peradeniya</Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  authorSection: {
    marginTop: 0,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  author: {
    fontSize: 14,
    fontStyle: 'italic',
  },
});

export default InfoPage;
