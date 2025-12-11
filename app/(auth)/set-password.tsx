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

export default function SetPasswordScreen() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleResetPassword = () => {
    // TODO: Implement reset password logic
    console.log('Reset password pressed');
    // Navigate to fingerprint setup
    router.push('/(auth)/set-fingerprint');
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
        <Text style={styles.headerTitle}>Set Password</Text>

        {/* Description */}
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>

        {/* Form Section with Purple Background */}
        <View style={styles.formContainer}>
          <BlurView intensity={7} tint="light" style={styles.formBlur}>
            {/* Password Input */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Password</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={[styles.input, styles.passwordInput]}
                  value={password}
                  onChangeText={setPassword}
                  placeholder="*************"
                  placeholderTextColor="#232323"
                  secureTextEntry
                  autoCapitalize="none"
                  autoCorrect={false}
                />
              </View>
            </View>

            {/* Confirm Password Input */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Confirm Password</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={[styles.input, styles.passwordInput]}
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  placeholder="*************"
                  placeholderTextColor="#232323"
                  secureTextEntry
                  autoCapitalize="none"
                  autoCorrect={false}
                />
              </View>
            </View>
          </BlurView>
        </View>

        {/* Reset Password Button */}
        <TouchableOpacity 
          style={styles.resetButtonWrapper}
          onPress={handleResetPassword}
        >
          <BlurView intensity={7} tint="light" style={styles.resetButton}>
            <Text style={styles.resetButtonText}>Reset Password</Text>
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
    width: 326,
    fontSize: 14,
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 14,
    fontFamily: 'League Spartan',
    marginTop: 100,
    alignSelf: 'center',
  },
  formContainer: {
    marginTop: 49,
    width: '100%',
    alignItems: 'center',
  },
  formBlur: {
    width: 394,
    height: 209,
    backgroundColor: '#B3A0FF',
    paddingTop: 18,
    paddingBottom: 18,
    paddingHorizontal: 41,
    justifyContent: 'center',
  },
  inputGroup: {
    marginBottom: 4,
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
    marginBottom: 10,
  },
  input: {
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#232323',
    fontFamily: 'Poppins',
    fontWeight: '400',
    textTransform: 'lowercase',
  },
  passwordInput: {
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  resetButtonWrapper: {
    marginTop: 46,
    alignItems: 'center',
  },
  resetButton: {
    width: 191.44,
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
  resetButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    textTransform: 'capitalize',
    fontFamily: 'Poppins',
    lineHeight: 23,
  },
});
