import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowRightIcon } from '../../src/shared/components/icons/ArrowRightIcon';

type FilterType = 'FAQ' | 'Contact Us';
type SubFilterType = 'General' | 'Account' | 'Services';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: SubFilterType;
}

export default function HelpFAQs() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState<FilterType>('FAQ');
  const [activeSubFilter, setActiveSubFilter] = useState<SubFilterType>('General');
  const [expandedItem, setExpandedItem] = useState<number | null>(1);
  const [searchQuery, setSearchQuery] = useState('');

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: 'Lorem ipsum dolor sit amet?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque congue lorem, vel tincidunt tortor placerat a. Proin ac diam quam. Aenean in sagittis magna, ut feugiat diam.',
      category: 'General',
    },
    {
      id: 2,
      question: 'Lorem ipsum dolor sit amet?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      category: 'General',
    },
    {
      id: 3,
      question: 'Lorem ipsum dolor sit amet?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      category: 'General',
    },
    {
      id: 4,
      question: 'Lorem ipsum dolor sit amet?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      category: 'General',
    },
    {
      id: 5,
      question: 'Lorem ipsum dolor sit amet?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      category: 'General',
    },
    {
      id: 6,
      question: 'Lorem ipsum dolor sit amet?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      category: 'General',
    },
  ];

  const filteredFAQs = faqData.filter(
    (item) => item.category === activeSubFilter
  );

  const toggleExpand = (id: number) => {
    setExpandedItem(expandedItem === id ? null : id);
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
            onPress={() => setActiveFilter('FAQ')}
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
            onPress={() => router.push('/(tabs)/contact-us')}
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

        {/* Sub Filters - General / Account / Services */}
        <View style={styles.subFiltersContainer}>
          <TouchableOpacity
            style={[
              styles.subFilterButton,
              activeSubFilter === 'General' && styles.subFilterButtonActive,
            ]}
            onPress={() => setActiveSubFilter('General')}
          >
            <Text
              style={[
                styles.subFilterText,
                activeSubFilter === 'General' && styles.subFilterTextActive,
              ]}
            >
              General
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.subFilterButton,
              activeSubFilter === 'Account' && styles.subFilterButtonActive,
            ]}
            onPress={() => setActiveSubFilter('Account')}
          >
            <Text
              style={[
                styles.subFilterText,
                activeSubFilter === 'Account' && styles.subFilterTextActive,
              ]}
            >
              Account
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.subFilterButton,
              activeSubFilter === 'Services' && styles.subFilterButtonActive,
            ]}
            onPress={() => setActiveSubFilter('Services')}
          >
            <Text
              style={[
                styles.subFilterText,
                activeSubFilter === 'Services' && styles.subFilterTextActive,
              ]}
            >
              Services
            </Text>
          </TouchableOpacity>
        </View>

        {/* Search Input */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#676767"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* FAQ List */}
        <View style={styles.faqList}>
          {filteredFAQs.map((item, index) => (
            <View key={item.id}>
              {index === 0 && <View style={styles.separator} />}
              <TouchableOpacity
                style={styles.faqItem}
                onPress={() => toggleExpand(item.id)}
              >
                <Text
                  style={[
                    styles.faqQuestion,
                    expandedItem === item.id && styles.faqQuestionExpanded,
                  ]}
                >
                  {item.question}
                </Text>
                <View
                  style={[
                    styles.arrowContainer,
                    expandedItem === item.id && styles.arrowExpanded,
                  ]}
                >
                  <ArrowRightIcon width={6} height={11} color="#E2F163" />
                </View>
              </TouchableOpacity>

              {expandedItem === item.id && (
                <>
                  <View style={styles.separator} />
                  <Text style={styles.faqAnswer}>{item.answer}</Text>
                </>
              )}

              {index < filteredFAQs.length - 1 && (
                <View style={styles.separator} />
              )}
            </View>
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
    marginBottom: 10,
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
    marginBottom: 10,
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
  subFiltersContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 7,
    marginBottom: 15,
  },
  subFilterButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 38,
    paddingVertical: 4,
    paddingHorizontal: 12,
    minWidth: 102,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subFilterButtonActive: {
    backgroundColor: '#E2F163',
  },
  subFilterText: {
    fontSize: 15,
    fontWeight: '400',
    color: '#896CFE',
    textAlign: 'center',
    lineHeight: 20,
    letterSpacing: -0.075,
  },
  subFilterTextActive: {
    fontSize: 15,
    fontWeight: '500',
    color: '#232323',
  },
  searchContainer: {
    position: 'relative',
    marginBottom: 32,
  },
  searchInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    height: 42,
    paddingHorizontal: 19,
    fontSize: 19,
    fontWeight: '300',
    color: '#676767',
    textTransform: 'capitalize',
  },
  faqList: {
    marginTop: 0,
  },
  faqItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18,
  },
  faqQuestion: {
    fontSize: 18,
    fontWeight: '500',
    color: '#B3A0FF',
    flex: 1,
    lineHeight: 22,
  },
  faqQuestionExpanded: {
    color: '#FFFFFF',
  },
  arrowContainer: {
    transform: [{ rotate: '270deg' }],
    marginLeft: 10,
  },
  arrowExpanded: {
    transform: [{ rotate: '90deg' }],
  },
  separator: {
    height: 1,
    backgroundColor: '#E2F163',
    width: 323,
  },
  faqAnswer: {
    fontSize: 14,
    fontWeight: '300',
    color: '#FFFFFF',
    lineHeight: 14,
    paddingTop: 18,
    paddingBottom: 18,
  },
});
