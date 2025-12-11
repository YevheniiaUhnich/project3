import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import { BlurView } from 'expo-blur';
import { ArrowBackIcon, FingerprintLargeIcon } from '@/shared/components/icons';

export default function SetFingerprintScreen() {
  const router = useRouter();

  const handleSkip = () => {
    // TODO: Navigate to main app or next onboarding step
    console.log('Skip pressed');
    // router.replace('/(tabs)'); // Or wherever the main app starts
  };

  const handleContinue = () => {
    // TODO: Implement fingerprint setup logic
    console.log('Continue pressed');
    // After fingerprint setup, navigate to main app
    // router.replace('/(tabs)');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <StatusBar style="light" />
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        {/* Back Button */}
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <ArrowBackIcon width={6} height={11} color="#E2F163" />
        </TouchableOpacity>

        {/* Header */}
        <Text style={styles.headerTitle}>Set Your Fingerprint</Text>

        {/* Description */}
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
        </Text>

        {/* Purple Background Section with Fingerprint */}
        <View style={styles.fingerprintContainer}>
          <BlurView intensity={7} tint="light" style={styles.fingerprintBlur}>
            <FingerprintLargeIcon width={182.098} height={235.072} color="#FFFFFF" />
          </BlurView>
        </View>

        {/* Skip Button */}
        <TouchableOpacity 
          style={styles.buttonWrapper}
          onPress={handleSkip}
        >
          <BlurView intensity={7} tint="light" style={styles.button}>
            <Text style={styles.buttonText}>Skip</Text>
          </BlurView>
        </TouchableOpacity>

        {/* Continue Button */}
        <TouchableOpacity 
          style={styles.buttonWrapper}
          onPress={handleContinue}
        >
          <BlurView intensity={7} tint="light" style={styles.button}>
            <Text style={styles.buttonText}>Continue</Text>
          </BlurView>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
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
    paddingTop: 0,
  },
  backButton: {
    position: 'absolute',
    top: 70,
    left: 34,
    zIndex: 10,
    padding: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#E2F163',
    textAlign: 'center',
    marginTop: 74,
    textTransform: 'capitalize',
    fontFamily: 'Poppins',
  },
  description: {
    width: 291,
    fontSize: 14,
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 14,
    fontFamily: 'League Spartan',
    marginTop: 105,
    alignSelf: 'center',
  },
  fingerprintContainer: {
    marginTop: 40,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  fingerprintBlur: {
    width: 394,
    height: 303,
    backgroundColor: '#B3A0FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    marginTop: 10,
    alignItems: 'center',
  },
  button: {
    width: 211,
    height: 44,
    borderRadius: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.09)',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    borderWidth: 0.5,
    borderColor: '#FFFFFF',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    textTransform: 'capitalize',
    fontFamily: 'Poppins',
    lineHeight: 23,
  },
});
