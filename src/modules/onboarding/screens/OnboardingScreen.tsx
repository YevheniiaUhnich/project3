import React, { useRef, useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  ViewToken,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import { OnboardingSlide } from '../components/OnboardingSlide';
import type { OnboardingSlide as SlideData } from '../types';

const slides: SlideData[] = [
  {
    id: '1',
    title: '',
    description: '',
    backgroundImage: require('../../../../assets/images/onboarding/slide1.png'),
    showLogo: true,
  },
  {
    id: '2',
    title: 'Start Your Journey Towards A More Active Lifestyle',
    description: '',
    backgroundImage: require('../../../../assets/images/onboarding/slide2.png'),
    showLogo: false,
    showIcon: true,
  },
  {
    id: '3',
    title: 'Find nutrition tips that fit your lifestyle',
    description: '',
    backgroundImage: require('../../../../assets/images/onboarding/slide3.png'),
    showLogo: false,
    showNutrition: true,
  },
  {
    id: '4',
    title: 'A community for you, challenge yourself',
    description: '',
    backgroundImage: require('../../../../assets/images/onboarding/slide4.png'),
    showLogo: false,
    showCommunity: true,
  },
];

export const OnboardingScreen: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const router = useRouter();

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0 && viewableItems[0].index !== null) {
        setCurrentIndex(viewableItems[0].index);
      }
    }
  ).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  const handleNext = (): void => {
    console.log('handleNext called, currentIndex:', currentIndex, 'slides.length:', slides.length);
    
    if (currentIndex < slides.length - 1) {
      const nextIndex = currentIndex + 1;
      console.log('Scrolling to index:', nextIndex);
      
      flatListRef.current?.scrollToIndex({
        index: nextIndex,
        animated: true,
      });
    } else {
      console.log('Last slide, navigating to login');
      handleGetStarted();
    }
  };

  const handleGetStarted = (): void => {
    router.replace('/(auth)/login');
  };

  const renderItem = ({ item, index }: { item: SlideData; index: number }): React.ReactElement => {
    console.log('Rendering slide:', item.id, 'at index:', index);
    
    return (
      <OnboardingSlide 
        slide={item} 
        onNext={(item.showIcon || item.showLogo || item.showNutrition || item.showCommunity) ? handleNext : undefined}
      />
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        bounces={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232323',
  },
});
