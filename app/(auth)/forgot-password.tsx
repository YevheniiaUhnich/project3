import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import { BlurView } from 'expo-blur';
import { ArrowBackIcon } from '@/shared/components/icons';

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const handleContinue = () => {
    // TODO: Implement forgot password logic
    console.log('Continue pressed with email:', email);
    router.push('/(auth)/set-password');
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
        <Text style={styles.headerTitle}>Forgotten Password</Text>

        {/* Title */}
        <Text style={styles.title}>Forgot Password?</Text>

        {/* Description */}
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>

        {/* Form Section with Purple Background */}
        <View style={styles.formContainer}>
          <BlurView intensity={7} tint="light" style={styles.formBlur}>
            {/* Email Input */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Enter your email address</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  value={email}
                  onChangeText={setEmail}
                  placeholder="example@example.com"
                  placeholderTextColor="#232323"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  selectionColor="#232323"
                />
              </View>
            </View>
          </BlurView>
        </View>

        {/* Continue Button */}
        <TouchableOpacity 
          style={styles.continueButtonWrapper}
          onPress={handleContinue}
        >
          <BlurView intensity={7} tint="light" style={styles.continueButton}>
            <Text style={styles.continueButtonText}>Continue</Text>
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
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 125,
    textTransform: 'capitalize',
    fontFamily: 'Poppins',
  },
  description: {
    width: 323,
    fontSize: 14,
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 14,
    fontFamily: 'League Spartan',
    marginTop: 49,
    alignSelf: 'center',
  },
  formContainer: {
    marginTop: 47,
    width: '100%',
    alignItems: 'center',
  },
  formBlur: {
    width: 394,
    height: 122,
    backgroundColor: '#B3A0FF',
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 41,
    justifyContent: 'center',
  },
  inputGroup: {
    marginBottom: 0,
  },
  inputLabel: {
    fontSize: 18,
    fontWeight: '500',
    color: '#232323',
    marginBottom: 8,
    fontFamily: 'League Spartan',
  },
  inputWrapper: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    height: 45,
    justifyContent: 'center',
  },
  input: {
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#232323',
    fontFamily: 'Poppins',
    fontWeight: '400',
    textTransform: 'lowercase',
  },
  continueButtonWrapper: {
    marginTop: 46,
    alignItems: 'center',
  },
  continueButton: {
    width: 178.56,
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
  continueButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    textTransform: 'capitalize',
    fontFamily: 'Poppins',
    lineHeight: 23,
  },
});
