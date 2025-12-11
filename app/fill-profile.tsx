import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import { router } from 'expo-router';
import { BlurView } from 'expo-blur';
import { ArrowBackIcon } from '../src/shared/components/icons/ArrowBackIcon';
import { EditPhotoIcon } from '../src/shared/components/icons/EditPhotoIcon';

export default function FillProfile() {
  const [fullName, setFullName] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const handleBack = () => {
    router.back();
  };

  const handleStart = () => {
    console.log('Profile data:', { fullName, nickname, email, mobileNumber });
    router.push('/(tabs)/home');
  };

  const isFormValid = fullName && nickname && email && mobileNumber;

  return (
    <View style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Back Button */}
        <TouchableOpacity 
          style={styles.backButton}
          onPress={handleBack}
          activeOpacity={0.7}
        >
          <ArrowBackIcon width={7} height={13} color="#E2F163" />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        {/* Title */}
        <Text style={styles.title}>Fill Your Profile</Text>

        {/* Description */}
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>

        {/* Purple Section with Profile Image */}
        <View style={styles.purpleSection}>
          <View style={styles.profileImageContainer}>
            <View style={styles.profileImage}>
              <Image 
                source={require('../src/assets/images/profile/imageProfile.png')} 
                style={styles.profileImagePhoto}
                resizeMode="cover"
              />
            </View>
            {/* Edit Icon */}
            <TouchableOpacity style={styles.editIconContainer} activeOpacity={0.7}>
              <EditPhotoIcon width={12.15} height={17.55} color="#252525" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Form Fields */}
        <View style={styles.formContainer}>
          {/* Full Name */}
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Full name</Text>
            <TextInput
              style={styles.input}
              value={fullName}
              onChangeText={setFullName}
              placeholder="Madison Smith"
              placeholderTextColor="#999"
            />
          </View>

          {/* Nickname */}
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Nickname</Text>
            <TextInput
              style={styles.input}
              value={nickname}
              onChangeText={setNickname}
              placeholder="Madison"
              placeholderTextColor="#999"
            />
          </View>

          {/* Email */}
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="madisons@example.com"
              placeholderTextColor="#999"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* Mobile Number */}
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Mobile Number</Text>
            <TextInput
              style={styles.input}
              value={mobileNumber}
              onChangeText={setMobileNumber}
              placeholder="+123 567 89000"
              placeholderTextColor="#999"
              keyboardType="phone-pad"
            />
          </View>
        </View>

        {/* Start Button */}
        <View style={styles.buttonContainer}>
          <BlurView intensity={7} tint="light" style={styles.blurContainer}>
            <TouchableOpacity
              style={[
                styles.startButton,
                !isFormValid && styles.startButtonDisabled,
              ]}
              onPress={handleStart}
              disabled={!isFormValid}
              activeOpacity={0.8}
            >
              <Text style={styles.startButtonText}>Start</Text>
            </TouchableOpacity>
          </BlurView>
        </View>
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
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  backText: {
    fontSize: 15,
    fontFamily: 'LeagueSpartan_600SemiBold',
    color: '#E2F163',
    marginLeft: 8,
    textTransform: 'capitalize',
  },
  title: {
    fontSize: 25,
    fontFamily: 'Poppins_700Bold',
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
    textTransform: 'capitalize',
  },
  description: {
    fontSize: 14,
    fontFamily: 'LeagueSpartan_300Light',
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 14,
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  purpleSection: {
    backgroundColor: '#B3A0FF',
    height: 143,
    marginHorizontal: -24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  profileImageContainer: {
    position: 'relative',
  },
  profileImage: {
    width: 125,
    height: 125,
    borderRadius: 62.5,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImagePhoto: {
    width: '100%',
    height: '100%',
  },
  profileImagePlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#E9F6FE',
  },
  editIconContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 27,
    height: 27,
    borderRadius: 20,
    backgroundColor: '#E2F163',
    justifyContent: 'center',
    alignItems: 'center',
  },
  editIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  editIconText: {
    fontSize: 18,
  },
  formContainer: {
    marginBottom: 10,
  },
  fieldContainer: {
    marginBottom: 18,
  },
  fieldLabel: {
    fontSize: 18,
    fontFamily: 'LeagueSpartan_500Medium',
    fontWeight: '500',
    color: '#896CFE',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    height: 45,
    paddingHorizontal: 20,
    fontSize: 20,
    fontFamily: 'LeagueSpartan_400Regular',
    color: '#391713',
    borderWidth: 1,
    borderColor: '#E9F6FE',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 0,
  },
  blurContainer: {
    borderRadius: 38,
    overflow: 'hidden',
  },
  startButton: {
    backgroundColor: '#E2F163',
    paddingHorizontal: 60,
    borderRadius: 38,
    alignItems: 'center',
    justifyContent: 'center',
    width: 172.893,
    height: 47,
  },
  startButtonDisabled: {
    opacity: 1,
  },
  startButtonText: {
    width: 157.786,
    height: 28.536,
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    fontSize: 25,
    fontFamily: 'LeagueSpartan_500Medium',
    fontWeight: '500',
    color: '#232323',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
});
