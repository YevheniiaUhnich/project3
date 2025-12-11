import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { BlurView } from 'expo-blur';
import { ArrowBackIcon } from '../src/shared/components/icons';

type ActivityLevel = 'beginner' | 'intermediate' | 'advance';

export default function ActivityLevelScreen() {
  const [selectedLevel, setSelectedLevel] = useState<ActivityLevel | null>(null);

  const handleBack = () => {
    router.back();
  };

  const handleContinue = () => {
    if (selectedLevel) {
      console.log('Continue pressed with activity level:', selectedLevel);
      router.push('/fill-profile');
    }
  };

  const levels = [
    { id: 'beginner' as ActivityLevel, label: 'Beginner' },
    { id: 'intermediate' as ActivityLevel, label: 'Intermediate' },
    { id: 'advance' as ActivityLevel, label: 'Advance' },
  ];

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={handleBack}
        activeOpacity={0.7}
      >
        <ArrowBackIcon width={6} height={11} />
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Physical Activity Level</Text>

      {/* Description */}
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>

      {/* Activity Level Options */}
      <View style={styles.levelsContainer}>
        {levels.map((level) => (
          <TouchableOpacity
            key={level.id}
            style={[
              styles.levelOption,
              selectedLevel === level.id && styles.levelOptionSelected,
            ]}
            onPress={() => setSelectedLevel(level.id)}
            activeOpacity={0.8}
          >
            <Text style={[
              styles.levelLabel,
              selectedLevel === level.id && styles.levelLabelSelected,
            ]}>
              {level.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Continue Button */}
      <View style={styles.continueButtonContainer}>
        <BlurView intensity={7} style={styles.continueButtonBlur}>
          <TouchableOpacity
            style={styles.continueButton}
            onPress={handleContinue}
            activeOpacity={0.8}
            disabled={!selectedLevel}
          >
            <Text style={[
              styles.continueButtonText,
              !selectedLevel && styles.continueButtonTextDisabled,
            ]}>
              Continue
            </Text>
          </TouchableOpacity>
        </BlurView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232323',
    paddingHorizontal: 35,
    paddingTop: 60,
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 34,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 10,
  },
  backText: {
    fontSize: 15,
    fontFamily: 'League Spartan',
    fontWeight: '600',
    color: '#E2F163',
    marginLeft: 8,
    textTransform: 'capitalize',
  },
  title: {
    fontSize: 25,
    fontFamily: 'Poppins',
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 68,
    marginBottom: 21,
    textTransform: 'capitalize',
  },
  description: {
    fontSize: 14,
    fontFamily: 'League Spartan',
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'center',
    width: 323,
    marginBottom: 80,
    lineHeight: 14,
  },
  levelsContainer: {
    width: 323,
    gap: 36,
    marginBottom: 80,
  },
  levelOption: {
    backgroundColor: '#FFFFFF',
    borderRadius: 38,
    paddingVertical: 18,
    paddingHorizontal: 12,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
  levelOptionSelected: {
    backgroundColor: '#E2F163',
  },
  levelLabel: {
    fontSize: 24,
    fontFamily: 'League Spartan',
    fontWeight: '500',
    color: '#896CFE',
    textAlign: 'center',
  },
  levelLabelSelected: {
    color: '#232323',
  },
  continueButtonContainer: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 40,
  },
  continueButtonBlur: {
    borderRadius: 100,
    overflow: 'hidden',
    borderWidth: 0.5,
    borderColor: '#FFFFFF',
  },
  continueButton: {
    paddingHorizontal: 40,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 178,
    height: 44,
  },
  continueButtonText: {
    fontSize: 18,
    fontFamily: 'Poppins',
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  continueButtonTextDisabled: {
    opacity: 0.5,
  },
});
