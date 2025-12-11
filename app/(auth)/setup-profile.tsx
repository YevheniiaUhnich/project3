import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from 'react-native';
import { router } from 'expo-router';
import { ArrowBackIcon } from '@/shared/components/icons';

export default function SetupProfile() {
  const handleNext = () => {
    router.push('/(auth)/gender');
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <ImageBackground
        source={require('../../assets/images/onboarding/slide5.png')}
        style={styles.backgroundImage}
        imageStyle={styles.backgroundImageStyle}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          bounces={false}
        >
          {/* Back Button */}
          <TouchableOpacity
            style={styles.backButton}
            onPress={handleBack}
            activeOpacity={0.7}
          >
            <ArrowBackIcon />
          </TouchableOpacity>

          {/* Motivational Text Section */}
          <View style={styles.motivationalSection}>
            <Text style={styles.motivationalText}>
              Consistency Is{'\n'}The Key To Progress.{'\n'}Don't Give Up!
            </Text>
          </View>

          {/* Purple Section with Description */}
          <View style={styles.purpleSection}>
            <Text style={styles.descriptionText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </View>

          {/* Next Button */}
          <TouchableOpacity
            style={styles.nextButton}
            onPress={handleNext}
            activeOpacity={0.8}
          >
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232323',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
  },
  backgroundImageStyle: {
    width: 393,
    height: 463,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  backButton: {
    position: 'absolute',
    left: 34,
    top: 70,
    zIndex: 10,
  },
  motivationalSection: {
    marginTop: 'auto',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  motivationalText: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 30,
    lineHeight: 36,
    color: '#E2F163',
    textAlign: 'center',
  },
  purpleSection: {
    backgroundColor: '#B3A0FF',
    width: '100%',
    paddingVertical: 24,
    paddingHorizontal: 36,
    alignItems: 'center',
  },
  descriptionText: {
    fontFamily: 'League Spartan',
    fontWeight: '300',
    fontSize: 14,
    lineHeight: 14,
    color: '#232323',
    textAlign: 'center',
    maxWidth: 323,
  },
  nextButton: {
    width: 178.56,
    height: 44,
   
    borderWidth: 0.5,
    borderColor: '#FFFFFF',

    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 40,
 
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
       borderRadius: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.09)',
  
    overflow: 'hidden',
    shadowColor: '#000',
   

  
   

  },
  nextButtonText: {
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
});
