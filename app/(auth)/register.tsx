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
  Alert,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import { BlurView } from 'expo-blur';
import { ArrowBackIcon, GoogleIcon, FacebookIcon, FingerprintIcon } from '@/shared/components/icons';
import { useAuth } from '../../src/contexts/AuthContext';

export default function RegisterScreen() {
  const router = useRouter();
  const { signUp } = useAuth();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    if (!fullName || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    // Валідація email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    setLoading(true);
    try {
      await signUp(email.trim().toLowerCase(), password);
      Alert.alert('Success', 'Account created! Please check your email to verify your account.');
      router.push('/(auth)/setup-profile');
    } catch (error: any) {
      Alert.alert('Registration Failed', error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = (provider: string) => {
    // TODO: Implement social login
    console.log(`${provider} login pressed`);
  };

  const handleLogin = () => {
    router.back();
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
        <Text style={styles.headerTitle}>Create Account</Text>

        {/* Subtitle */}
        <Text style={styles.subtitle}>Let's Start!</Text>

        {/* Form Section with Purple Background */}
        <View style={styles.formContainer}>
          <BlurView intensity={7} tint="light" style={styles.formBlur}>
            {/* Full Name Input */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Full name</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  value={fullName}
                  onChangeText={setFullName}
                  placeholder="John Doe"
                  placeholderTextColor="#232323"
                  autoCapitalize="words"
                  autoCorrect={false}
                  textContentType="name"
                  keyboardType="default"
                />
              </View>
            </View>

            {/* Email or Mobile Number Input */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Email or Mobile Number</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  value={email}
                  onChangeText={setEmail}
                  placeholder="example@example.com"
                  placeholderTextColor="#391713"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  textContentType="emailAddress"
                  autoComplete="email"
                />
              </View>
            </View>

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
                  textContentType="password"
                  keyboardType="default"
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
                  textContentType="password"
                  keyboardType="default"
                />
              </View>
            </View>
          </BlurView>
        </View>

        {/* Terms and Privacy */}
        <View style={styles.termsContainer}>
          <Text style={styles.termsText}>
            By continuing, you agree to{'\n'}
            <Text style={styles.termsLink}>Terms of Use</Text>
            <Text style={styles.termsText}> and </Text>
            <Text style={styles.termsLink}>Privacy Policy.</Text>
          </Text>
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity 
          style={styles.signUpButtonWrapper}
          onPress={handleSignUp}
          disabled={loading}
        >
          <BlurView intensity={7} tint="light" style={styles.signUpButton}>
            <Text style={styles.signUpButtonText}>{loading ? 'Creating Account...' : 'Sign Up'}</Text>
          </BlurView>
        </TouchableOpacity>

        {/* Social Login Section */}
        <Text style={styles.orText}>or sign up with</Text>

        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity 
            style={styles.socialButton}
            onPress={() => handleSocialLogin('google')}
          >
            <GoogleIcon width={18.378} height={18.378} color="#896CFE" />
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.socialButton}
            onPress={() => handleSocialLogin('facebook')}
          >
            <FacebookIcon width={23} height={23} color="#896CFE" />
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.socialButton}
            onPress={() => handleSocialLogin('fingerprint')}
          >
            <FingerprintIcon width={18.304} height={23.629} color="#896CFE" />
          </TouchableOpacity>
        </View>

        {/* Log In Link */}
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>
            Already have an account?{' '}
            <Text style={styles.loginLink} onPress={handleLogin}>
              Log in
            </Text>
          </Text>
        </View>
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
    top: 60,
    left: 34,
    zIndex: 10,
    padding: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#E2F163',
    textAlign: 'center',
    marginTop: 64,
    textTransform: 'capitalize',
    fontFamily: 'Poppins',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 47,
    textTransform: 'capitalize',
    fontFamily: 'Poppins',
  },
  formContainer: {
    marginTop: 38,
    width: '100%',
    alignItems: 'center',
  },
  formBlur: {
    width: 393,
    height: 394,
    backgroundColor: '#B3A0FF',
    paddingTop: 24,
    paddingBottom: 30,
    paddingHorizontal: 41,
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
  },
  passwordInput: {
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  termsContainer: {
    marginTop: 18,
    alignItems: 'center',
    paddingHorizontal: 60,
  },
  termsText: {
    fontSize: 13,
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'League Spartan',
    lineHeight: 14,
  },
  termsLink: {
    fontSize: 13,
    fontWeight: '500',
    color: '#E2F163',
    fontFamily: 'League Spartan',
  },
  signUpButtonWrapper: {
    marginTop: 20,
    alignItems: 'center',
  },
  signUpButton: {
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
  signUpButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    textTransform: 'capitalize',
    fontFamily: 'Poppins',
    lineHeight: 23,
  },
  orText: {
    fontSize: 14,
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 20,
    fontFamily: 'League Spartan',
    lineHeight: 14,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    marginTop: 16,
  },
  socialButton: {
    width: 34,
    height: 34,
    borderRadius: 13,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
  loginText: {
    fontSize: 14,
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'League Spartan',
    lineHeight: 14,
  },
  loginLink: {
    fontSize: 14,
    fontWeight: '300',
    color: '#E2F163',
    fontFamily: 'League Spartan',
  },
});
