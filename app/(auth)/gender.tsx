import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { router } from 'expo-router';
import { BlurView } from 'expo-blur';
import { ArrowBackIcon, MaleIconLarge, FemaleIconLarge } from '@/shared/components/icons';

type Gender = 'male' | 'female' | null;

export default function GenderScreen() {
  const [selectedGender, setSelectedGender] = useState<Gender>(null);

  const handleContinue = () => {
    // TODO: Save selected gender
    router.push('/(auth)/age');
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
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
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        {/* Title */}
        <Text style={styles.title}>What's Your Gender</Text>

        {/* Purple Section with Description */}
        <View style={styles.purpleSection}>
          <Text style={styles.descriptionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>

        {/* Male Selection Button */}
        <TouchableOpacity
          style={[
            styles.circleContainer,
            selectedGender === 'male' && styles.circleSelected,
          ]}
          onPress={() => setSelectedGender('male')}
          activeOpacity={0.8}
        >
          <MaleIconLarge width={64} height={67} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.genderLabel}>Male</Text>

        {/* Female Selection Button */}
        <TouchableOpacity
          style={[
            styles.femaleCircleContainer,
            selectedGender === 'female' && styles.circleSelected,
          ]}
          onPress={() => setSelectedGender('female')}
          activeOpacity={0.8}
        >
          <FemaleIconLarge width={45} height={81} color="#232323" />
        </TouchableOpacity>
        <Text style={styles.genderLabel}>Female</Text>

        {/* Continue Button */}
        <BlurView intensity={7} style={styles.continueButtonBlur}>
          <TouchableOpacity
            style={styles.continueButton}
            onPress={handleContinue}
            activeOpacity={0.8}
          >
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        </BlurView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232323',
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    fontFamily: 'League Spartan',
    fontWeight: '600',
    fontSize: 15,
    color: '#E2F163',
    marginLeft: 8,
    textTransform: 'capitalize',
  },
  title: {
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: 25,
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 138,
    alignSelf: 'center',
    textTransform: 'capitalize',
  },
  circleContainer: {
    width: 162.947,
    height: 162.947,
    borderRadius: 81.5,
    backgroundColor: 'rgba(255, 255, 255, 0.09)',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 30,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  circleSelected: {
    backgroundColor: '#E2F163',
    borderColor: '#E2F163',
  },
  femaleCircleContainer: {
    width: 162,
    height: 162,
    borderRadius: 81,
    backgroundColor: '#E2F163',
    borderWidth: 1,
    borderColor: '#E2F163',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  purpleSection: {
    backgroundColor: '#B3A0FF',
    width: 391,
    height: 79,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 34,
    marginTop: 20,
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
  genderButton: {
    width: 162.947,
    height: 162.947,
    borderRadius: 81.5,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 35,
    backgroundColor: '#E2F163',
  },
  genderButtonInactive: {
    backgroundColor: 'rgba(255, 255, 255, 0.09)',
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  femaleButton: {
    marginTop: 36,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  genderLabel: {
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: 20,
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 14,
    textTransform: 'capitalize',
  },
  continueButtonBlur: {
    width: 178.56,
    height: 44,
    borderRadius: 100,
    borderWidth: 0.5,
    borderColor: '#FFFFFF',
    backgroundColor: 'rgba(255, 255, 255, 0.09)',
    alignSelf: 'center',
    marginTop: 40,
    overflow: 'hidden',
  },
  continueButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  continueButtonText: {
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
});
