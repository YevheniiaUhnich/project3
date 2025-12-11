import React, { useRef } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import Svg, { Rect, Path } from 'react-native-svg';
import { BlurView } from 'expo-blur';
import { Logo } from '@/shared';
import { OnboardingRunnerIcon } from '@/shared/components/icons/OnboardingRunnerIcon';
import { NutritionIcon } from '@/shared/components/icons/NutritionIcon';
import { CommunityIcon } from '@/shared/components/icons/CommunityIcon';
import type { OnboardingSlide as SlideData } from '../types';

interface OnboardingSlideProps {
  slide: SlideData;
  onNext?: () => void;
}

const { width, height } = Dimensions.get('window');

export const OnboardingSlide: React.FC<OnboardingSlideProps> = ({ slide, onNext }) => {
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handleTapToContinue = (): void => {
    console.log('Tap detected on slide:', slide.id, 'showLogo:', slide.showLogo, 'showIcon:', slide.showIcon, 'showNutrition:', slide.showNutrition, 'showCommunity:', slide.showCommunity);
    
    if (slide.showLogo && onNext) {
      console.log('Starting animation for first screen');
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 350,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 0.95,
          duration: 350,
          useNativeDriver: true,
        }),
      ]).start(({ finished }) => {
        if (finished) {
          console.log('Animation finished, navigating from screen 1');
          onNext();
        }
      });
    } else if ((slide.showIcon || slide.showNutrition || slide.showCommunity) && onNext) {
      console.log('Navigating from screen 2, 3, or 4 immediately');
      onNext();
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={slide.backgroundImage}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {(slide.showLogo || slide.showIcon || slide.showNutrition || slide.showCommunity) && <View style={(slide.showIcon || slide.showNutrition || slide.showCommunity) ? styles.overlayLight : styles.overlay} />}
        
        {slide.showIcon ? (
          <TouchableWithoutFeedback onPress={handleTapToContinue}>
            <View style={styles.content}>
              {onNext && (
                <TouchableOpacity 
                  style={styles.skipButton}
                  onPress={(e) => {
                    e.stopPropagation();
                    console.log('Skip button pressed on screen 2');
                    onNext();
                  }}
                  activeOpacity={0.7}
                >
                  <Text style={styles.skipText}>Skip</Text>
                  <Svg width={6} height={11} viewBox="0 0 6 11" fill="none">
                    <Path d="M0.585633 11C0.71215 11.0006 0.835198 10.9464 0.935146 10.8461L5.7695 6.10215C5.84117 6.03148 5.89925 5.94036 5.93923 5.83592C5.97921 5.73148 6 5.61651 6 5.49997C6 5.38343 5.97921 5.26847 5.93923 5.16402C5.89925 5.05958 5.84117 4.96852 5.7695 4.89786L0.935148 0.153874C0.8352 0.0535707 0.712152 -0.000575767 0.585635 5.25494e-06C0.508817 -0.000316219 0.432708 0.0189918 0.361666 0.0567815C0.290624 0.0945712 0.22605 0.150068 0.171643 0.220192C0.117237 0.290317 0.0740773 0.373688 0.044623 0.465428C0.0151687 0.557167 -5.16879e-07 0.655524 -1.31975e-07 0.754856L-1.79131e-06 10.2451C-2.21095e-06 10.3445 0.015167 10.4428 0.0446213 10.5346C0.0740755 10.6263 0.117235 10.7096 0.171641 10.7797C0.226048 10.8499 0.290622 10.9054 0.361664 10.9432C0.432706 10.981 0.508815 11.0003 0.585633 11Z" fill="#E2F163"/>
                  </Svg>
                </TouchableOpacity>
              )}
              <BlurView intensity={35} style={styles.iconSection}>
                <View style={styles.iconContainer}>
                  <OnboardingRunnerIcon width={38.354} height={43.32} />
                </View>
                <Text style={styles.iconTitle}>{slide.title}</Text>
                <View style={styles.decorativeBar}>
                  <Svg width={68} height={4} viewBox="0 0 68 4" fill="none">
                    <Rect width="20" height="4" rx="2" fill="white" />
                    <Rect x="24" width="20" height="4" rx="2" fill="#896CFE" />
                    <Rect x="48" width="20" height="4" rx="2" fill="#896CFE" />
                  </Svg>
                </View>
              </BlurView>
              {onNext && (
                <TouchableOpacity 
                  style={styles.nextButtonWrapper} 
                  onPress={(e) => {
                    e.stopPropagation();
                    console.log('Next button pressed on screen 2');
                    onNext();
                  }}
                >
                  <BlurView intensity={35} style={styles.nextButton}>
                    <Text style={styles.nextButtonText}>Next</Text>
                  </BlurView>
                </TouchableOpacity>
              )}
            </View>
          </TouchableWithoutFeedback>
        ) : slide.showNutrition ? (
          <TouchableWithoutFeedback onPress={handleTapToContinue}>
            <View style={styles.content}>
              {onNext && (
                <TouchableOpacity 
                  style={styles.skipButton}
                  onPress={(e) => {
                    e.stopPropagation();
                    console.log('Skip button pressed on screen 3');
                    onNext();
                  }}
                  activeOpacity={0.7}
                >
                  <Text style={styles.skipText}>Skip</Text>
                  <Svg width={6} height={11} viewBox="0 0 6 11" fill="none">
                    <Path d="M0.585633 11C0.71215 11.0006 0.835198 10.9464 0.935146 10.8461L5.7695 6.10215C5.84117 6.03148 5.89925 5.94036 5.93923 5.83592C5.97921 5.73148 6 5.61651 6 5.49997C6 5.38343 5.97921 5.26847 5.93923 5.16402C5.89925 5.05958 5.84117 4.96852 5.7695 4.89786L0.935148 0.153874C0.8352 0.0535707 0.712152 -0.000575767 0.585635 5.25494e-06C0.508817 -0.000316219 0.432708 0.0189918 0.361666 0.0567815C0.290624 0.0945712 0.22605 0.150068 0.171643 0.220192C0.117237 0.290317 0.0740773 0.373688 0.044623 0.465428C0.0151687 0.557167 -5.16879e-07 0.655524 -1.31975e-07 0.754856L-1.79131e-06 10.2451C-2.21095e-06 10.3445 0.015167 10.4428 0.0446213 10.5346C0.0740755 10.6263 0.117235 10.7096 0.171641 10.7797C0.226048 10.8499 0.290622 10.9054 0.361664 10.9432C0.432706 10.981 0.508815 11.0003 0.585633 11Z" fill="#E2F163"/>
                  </Svg>
                </TouchableOpacity>
              )}
              <BlurView intensity={35} style={styles.iconSection}>
                <View style={styles.iconContainer}>
                  <NutritionIcon width={40.514} height={42.701} />
                </View>
                <Text style={styles.nutritionTitle}>{slide.title}</Text>
                <View style={styles.decorativeBar}>
                  <Svg width={68} height={4} viewBox="0 0 68 4" fill="none">
                    <Rect width="20" height="4" rx="2" fill="#896CFE" />
                    <Rect x="24" width="20" height="4" rx="2" fill="white" />
                    <Rect x="48" width="20" height="4" rx="2" fill="#896CFE" />
                  </Svg>
                </View>
              </BlurView>
              {onNext && (
                <TouchableOpacity 
                  style={styles.nextButtonWrapper} 
                  onPress={(e) => {
                    e.stopPropagation();
                    console.log('Next button pressed on screen 3');
                    onNext();
                  }}
                >
                  <BlurView intensity={35} style={styles.nextButton}>
                    <Text style={styles.nextButtonText}>Next</Text>
                  </BlurView>
                </TouchableOpacity>
              )}
            </View>
          </TouchableWithoutFeedback>
        ) : slide.showCommunity ? (
          <View style={styles.content}>
            <BlurView intensity={35} style={styles.iconSection}>
              <View style={styles.iconContainer}>
                <CommunityIcon width={63.5} height={42.73} />
              </View>
              <Text style={styles.communityTitle}>{slide.title}</Text>
              <View style={styles.decorativeBar}>
                <Svg width={68} height={4} viewBox="0 0 68 4" fill="none">
                  <Rect width="20" height="4" rx="2" fill="#896CFE" />
                  <Rect x="24" width="20" height="4" rx="2" fill="#896CFE" />
                  <Rect x="48" width="20" height="4" rx="2" fill="white" />
                </Svg>
              </View>
            </BlurView>
            {onNext && (
              <TouchableOpacity 
                style={styles.getStartedButtonWrapper} 
                onPress={(e) => {
                  e.stopPropagation();
                  console.log('Get Started button pressed on screen 4');
                  onNext();
                }}
              >
                <BlurView intensity={35} style={styles.getStartedButton}>
                  <Text style={styles.getStartedButtonText}>Get Started</Text>
                </BlurView>
              </TouchableOpacity>
            )}
          </View>
        ) : slide.showLogo ? (
          <TouchableWithoutFeedback onPress={handleTapToContinue}>
            <View style={styles.content}>
              <Animated.View 
                style={{
                  opacity: fadeAnim,
                  transform: [{ scale: scaleAnim }],
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text style={styles.welcomeText}>Welcome to</Text>
                <Logo width={182} height={85} style={styles.logo} />
                <Text style={styles.title}>
                  <Text style={styles.titleBold}>FIT</Text>
                  <Text style={styles.titleRegular}>BODY</Text>
                </Text>
              </Animated.View>
            </View>
          </TouchableWithoutFeedback>
        ) : (
          <View style={styles.content} pointerEvents="none">
            <Text style={styles.slideTitle}>{slide.title}</Text>
            <Text style={styles.slideDescription}>{slide.description}</Text>
          </View>
        )}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    height,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
  },
  overlayLight: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  skipButton: {
    position: 'absolute',
    top: 68,
    left: 315,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    zIndex: 10,
  },
  skipText: {
    color: '#E2F163',
    fontFamily: 'League Spartan',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 18,
  },
  iconSection: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B3A0FF',
    paddingVertical: 40,
    paddingHorizontal: 32,
    borderRadius: 0,
    width: 394,
    height: 169,
    overflow: 'hidden',
  },
  iconContainer: {
    marginBottom: 9,
  },
  iconTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 9,
    lineHeight: 32,
  },
  nutritionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 9,
    lineHeight: 28,
    textTransform: 'capitalize',
  },
  communityTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 9,
    lineHeight: 20,
    textTransform: 'capitalize',
  },
  decorativeBar: {
    width: 68,
    height: 4,
    marginBottom: 9,
  },
  welcomeText: {
    fontSize: 25,
    fontWeight: '700',
    color: '#E2F163',
    marginBottom: 16,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  logo: {
    marginBottom: 8,
  },
  title: {
    fontSize: 54,
    textAlign: 'center',
    letterSpacing: 0,
  },
  titleBold: {
    color: '#E2F163',
    fontWeight: '800',
    fontStyle: 'italic',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  titleRegular: {
    color: '#E2F163',
    fontWeight: '400',
    fontStyle: 'italic',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  slideTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: '#E2F163',
    marginBottom: 16,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  slideDescription: {
    fontSize: 16,
    fontWeight: '400',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 24,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  nextButtonWrapper: {
    marginTop: 24,
    alignItems: 'center',
  },
  nextButton: {
    width: 211,
    height: 44,
    borderRadius: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.09)',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    textTransform: 'capitalize',
  },
  getStartedButtonWrapper: {
    marginTop: 24,
    alignItems: 'center',
  },
  getStartedButton: {
    width: 211,
    height: 44,
    borderRadius: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.09)',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  getStartedButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
});
