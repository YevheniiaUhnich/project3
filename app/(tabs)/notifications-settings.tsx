import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Switch,
} from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowRightIcon } from '../../src/shared/components/icons/ArrowRightIcon';

export default function NotificationsSettingsScreen() {
  const router = useRouter();

  const [generalNotification, setGeneralNotification] = useState(true);
  const [sound, setSound] = useState(true);
  const [dontDisturbMode, setDontDisturbMode] = useState(true);
  const [vibrate, setVibrate] = useState(false);
  const [lockScreen, setLockScreen] = useState(false);
  const [reminders, setReminders] = useState(true);

  const notificationSettings = [
    {
      id: 1,
      title: 'General Notification',
      value: generalNotification,
      onValueChange: setGeneralNotification,
    },
    {
      id: 2,
      title: 'Sound',
      value: sound,
      onValueChange: setSound,
    },
    {
      id: 3,
      title: "Don't Disturb Mode",
      value: dontDisturbMode,
      onValueChange: setDontDisturbMode,
    },
    {
      id: 4,
      title: 'Vibrate',
      value: vibrate,
      onValueChange: setVibrate,
    },
    {
      id: 5,
      title: 'Lock Screen',
      value: lockScreen,
      onValueChange: setLockScreen,
    },
    {
      id: 6,
      title: 'Reminders',
      value: reminders,
      onValueChange: setReminders,
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.push('/(tabs)/settings')}
        >
          <ArrowRightIcon width={6} height={11} color="#E2F163" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications Settings</Text>
      </View>

      {/* Settings List */}
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {notificationSettings.map((item) => (
          <View key={item.id} style={styles.settingItem}>
            <Text style={styles.settingTitle}>{item.title}</Text>
            <Switch
              value={item.value}
              onValueChange={item.onValueChange}
              trackColor={{ false: '#B3A0FF', true: '#E2F163' }}
              thumbColor="#FFFFFF"
              ios_backgroundColor="#B3A0FF"
            />
          </View>
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
    marginLeft: 12,
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
    justifyContent: 'space-between',
    paddingVertical: 10,
    marginBottom: 10,
  },
  settingTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#FFFFFF',
    letterSpacing: 0,
  },
});
