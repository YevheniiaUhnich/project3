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

export default function LoginScreen() {
  const router = useRouter();
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setLoading(true);
    try {
      await signIn(email.trim().toLowerCase(), password);
      router.push('/(tabs)/home');
    } catch (error: any) {
      Alert.alert('Login Failed', error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = () => {
    router.push('/(auth)/forgot-password');
  };

  const handleSignUp = () => {
    // TODO: Navigate to sign up screen
    router.push('/(auth)/register');
  };

  const handleSocialLogin = (provider: string) => {
    // TODO: Implement social login
    console.log(`${provider} login pressed`);
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
        <Text style={styles.headerTitle}>Log In</Text>

        {/* Welcome Section */}
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeTitle}>Welcome</Text>
          <Text style={styles.welcomeDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </Text>
        </View>

        {/* Form Section with Purple Background */}
        <View style={styles.formContainer}>
          <BlurView intensity={7} tint="light" style={styles.formBlur}>
            {/* Email Input */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Username or email</Text>
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
  textContentType="emailAddress"
  autoComplete="email"
  selectionColor="#232323"
/>
              </View>
            </View>

            {/* Password Input */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Password</Text>
              <View style={styles.inputWrapper}>
                <TextInput
  style={[styles.input, styles.input]}
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

            {/* Forgot Password */}
            <TouchableOpacity 
              style={styles.forgotPasswordButton}
              onPress={handleForgotPassword}
            >
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
          </BlurView>
        </View>

        {/* Login Button */}
        <TouchableOpacity 
          style={styles.loginButtonWrapper}
          onPress={handleLogin}
          disabled={loading}
        >
          <BlurView intensity={7} tint="light" style={styles.loginButton}>
            <Text style={styles.loginButtonText}>{loading ? 'Loading...' : 'Log In'}</Text>
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

        {/* Sign Up Link */}
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>
            Don't have an account?{' '}
            <Text style={styles.signUpLink} onPress={handleSignUp}>
              Sign Up
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
  },
  welcomeSection: {
    alignItems: 'center',
    paddingHorizontal: 36,
    marginTop: 54,
  },
  welcomeTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    textTransform: 'capitalize',
    marginBottom: 16,
    fontFamily: 'Poppins',
    lineHeight: 20,
  },
  welcomeDescription: {
    width: 323,
    fontSize: 14,
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 14,
    fontFamily: 'League Spartan',
    marginTop: 20,
  },
  formContainer: {
    marginTop: 80,
    width: '100%',
  },
  formBlur: {
    width: 394,
    height: 235,
    backgroundColor: '#B3A0FF',
    paddingTop: 24,
    paddingBottom: 30,
    paddingHorizontal: 40,
  },
  inputGroup: {
    marginBottom: 4,
  },
  inputLabel: {
    fontSize: 18,
    fontWeight: '500',
   color: 'var(--Color-4, #232323)',
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
  flex: 1,
  height: 45,
  paddingHorizontal: 16,
  paddingVertical: 0,
  fontSize: 16,
  color: '#232323',
  fontFamily: 'Poppins',
  fontWeight: '400',
  textAlignVertical: 'center',
},
  forgotPasswordButton: {
    alignSelf: 'flex-end',
   
  },
  forgotPasswordText: {
    fontSize: 12,
    color: '#232323',
    textTransform: 'capitalize',
    fontFamily: 'Poppins',
  },
  loginButtonWrapper: {
    marginTop: 40,
    alignItems: 'center',
  },
  loginButton: {
    width: 178.56,
    height: 44,
    borderRadius: 100,
    borderWidth: 0.5,
    borderColor: '#FFFFFF',
    backgroundColor: 'rgba(255, 255, 255, 0.09)',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    
  },
  loginButtonText: {
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
    marginTop: 28,
    fontFamily: 'League Spartan',
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
  socialIconPlaceholder: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialIconText: {
    fontSize: 16,
    color: '#896CFE',
    fontWeight: '600',
  },
  signUpContainer: {
    marginTop: 46,
    alignItems: 'center',
  },
  signUpText: {
    fontSize: 14,
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 14,
    fontFamily: 'League Spartan',
  },
  signUpLink: {
    color: '#E2F163',
    fontWeight: '300',
  },
});

