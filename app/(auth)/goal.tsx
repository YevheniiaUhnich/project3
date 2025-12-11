import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { BlurView } from 'expo-blur';
import { ArrowBackIcon } from '../../src/shared/components/icons';

type GoalOption = 'lose-weight' | 'gain-weight' | 'muscle-mass' | 'shape-body' | 'others';

export default function GoalScreen() {
  const [selectedGoal, setSelectedGoal] = useState<GoalOption | null>(null);

  const handleBack = () => {
    router.back();
  };

  const handleContinue = () => {
    console.log('CONTINUE CLICKED, selectedGoal =', selectedGoal);
    if (selectedGoal) {
      console.log('Navigating to /activity-level...');
      try {
        router.push('/activity-level');
        console.log('Navigation command executed');
      } catch (error) {
        console.error('Navigation error:', error);
      }
    } else {
      console.log('No goal selected, navigation blocked');
    }
  };

  const goals = [
    { id: 'lose-weight' as GoalOption, label: 'Lose Weight' },
    { id: 'gain-weight' as GoalOption, label: 'Gain Weight' },
    { id: 'muscle-mass' as GoalOption, label: 'Muscle Mass Gain' },
    { id: 'shape-body' as GoalOption, label: 'Shape Body' },
    { id: 'others' as GoalOption, label: 'Others' },
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

      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Title */}
        <Text style={styles.title}>What Is Your Goal?</Text>

        {/* Description */}
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>

        {/* Purple Background Section */}
        <View style={styles.purpleSection} pointerEvents="box-none">
          {/* Goal Options */}
          <View style={styles.goalsContainer}>
            {goals.map((goal) => (
              <TouchableOpacity
                key={goal.id}
                style={[
                  styles.goalOption,
                  selectedGoal === goal.id && styles.goalOptionSelected,
                ]}
                onPress={() => {
                  console.log('Goal selected:', goal.id);
                  setSelectedGoal(goal.id);
                  console.log('selectedGoal should now be:', goal.id);
                }}
                activeOpacity={0.7}
              >
                <Text style={[
                  styles.goalLabel,
                  selectedGoal === goal.id && styles.goalLabelSelected,
                ]}>
                  {goal.label}
                </Text>
                <View style={[
                  styles.radioCircle,
                  selectedGoal === goal.id && styles.radioCircleSelected,
                ]}>
                  {selectedGoal === goal.id && (
                    <View style={styles.radioInner} />
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Continue Button */}
        <View style={styles.continueButtonContainer}>
          <BlurView intensity={7} style={styles.continueButtonBlur}>
            <TouchableOpacity
              style={styles.continueButton}
              onPress={handleContinue}
              activeOpacity={0.8}
              
            >
              <Text style={[
                styles.continueButtonText,
                !selectedGoal && styles.continueButtonTextDisabled,
              ]}>
                Continue
              </Text>
            </TouchableOpacity>
          </BlurView>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232323',
    // paddingHorizontal: 35,
    paddingTop: 60,
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
  scrollContent: {
    alignItems: 'center',
    paddingBottom: 40,
  },
  title: {
    fontSize: 25,
    fontFamily: 'Poppins',
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 28,
    textTransform: 'capitalize',
  },
  description: {
    fontSize: 14,
    fontFamily: 'League Spartan',
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'center',
    width: 323,
    marginBottom: 40,
    lineHeight: 14,
  },
  purpleSection: {
    width: 391,
    height: 450,
    backgroundColor: '#B3A0FF',
  
    paddingVertical: 40,
    paddingHorizontal: 34,
    marginBottom: 40,
   
  },
  goalsContainer: {
    gap: 22,
  },
  goalOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 36,
    paddingHorizontal: 10,
    paddingVertical: 10,
    height: 54,
    width: 323,
  },
  goalOptionSelected: {
    backgroundColor: '#E2F163',
  },
  goalLabel: {
    fontSize: 18,
    fontFamily: 'League Spartan',
    fontWeight: '400',
    color: '#232323',
    textTransform: 'capitalize',
   marginLeft: 30,
  },
  goalLabelSelected: {
    fontWeight: '600',
  },
  radioCircle: {
    width: 34,
    height: 34,
    borderRadius: 36,
    borderWidth: 3,
    borderColor: '#232323',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioCircleSelected: {
    borderColor: '#232323',
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#232323',
  },
  continueButtonContainer: {
    alignItems: 'center',
    marginTop: 0,
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
    // opacity: 0.5,
  },
});
