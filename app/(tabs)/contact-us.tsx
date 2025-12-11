import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Linking,
} from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowRightIcon } from '../../src/shared/components/icons/ArrowRightIcon';
import { ChatIcon } from '../../src/shared/components/icons/ChatIcon';
import { WebsiteIcon } from '../../src/shared/components/icons/WebsiteIcon';
import { WhatsappIcon } from '../../src/shared/components/icons/WhatsappIcon';
import { FacebookIcon } from '../../src/shared/components/icons/FacebookIcon';
import { InstagramIcon } from '../../src/shared/components/icons/InstagramIcon';

type FilterType = 'FAQ' | 'Contact Us';

interface ContactOption {
  id: number;
  title: string;
  icon: 'customer-service' | 'website' | 'whatsapp' | 'facebook' | 'instagram';
  action: () => void;
}

export default function ContactUs() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState<FilterType>('Contact Us');

  const handleFAQPress = () => {
    router.push('/(tabs)/help-faqs');
  };

  const contactOptions: ContactOption[] = [
    {
      id: 1,
      title: 'Customer service',
      icon: 'customer-service',
      action: () => console.log('Customer service pressed'),
    },
    {
      id: 2,
      title: 'Website',
      icon: 'website',
      action: () => Linking.openURL('https://example.com'),
    },
    {
      id: 3,
      title: 'Whatsapp',
      icon: 'whatsapp',
      action: () => Linking.openURL('https://wa.me/1234567890'),
    },
    {
      id: 4,
      title: 'Facebook',
      icon: 'facebook',
      action: () => Linking.openURL('https://facebook.com'),
    },
    {
      id: 5,
      title: 'Instagram',
      icon: 'instagram',
      action: () => Linking.openURL('https://instagram.com'),
    },
  ];

  const renderIcon = (iconType: string) => {
    switch (iconType) {
      case 'customer-service':
        return <ChatIcon width={32} height={31} color="#FFFFFF" />;
      case 'website':
        return <WebsiteIcon width={26} height={26} color="#FFFFFF" />;
      case 'whatsapp':
        return <WhatsappIcon width={25} height={25} color="#FFFFFF" />;
      case 'facebook':
        return <FacebookIcon width={26} height={26} color="#FFFFFF" />;
      case 'instagram':
        return <InstagramIcon width={26} height={26} color="#FFFFFF" />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.push('/(tabs)/profile')}
          >
            <ArrowRightIcon width={6} height={11} color="#E2F163" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Help & FAQs</Text>
        </View>

        {/* Title */}
        <Text style={styles.subtitle}>How Can We Help You?</Text>

        {/* Main Filters - FAQ / Contact Us */}
        <View style={styles.mainFiltersContainer}>
          <TouchableOpacity
            style={[
              styles.mainFilterButton,
              activeFilter === 'FAQ' && styles.mainFilterButtonActive,
            ]}
            onPress={handleFAQPress}
          >
            <Text
              style={[
                styles.mainFilterText,
                activeFilter === 'FAQ' && styles.mainFilterTextActive,
              ]}
            >
              FAQ
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.mainFilterButton,
              activeFilter === 'Contact Us' && styles.mainFilterButtonActive,
            ]}
            onPress={() => setActiveFilter('Contact Us')}
          >
            <Text
              style={[
                styles.mainFilterText,
                activeFilter === 'Contact Us' && styles.mainFilterTextActive,
              ]}
            >
              Contact Us
            </Text>
          </TouchableOpacity>
        </View>

        {/* Contact Options List */}
        <View style={styles.contactList}>
          {contactOptions.map((option) => (
            <TouchableOpacity
              key={option.id}
              style={styles.contactItem}
              onPress={option.action}
            >
              <View style={styles.iconContainer}>
                {renderIcon(option.icon)}
              </View>
              <Text style={styles.contactTitle}>{option.title}</Text>
              <View style={styles.arrowContainer}>
                <ArrowRightIcon width={6} height={11} color="#E2F163" />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212020',
  },
  scrollContent: {
    paddingHorizontal: 34,
    paddingBottom: 119,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 32,
    paddingBottom: 20,
    height: 92,
  },
  backButton: {
    marginRight: 10,
    transform: [{ rotate: '180deg' }],
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#896CFE',
    textTransform: 'capitalize',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '400',
    color: '#FFFFFF',
    textAlign: 'center',
    textTransform: 'capitalize',
    marginBottom: 18,
  },
  mainFiltersContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 14,
    marginBottom: 6,
  },
  mainFilterButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 38,
    paddingTop: 4,
    paddingBottom: 4,
    paddingHorizontal: 12,
    width: 155,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainFilterButtonActive: {
    backgroundColor: '#E2F163',
  },
  mainFilterText: {
    fontSize: 17,
    fontWeight: '400',
    color: '#896CFE',
    textAlign: 'center',
    lineHeight: 20,
    letterSpacing: -0.085,
  },
  mainFilterTextActive: {
    fontWeight: '500',
    color: '#232323',
  },
  contactList: {
    marginTop: 10,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
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
  contactTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#FFFFFF',
    flex: 1,
    lineHeight: 22,
  },
  arrowContainer: {
    transform: [{ rotate: '90deg' }],
    marginLeft: 10,
  },
});
