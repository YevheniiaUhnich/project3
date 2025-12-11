import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../../src/contexts/AuthContext';
import { ArrowRightIcon } from '../../src/shared/components/icons/ArrowRightIcon';
import { EditPhotoIcon } from '../../src/shared/components/icons/EditPhotoIcon';

export default function ProfileSettingsScreen() {
  const router = useRouter();
  const { user } = useAuth();

  // Get real user data
  const userEmail = user?.email || 'user@example.com';
  const userName = userEmail.split('@')[0].charAt(0).toUpperCase() + userEmail.split('@')[0].slice(1);

  // Form state
  const [fullName, setFullName] = useState(userName);
  const [email, setEmail] = useState(userEmail);
  const [mobileNumber, setMobileNumber] = useState('+123 567 89000');
  const [dateOfBirth, setDateOfBirth] = useState('01 / 04 / 199X');
  const [weight, setWeight] = useState('75');
  const [height, setHeight] = useState('1.65');
  const [age, setAge] = useState('28');

  const handleUpdateProfile = () => {
    Alert.alert('Success', 'Profile updated successfully');
  };

  return (
    <View style={styles.container}>
      {/* Purple Header Background - positioned absolutely */}
      <View style={styles.purpleHeaderBackground} />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.push('/(tabs)/profile')}
        >
          <ArrowRightIcon width={6} height={11} color="#E2F163" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>

      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Image */}
        <View style={styles.profileImageContainer}>
          <Image
            source={require('../../assets/images/profile/imageProfile.png')}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.editIconButton}>
            <EditPhotoIcon width={14} height={19} color="#252525" />
          </TouchableOpacity>
        </View>

        {/* User Info */}
        <Text style={styles.userNameDisplay}>{fullName}</Text>
        <Text style={styles.userEmailDisplay}>{email}</Text>
        <Text style={styles.birthdayDisplay}>
          Birthday: <Text style={styles.birthdayValue}>{dateOfBirth}</Text>
        </Text>

        {/* Stats Card */}
        <View style={styles.statsCard}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{weight} Kg</Text>
            <Text style={styles.statLabel}>Weight</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{age}</Text>
            <Text style={styles.statLabel}>Years old</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{height} CM</Text>
            <Text style={styles.statLabel}>height</Text>
          </View>
        </View>

        {/* Form Fields */}
        <View style={styles.formContainer}>
          {/* Full Name */}
          <Text style={styles.label}>Full name</Text>
          <TextInput
            style={styles.input}
            value={fullName}
            onChangeText={setFullName}
            placeholder="Enter your full name"
            placeholderTextColor="#999"
          />

          {/* Email */}
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          {/* Mobile Number */}
          <Text style={styles.label}>Mobile Number</Text>
          <TextInput
            style={styles.input}
            value={mobileNumber}
            onChangeText={setMobileNumber}
            placeholder="Enter your mobile number"
            placeholderTextColor="#999"
            keyboardType="phone-pad"
          />

          {/* Date of Birth */}
          <Text style={styles.label}>Date of birth</Text>
          <TextInput
            style={styles.input}
            value={dateOfBirth}
            onChangeText={setDateOfBirth}
            placeholder="DD / MM / YYYY"
            placeholderTextColor="#999"
          />

          {/* Weight */}
          <Text style={styles.label}>Weight</Text>
          <TextInput
            style={styles.input}
            value={weight}
            onChangeText={setWeight}
            placeholder="Enter your weight (Kg)"
            placeholderTextColor="#999"
            keyboardType="numeric"
          />

          {/* Age */}
          <Text style={styles.label}>Age</Text>
          <TextInput
            style={styles.input}
            value={age}
            onChangeText={setAge}
            placeholder="Enter your age"
            placeholderTextColor="#999"
            keyboardType="numeric"
          />

          {/* Height */}
          <Text style={styles.label}>Height</Text>
          <TextInput
            style={styles.input}
            value={height}
            onChangeText={setHeight}
            placeholder="Enter your height (CM)"
            placeholderTextColor="#999"
            keyboardType="numeric"
          />
        </View>

        {/* Update Button */}
        <TouchableOpacity style={styles.updateButton} onPress={handleUpdateProfile}>
          <Text style={styles.updateButtonText}>Update Profile</Text>
        </TouchableOpacity>

        <View style={styles.bottomSpacer} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212020',
  },
  purpleHeaderBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 320,
    backgroundColor: '#B3A0FF',
    zIndex: -1,
  },
  header: {
    height: 60,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 34,
    marginTop: 32,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ rotate: '180deg' }],
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginLeft: 12,
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  scrollContent: {
    paddingBottom: 40,
  },
  profileImageContainer: {
    alignSelf: 'center',
    marginTop: 0,
    position: 'relative',
  },
  profileImage: {
    width: 125,
    height: 125,
    borderRadius: 62.5,
    backgroundColor: '#FFFFFF',
  },
  editIconButton: {
    position: 'absolute',
    right: 6,
    bottom: 6,
    width: 27,
    height: 27,
    backgroundColor: '#E2F163',
    borderRadius: 13.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userNameDisplay: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 6,
  },
  userEmailDisplay: {
    fontSize: 13,
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 0,
  },
  birthdayDisplay: {
    fontSize: 13,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 6,
  },
  birthdayValue: {
    fontWeight: '300',
    
  },
  statsCard: {
    backgroundColor: '#896CFE',
    height: 60,
    marginHorizontal: 35,
    marginTop: 4,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 15,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  statLabel: {
    fontSize: 15,
    fontWeight: '300',
    color: '#FFFFFF',
    marginTop: 0,
  },
  divider: {
    width: 1,
    height: 41.5,
    backgroundColor: '#FFFFFF',
  },
  formContainer: {
    backgroundColor: '#212020',
    marginTop: 0,
    paddingHorizontal: 35,
    paddingTop: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: '500',
    color: '#896CFE',
    marginBottom: 4,
    marginTop: 20,
  },
  input: {
    backgroundColor: '#FFFFFF',
    height: 45,
    borderRadius: 15,
    paddingHorizontal: 20,
    fontSize: 20,
    color: '#391713',
    borderWidth: 1,
    borderColor: '#E9F6FE',
  },
  updateButton: {
    backgroundColor: '#E2F163',
    height: 48,
    width: 142,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 35,
    marginTop: 40,
    alignSelf: 'center',
  },
  updateButtonText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#232323',
    letterSpacing: -0.085,
  },
  bottomSpacer: {
    height: 40,
  },
});
