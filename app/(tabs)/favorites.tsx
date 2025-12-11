import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowRightIcon } from '../../src/shared/components/icons/ArrowRightIcon';
import { SearchIcon } from '../../src/shared/components/icons/SearchIcon';
import { NotificationIcon } from '../../src/shared/components/icons/NotificationIcon';
import { UserIcon } from '../../src/shared/components/icons/UserIcon';

type FilterType = 'all' | 'video' | 'article';

export default function FavoritesScreen() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const favoriteItems = [
    {
      id: 1,
      type: 'workout',
      title: 'Upper Body',
      duration: '60 Minutes',
      calories: '1320 Kcal',
      exercises: '5 Exercises',
      image: require('../../assets/images/profile/imageProfile.png'),
      isFavorite: true,
    },
    {
      id: 2,
      type: 'article',
      title: 'Boost Energy and Vitality',
      description: 'Incorporating physical exercise into your daily routine can boost...',
      image: require('../../assets/images/profile/imageProfile.png'),
      isFavorite: true,
    },
    {
      id: 3,
      type: 'workout',
      title: 'Pull Out',
      duration: '30 Minutes',
      calories: '1210 Kcal',
      exercises: '10 Exercises',
      image: require('../../assets/images/profile/imageProfile.png'),
      isFavorite: true,
    },
    {
      id: 4,
      type: 'article',
      title: 'Lower Body Blast',
      description: 'A lower body blast is a high-intensity workout focused on targeting...',
      image: require('../../assets/images/profile/imageProfile.png'),
      isFavorite: true,
    },
    {
      id: 5,
      type: 'recipe',
      title: 'Avocado and egg toast',
      duration: '15 Minutes',
      calories: '150 Cal',
      image: require('../../assets/images/profile/imageProfile.png'),
      isFavorite: true,
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
        <Text style={styles.headerTitle}>Favorites</Text>
        
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <SearchIcon width={19} height={18.136} color="#896CFE" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <NotificationIcon width={13.909} height={18} color="#896CFE" />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.iconButton}
            onPress={() => router.push('/(tabs)/profile')}
          >
            <UserIcon width={14.488} height={18} color="#896CFE" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Filter Bar */}
      <View style={styles.filterContainer}>
        <Text style={styles.sortByText}>Sort By</Text>
        
        <TouchableOpacity 
          style={[styles.filterButton, activeFilter === 'all' && styles.filterButtonActive]}
          onPress={() => setActiveFilter('all')}
        >
          <Text style={[styles.filterText, activeFilter === 'all' && styles.filterTextActive]}>
            All
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.filterButton, activeFilter === 'video' && styles.filterButtonActive]}
          onPress={() => setActiveFilter('video')}
        >
          <Text style={[styles.filterText, activeFilter === 'video' && styles.filterTextActive]}>
            Video
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.filterButton, activeFilter === 'article' && styles.filterButtonActive]}
          onPress={() => setActiveFilter('article')}
        >
          <Text style={[styles.filterText, activeFilter === 'article' && styles.filterTextActive]}>
            Article
          </Text>
        </TouchableOpacity>
      </View>

      {/* Favorites List */}
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {favoriteItems.map((item) => (
          <View key={item.id} style={styles.card}>
            <View style={styles.cardContent}>
              {item.type === 'article' ? (
                <>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  <Text style={styles.cardDescription}>{item.description}</Text>
                </>
              ) : (
                <>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  <View style={styles.cardDetails}>
                    {item.duration && (
                      <View style={styles.detailItem}>
                        <Text style={styles.detailIcon}>⏱</Text>
                        <Text style={styles.detailText}>{item.duration}</Text>
                      </View>
                    )}
                    {item.calories && (
                      <View style={styles.detailItem}>
                        <Text style={styles.detailIcon}>🔥</Text>
                        <Text style={styles.detailText}>{item.calories}</Text>
                      </View>
                    )}
                  </View>
                  {item.exercises && (
                    <View style={styles.detailItem}>
                      <Text style={styles.detailIcon}>💪</Text>
                      <Text style={styles.detailText}>{item.exercises}</Text>
                    </View>
                  )}
                </>
              )}
            </View>
            
            <View style={styles.cardImageContainer}>
              <Image source={item.image} style={styles.cardImage} />
              {item.type === 'workout' && (
                <TouchableOpacity style={styles.playButton}>
                  <Text style={styles.playIcon}>▶️</Text>
                </TouchableOpacity>
              )}
            </View>
            
            <TouchableOpacity style={styles.favoriteButton}>
              <Text style={styles.favoriteIcon}>⭐</Text>
            </TouchableOpacity>
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
    justifyContent: 'space-between',
    paddingHorizontal: 34,
    paddingTop: 32,
    marginTop: 20,
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
    flex: 1,
    marginLeft: 12,
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 15,
  },
  iconButton: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 16,
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 34,
    paddingVertical: 15,
    gap: 10,
    marginTop: -20,
    marginBottom: 10,
  },
  sortByText: {
    fontSize: 12,
    color: '#E2F163',
    marginRight: 5,
    letterSpacing: -0.06,
    lineHeight: 12,
  },
  filterButton: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    width: 71,
    paddingVertical: 8,
    borderRadius: 38,
    height: 17.138,
    justifyContent: 'center',
  },
  filterButtonActive: {
    backgroundColor: '#E2F163',
  },
  filterText: {
    fontSize: 12,
    color: '#232323',
    fontWeight: '400',
  },
  filterTextActive: {
     fontSize: 12,
    color: '#232323',
    fontWeight: '500',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 34,
    paddingBottom: 80,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginBottom: 15,
    height: 110,
    flexDirection: 'row',
    overflow: 'hidden',
    position: 'relative',
  },
  cardContent: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#232323',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 13,
    fontWeight: '300',
    color: '#232323',
    lineHeight: 14,
  },
  cardDetails: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 5,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  detailIcon: {
    fontSize: 9,
  },
  detailText: {
    fontSize: 12,
    fontWeight: '300',
    color: '#212020',
  },
  cardImageContainer: {
    width: 148,
    height: 110,
    position: 'relative',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  playButton: {
    position: 'absolute',
    bottom: 12,
    right: 12,
    width: 32,
    height: 32,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playIcon: {
    fontSize: 14,
  },
  favoriteButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  favoriteIcon: {
    fontSize: 16,
  },
});

