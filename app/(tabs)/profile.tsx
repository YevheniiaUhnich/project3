import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowRightIcon } from '../../src/shared/components/icons/ArrowRightIcon';
import { ProfileMenuIcon } from '../../src/shared/components/icons/ProfileMenuIcon';
import { FavoriteMenuIcon } from '../../src/shared/components/icons/FavoriteMenuIcon';
import { PrivacyMenuIcon } from '../../src/shared/components/icons/PrivacyMenuIcon';
import { SettingsMenuIcon } from '../../src/shared/components/icons/SettingsMenuIcon';
import { HelpMenuIcon } from '../../src/shared/components/icons/HelpMenuIcon';
import { LogoutMenuIcon } from '../../src/shared/components/icons/LogoutMenuIcon';
import { useAuth } from '../../src/contexts/AuthContext';

export default function ProfileScreen() {
  const router = useRouter();
  const { signOut, user } = useAuth();

  // Отримуємо email користувача
  const userEmail = user?.email || 'user@example.com';
  
  // Отримуємо ім'я з email (частина до @)
  const userName = userEmail.split('@')[0].charAt(0).toUpperCase() + userEmail.split('@')[0].slice(1);

  const handleLogout = async () => {
    try {
      await signOut();
      router.replace('/(auth)/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const menuItems = [
    { title: 'Profile', onPress: () => router.push('/(tabs)/profile-settings') },
    { title: 'Favorite', onPress: () => router.push('/(tabs)/favorites') },
    { title: 'Privacy Policy', onPress: () => console.log('Privacy Policy pressed') },
    { title: 'Settings', onPress: () => console.log('Settings pressed') },
    { title: 'Help', onPress: () => console.log('Help pressed') },
    { title: 'Logout', onPress: handleLogout },
  ];

  return (
    <View style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Purple Header Section */}
        <View style={styles.headerSection}>
          {/* Back Button */}
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => router.push('/(tabs)/home')}
          >
            <ArrowRightIcon width={6} height={11} color="#E2F163" />
          </TouchableOpacity>

          {/* Title */}
          <Text style={styles.headerTitle}>My Profile</Text>

          {/* Profile Image */}
          <View style={styles.profileImageContainer}>
            <Image 
              source={require('../../assets/images/profile/imageProfile.png')} 
              style={styles.profileImage}
            />
          </View>

          {/* User Info */}
          <Text style={styles.userName}>{userName}</Text>
          <Text style={styles.userEmail}>{userEmail}</Text>
          <Text style={styles.userBirthday}>
            Birthday: <Text style={styles.birthdayLight}>April 1st</Text>
          </Text>
        </View>

        {/* Stats Card */}
        <View style={styles.statsCard}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>75 Kg</Text>
            <Text style={styles.statLabel}>Weight</Text>
          </View>
          
          <View style={styles.divider} />
          
          <View style={styles.statItem}>
            <Text style={styles.statValue}>28</Text>
            <Text style={styles.statLabel}>Years old</Text>
          </View>
          
          <View style={styles.divider} />
          
          <View style={styles.statItem}>
            <Text style={styles.statValue}>1.65 CM</Text>
            <Text style={styles.statLabel}>height</Text>
          </View>
        </View>

        {/* Menu Items */}
        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity 
              key={index}
              style={styles.menuItem}
              onPress={item.onPress}
            >
              {index === 0 && (
                <View style={styles.iconCircle}>
                  <ProfileMenuIcon width={20} height={25} color="#FFFFFF" />
                </View>
              )}
              {index === 1 && (
                <View style={styles.iconCircle}>
                  <FavoriteMenuIcon width={25} height={24} color="#FFFFFF" />
                </View>
              )}
              {index === 2 && (
                <View style={styles.iconCircle}>
                  <PrivacyMenuIcon width={18} height={27} color="#FFFFFF" />
                </View>
              )}
              {index === 3 && (
                <View style={styles.iconCircle}>
                  <SettingsMenuIcon width={27} height={28} color="#FFFFFF" />
                </View>
              )}
              {index === 4 && (
                <View style={styles.iconCircle}>
                  <HelpMenuIcon width={28} height={27} color="#FFFFFF" />
                </View>
              )}
              {index === 5 && (
                <View style={styles.iconCircle}>
                  <LogoutMenuIcon width={23} height={28} color="#FFFFFF" />
                </View>
              )}
              <Text style={[styles.menuText, index <= 5 && styles.menuTextWithIcon]}>{item.title}</Text>
              <ArrowRightIcon width={6} height={11} color="#E2F163" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Bottom padding */}
        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212020',
  },
  scrollContent: {
    flexGrow: 1,
  },
  headerSection: {
    backgroundColor: '#B3A0FF',
    paddingTop: 60,
    paddingBottom: 30,
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 28,
    top: 70,
    padding: 10,
    
    transform: [{ rotate: '180deg' }],
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    textTransform: 'capitalize',
    marginBottom: 24,
    marginTop: 14,
    fontFamily: 'Poppins',
    alignSelf: 'flex-start',
    marginLeft: 54,
  },
  profileImageContainer: {
    width: 125,
    height: 125,
    borderRadius: 62.5,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    marginBottom: 8,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  userName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    textTransform: 'capitalize',
    marginBottom: 0,
    fontFamily: 'Poppins',
  },
  userEmail: {
    fontSize: 13,
    fontWeight: '300',
    color: '#FFFFFF',
    textTransform: 'lowercase',
    marginBottom: 6,
    fontFamily: 'Poppins',
  },
  userBirthday: {
    fontSize: 13,
    fontWeight: '600',
    color: '#FFFFFF',
    textTransform: 'capitalize',
    fontFamily: 'Poppins',
    marginBottom: 6,
  },
  birthdayLight: {
    fontWeight: '300',
  },
  statsCard: {
    backgroundColor: '#896CFE',
    marginHorizontal: 35,
    marginTop: -30,
    borderRadius: 10,
    flexDirection: 'row',
    paddingVertical: 9,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 15,
    fontWeight: '600',
    color: '#FFFFFF',
    textTransform: 'capitalize',
    marginBottom: 0,
    fontFamily: 'League Spartan',
  },
  statLabel: {
    fontSize: 15,
    fontWeight: '300',
    color: '#FFFFFF',
    textTransform: 'capitalize',
    fontFamily: 'League Spartan',
  },
  divider: {
    width: 1,
    height: 41.5,
    backgroundColor: '#FFFFFF',
  },
  menuContainer: {
    marginTop: 30,
    paddingHorizontal: 34,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 6,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#896CFE',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 23,
  },
  menuText: {
    fontSize: 20,
    fontWeight: '400',
    color: '#FFFFFF',
    textTransform: 'capitalize',
    fontFamily: 'League Spartan',
    flex: 1,
  },
  menuTextWithIcon: {
    marginLeft: 0,
  },
});

