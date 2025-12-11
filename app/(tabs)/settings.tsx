import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowRightIcon } from '../../src/shared/components/icons/ArrowRightIcon';
import { NotificationIcon } from '../../src/shared/components/icons/NotificationIcon';
import { UserIcon } from '../../src/shared/components/icons/UserIcon';
import { PasswordKeyIcon } from '../../src/shared/components/icons/PasswordKeyIcon';

export default function SettingsScreen() {
  const router = useRouter();

  const settingsItems = [
    {
      id: 1,
      title: 'Notification Setting',
      icon: 'notification',
      onPress: () => router.push('/(tabs)/notifications-settings'),
    },
    {
      id: 2,
      title: 'Password Setting',
      icon: 'password',
      onPress: () => router.push('/(tabs)/password-settings'),
    },
    {
      id: 3,
      title: 'Delete Account',
      icon: 'user',
      onPress: () => console.log('Delete Account pressed'),
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.push('/(tabs)/profile')}
        >
          <ArrowRightIcon width={6} height={11} color="#E2F163" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      {/* Settings List */}
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {settingsItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.settingItem}
            onPress={item.onPress}
          >
            <View style={styles.iconContainer}>
              {item.icon === 'notification' && (
                <NotificationIcon width={19} height={22} color="#FFFFFF" />
              )}
              {item.icon === 'password' && (
                <PasswordKeyIcon width={24} height={12} color="#FFFFFF" />
              )}
              {item.icon === 'user' && (
                <UserIcon width={19} height={22} color="#FFFFFF" />
              )}
            </View>
            
            <Text style={styles.settingTitle}>{item.title}</Text>
            
            <View style={styles.arrowContainer}>
              <ArrowRightIcon width={6} height={11} color="#E2F163" />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212020',
  },
  header: {
    height: 92,
    backgroundColor: '#212020',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 34,
    paddingTop: 32,
    marginTop: 20,
    marginBottom: 10,
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
    color: '#896CFE',
    
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 34,
    paddingTop: 20,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    marginBottom: 6,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#896CFE',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  passwordIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  passwordIconText: {
    fontSize: 18,
  },
  settingTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#FFFFFF',
    letterSpacing: 0,
  },
  arrowContainer: {
    transform: [{ rotate: '90deg' }],
  },
});
