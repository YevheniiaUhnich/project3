import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';
import { SearchIcon } from '../../src/shared/components/icons/SearchIcon';
import { NotificationIcon } from '../../src/shared/components/icons/NotificationIcon';
import { UserIcon } from '../../src/shared/components/icons/UserIcon';
import { WorkoutIcon } from '../../src/shared/components/icons/WorkoutIcon';
import { ProgressIcon } from '../../src/shared/components/icons/ProgressIcon';
import { NutritionIcon } from '../../src/shared/components/icons/NutritionIcon';
import { CommunityIcon } from '../../src/shared/components/icons/CommunityIcon';
import { ArrowRightIcon } from '../../src/shared/components/icons/ArrowRightIcon';
import { StarIcon } from '../../src/shared/components/icons/StarIcon';
import { PlayIcon } from '../../src/shared/components/icons/PlayIcon';
import { ClockIcon } from '../../src/shared/components/icons/ClockIcon';
import { FireIcon } from '../../src/shared/components/icons/FireIcon';
import { useAuth } from '../../src/contexts/AuthContext';

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState('workout');
  const [isSeeAllPressed, setIsSeeAllPressed] = useState(false);
  const router = useRouter();
  const { user } = useAuth();

  // Отримуємо ім'я користувача з email
  const userEmail = user?.email || 'user@example.com';
  const userName = userEmail.split('@')[0].charAt(0).toUpperCase() + userEmail.split('@')[0].slice(1);

  return (
    <View style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hi, {userName}</Text>
            <Text style={styles.subtext}>It's time to challenge your limits.</Text>
          </View>
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

        {/* Category Tabs */}
        <View style={styles.tabsContainer}>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'workout' && styles.activeTab]}
            onPress={() => setActiveTab('workout')}
          >
            <WorkoutIcon width={32} height={32} color={activeTab === 'workout' ? '#E2F163' : '#B3A0FF'} />
            <Text style={[styles.tabText, activeTab === 'workout' && styles.activeTabText]}>
              Workout
            </Text>
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity 
            style={[styles.tab, activeTab === 'progress' && styles.activeTab]}
            onPress={() => setActiveTab('progress')}
          >
            <ProgressIcon width={28.082} height={32} color={activeTab === 'progress' ? '#E2F163' : '#B3A0FF'} />
            <Text style={[styles.tabText, activeTab === 'progress' && styles.activeTabText]}>
              Progress{'\n'}tracking
            </Text>
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity 
            style={[styles.tab, activeTab === 'nutrition' && styles.activeTab]}
            onPress={() => setActiveTab('nutrition')}
          >
            <NutritionIcon width={30.041} height={32} color={activeTab === 'nutrition' ? '#E2F163' : '#B3A0FF'} />
            <Text style={[styles.tabText, activeTab === 'nutrition' && styles.activeTabText]}>
              Nutrition
            </Text>
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity 
            style={[styles.tab, activeTab === 'community' && styles.activeTab]}
            onPress={() => setActiveTab('community')}
          >
            <CommunityIcon width={32} height={21.926} color={activeTab === 'community' ? '#E2F163' : '#B3A0FF'} />
            <Text style={[styles.tabText, activeTab === 'community' && styles.activeTabText]}>
              Community
            </Text>
          </TouchableOpacity>
        </View>

        {/* Recommendations Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recommendations</Text>
            <TouchableOpacity 
              onPressIn={() => setIsSeeAllPressed(true)}
              onPressOut={() => setIsSeeAllPressed(false)}
              style={styles.seeAllButton}
            >
              <Text style={styles.seeAllText}>See All</Text>
              <ArrowRightIcon width={6} height={11.143} color={isSeeAllPressed ? '#FFFFFF' : '#E2F163'} />
            </TouchableOpacity>
          </View>

          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.cardsRow}
          >
            {/* Card 1 */}
            <View style={styles.recommendCard}>
              <Image 
                source={require('../../assets/images/home/squat.png')} 
                style={styles.cardImage}
              />
              <TouchableOpacity style={styles.playButton}>
                <PlayIcon width={9.857} height={11.829} color="#FFFFFF" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.starButton}>
                <StarIcon width={15} height={14.063} color="#E2F163" />
              </TouchableOpacity>
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Squat Exercise</Text>
         <View style={styles.cardMeta}>
                  <View style={styles.metaItem}>
                    <ClockIcon width={9} height={9} color="#896CFE" />
                    <Text style={styles.metaText}>12 Minutes</Text>
                  </View>
                  <View style={styles.metaItem}>
                    <FireIcon width={7} height={9} color="#896CFE" />
                    <Text style={styles.metaText}>120 Kcal</Text>
                  </View>
                </View>
              </View>
            </View>

            {/* Card 2 */}
            <View style={styles.recommendCard}>
              <Image 
                source={require('../../assets/images/home/fullBody.png')} 
                style={styles.cardImage}
              />
              <TouchableOpacity style={styles.playButton}>
                <PlayIcon width={9.857} height={11.829} color="#FFFFFF" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.starButton}>
                <StarIcon width={15} height={14.063} color="#E2F163" />
              </TouchableOpacity>
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Full Body Stretching</Text>
                <View style={styles.cardMeta}>
                  <View style={styles.metaItem}>
                    <ClockIcon width={9} height={9} color="#896CFE" />
                    <Text style={styles.metaText}>12 Minutes</Text>
                  </View>
                  <View style={styles.metaItem}>
                    <FireIcon width={7} height={9} color="#896CFE" />
                    <Text style={styles.metaText}>120 Kcal</Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>

        {/* Weekly Challenge */}
        <View style={styles.challengeSection}>
          <View style={styles.challengeCard}>
            <View style={styles.challengeContent}>
              <Text style={styles.challengeTitle}>Weekly{'\n'}Challenge</Text>
              <Text style={styles.challengeSubtitle}>Plank With Hip Twist</Text>
            </View>
            <Image 
              source={require('../../assets/images/home/chalenge.png')} 
              style={styles.challengeImage}
            />
          </View>
        </View>

        {/* Articles & Tips */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Articles & Tips</Text>
          
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.cardsRow}
          >
            {/* Article 1 */}
            <View style={styles.articleCard}>
              <Image 
                source={require('../../assets/images/home/Supplement.png')} 
                style={styles.articleImage}
              />
              <TouchableOpacity style={styles.starButton}>
                <Text style={styles.starIcon}>⭐</Text>
              </TouchableOpacity>
              <Text style={styles.articleTitle}>Supplement Guide...</Text>
            </View>

            {/* Article 2 */}
            <View style={styles.articleCard}>
              <Image 
                source={require('../../assets/images/home/Effective.png')} 
                style={styles.articleImage}
              />
              <TouchableOpacity style={styles.starButton}>
                <Text style={styles.starIcon}>⭐</Text>
              </TouchableOpacity>
              <Text style={styles.articleTitle}>15 Quick & Effective Daily Routines...</Text>
            </View>
          </ScrollView>
        </View>

        {/* Bottom padding */}
        <View style={{ height: 20 }} />
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
    paddingTop: 60,
    paddingBottom: 20,
  },
  header: {
    paddingHorizontal: 24,
    marginBottom: 30,
  },
  greeting: {
    fontSize: 20,
    fontFamily: 'Poppins_700Bold',
    fontWeight: '700',
    color: '#896CFE',
    textTransform: 'capitalize',
    marginBottom: 5,
    marginTop: 30,
  },
  subtext: {
    fontSize: 13,
    fontFamily: 'LeagueSpartan_500Medium',
    fontWeight: '500',
    color: '#FFFFFF',
  },
  headerIcons: {
    position: 'absolute',
    right: 20,
    top: 30,
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
    fontSize: 18,
  },
  tabsContainer: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    marginHorizontal: 14,
    marginBottom: 10,
    borderRadius: 20,
    padding: 5,

  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 9,
    paddingHorizontal: 9,
    borderRadius: 20,
    gap: 6,
  },
  activeTab: {
    backgroundColor: 'rgba(226, 241, 99, 0.1)',
  },
  tabIcon: {
    fontSize: 20,
  },
  tabText: {
    fontSize: 12,
    fontFamily: 'LeagueSpartan_300Light',
    fontWeight: '300',
    color: '#B3A0FF',
    textAlign: 'center',
    lineHeight: 12,
  },
  activeTabText: {
    color: '#E2F163',
  },
  divider: {
    width: 1,
    height: 40,
    backgroundColor: 'rgba(179, 160, 255, 0.3)',
    alignSelf: 'center',
  },
  section: {
    marginBottom: 0,
    paddingHorizontal: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 15,
    fontFamily: 'Poppins_500Medium',
    fontWeight: '500',
    color: '#E2F163',
    textTransform: 'capitalize',
  },
  seeAllText: {
    fontSize: 12,
    fontFamily: 'Poppins_500Medium',
    fontWeight: '500',
    color: '#FFFFFF',
    textTransform: 'capitalize',
  },
  seeAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginRight: 15,
  },
  cardsRow: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  recommendCard: {
    width: 157,
    borderRadius: 16,
    backgroundColor: '#2A2A2A',
    borderWidth: 1,
    borderColor: '#FFFFFF',

    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 92,
    resizeMode: 'cover',
  },
  playButton: {
    position: 'absolute',
    right: 8,
    bottom: 46,
    width: 23,
    height: 23,
    borderRadius: 11.5,
    backgroundColor: '#896CFE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playIcon: {
    color: '#FFFFFF',
    fontSize: 10,
    marginLeft: 6,
  },
  starButton: {
    position: 'absolute',
    right: 10,
    top: 10,
    width: 15,
    height: 15,
  },
  starIcon: {
    fontSize: 15,
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    color: '#E2F163',
    marginBottom: 8,
    textTransform: 'capitalize',
  },
  cardMeta: {
    flexDirection: 'row',
    gap: 10,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    fontSize: 12,
    fontFamily: 'LeagueSpartan_300Light',
    fontWeight: '300',
    color: '#FFFFFF',
    textTransform: 'capitalize',
  },
  challengeSection: {
    backgroundColor: '#B3A0FF',
    marginHorizontal: -24,
    paddingHorizontal: 24,
    paddingVertical: 25,
    marginBottom: 25,
    marginTop: 25,
  },
  challengeCard: {
    backgroundColor: '#212020',
    borderRadius: 20,
    flexDirection: 'row',
    overflow: 'hidden',
    height: 125,
    width: 324,
    alignSelf: 'center',
  },
  challengeContent: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  challengeTitle: {
    fontSize: 24,
    fontFamily: 'Poppins_500Medium',
    fontWeight: '500',
    color: '#E2F163',
    lineHeight: 25,
    marginBottom: 4,
    textTransform: 'capitalize',
    alignSelf: 'center',
  },
  challengeSubtitle: {
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    color: '#FFFFFF',
    textTransform: 'capitalize',
    alignSelf: 'center',
  },
  challengeImage: {
    width: 157,
    height: 125,
    resizeMode: 'cover',
  },
  articleCard: {
    width: 157,
    borderRadius: 20,
    overflow: 'hidden',
  
  },
  articleImage: {
    width: '100%',
    height: 134,
    resizeMode: 'cover',
  },
  articleTitle: {
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    color: '#FFFFFF',
    padding: 10,
    textTransform: 'capitalize',
  
  },
});
