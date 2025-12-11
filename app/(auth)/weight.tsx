import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { BlurView } from 'expo-blur';
import { ArrowBackIcon, ArrowUpIndicator } from '../../src/shared/components/icons';

export default function WeightScreen() {
  const [selectedWeight, setSelectedWeight] = useState<number>(75);
  const [selectedUnit, setSelectedUnit] = useState<'KG' | 'LB'>('KG');

  const handleBack = () => {
    router.back();
  };

  const handleContinue = () => {
    console.log('Continue pressed with weight:', selectedWeight, selectedUnit);
    router.push('/(auth)/height');
  };

  // Generate weights array around selected weight
  const getVisibleWeights = () => {
    return [
      selectedWeight - 2,
      selectedWeight - 1,
      selectedWeight,
      selectedWeight + 1,
      selectedWeight + 2,
    ];
  };

  const visibleWeights = getVisibleWeights();

  // Generate tick marks for the ruler visualization
  const generateTickMarks = () => {
    const ticks = [];
    const totalTicks = 21; // Number of tick marks across the purple section
    const centerIndex = 10; // Middle tick (0-indexed)
    
    for (let i = 0; i < totalTicks; i++) {
      let height = 24; // Default small tick
      let isCenter = false;
      
      if (i === centerIndex) {
        height = 56; // Center tick (longest)
        isCenter = true;
      } else if (i === centerIndex - 5 || i === centerIndex + 5) {
        height = 46; // Adjacent major ticks
      }
      
      // Calculate position
      const position = (i / (totalTicks - 1)) * 100; // Percentage position
      
      ticks.push({
        key: `tick-${i}`,
        height,
        position,
        isCenter,
      });
    }
    
    return ticks;
  };

  const tickMarks = generateTickMarks();

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
         
            <ArrowBackIcon />
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>What Is Your Weight?</Text>

      {/* Description */}
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>

      {/* Unit Toggle (KG/LB) */}
      <View style={styles.unitToggleContainer}>
        <TouchableOpacity
          style={[
            styles.unitButton,
            selectedUnit === 'KG' && styles.unitButtonActive,
          ]}
          onPress={() => setSelectedUnit('KG')}
        >
          <Text style={[
            styles.unitButtonText,
            selectedUnit === 'KG' && styles.unitButtonTextActive,
          ]}>
            KG
          </Text>
        </TouchableOpacity>

        <View style={styles.unitDivider} />

        <TouchableOpacity
          style={[
            styles.unitButton,
            selectedUnit === 'LB' && styles.unitButtonActive,
          ]}
          onPress={() => setSelectedUnit('LB')}
        >
          <Text style={[
            styles.unitButtonText,
            selectedUnit === 'LB' && styles.unitButtonTextActive,
          ]}>
            LB
          </Text>
        </TouchableOpacity>
      </View>

      {/* Weight Picker Section */}
      <View style={styles.pickerSection}>
        {/* Weight Numbers Row */}
        <View style={styles.weightsRow}>
          {visibleWeights.map((weight, index) => {
            const isCenter = index === 2;
            const isAdjacent = index === 1 || index === 3;
            
            let weightStyle = styles.weightItemEdge;
            if (isCenter) weightStyle = styles.weightItemCenter;
            else if (isAdjacent) weightStyle = styles.weightItemAdjacent;

            return (
              <TouchableOpacity
                key={`weight-${weight}`}
                style={styles.weightTouchable}
                onPress={() => setSelectedWeight(weight)}
                activeOpacity={0.7}
              >
                <Text style={weightStyle}>
                  {weight}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

      

        {/* Purple Section with Scale Marks */}
        <View style={styles.purpleSection}>
          {/* White Divider Lines extending beyond */}
          <View style={[styles.dividerLine, styles.dividerLineLeft]} />
          <View style={[styles.dividerLine, styles.dividerLineRight]} />

          {/* Tick Marks */}
          <View style={styles.tickMarksContainer}>
            {tickMarks.map((tick) => (
              <View
                key={tick.key}
                style={[
                  styles.tickMark,
                  {
                    height: tick.height,
                    left: `${tick.position}%`,
                    backgroundColor: tick.isCenter ? '#E2F163' : '#FFFFFF',
                  },
                ]}
              />
            ))}
          </View>
        </View>
  {/* Arrow Indicator */}
        <View style={styles.arrowContainer}>
          <ArrowUpIndicator fill="#E2F163" />
        </View>

        {/* Large Weight Display */}
        <View style={styles.largeWeightContainer}>
          <Text style={styles.largeWeight}>{selectedWeight}</Text>
          <Text style={styles.unitLabel}>{selectedUnit.toLowerCase()}</Text>
        </View>
      </View>

      {/* Continue Button */}
      <View style={styles.continueButtonContainer}>
        <BlurView intensity={7} style={styles.continueButtonBlur}>
          <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
            <Text style={styles.continueButtonText}>Continue</Text>
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
    paddingHorizontal: 24,
    paddingTop: 60,
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 70,
    left: 24,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 10,
  },
  backArrow: {
    fontSize: 24,
    color: '#E2F163',
    marginRight: 4,
  },
  backText: {
    fontSize: 16,
    color: '#E2F163',
    fontFamily: 'Poppins-Bold',
     marginLeft: 8,
  },
  title: {
    fontSize: 25,
    fontFamily: 'Poppins-Bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 63,
    marginBottom: 12,
    fontWeight: '700',
  },
  description: {
    fontSize: 14,
    fontFamily: 'League Spartan',
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'center',
    width: 323,
    marginTop: 21,
    marginBottom: 40,
    lineHeight: 14,
  },
  unitToggleContainer: {
    width: 323,
    height: 58,
    backgroundColor: '#E2F163',
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 40,
    paddingHorizontal: 40,
  },
  unitButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  unitButtonActive: {
    // Active state handled by text color
  },
  unitButtonText: {
    fontSize: 20,
    fontFamily: 'Poppins',
    fontWeight: '700',
    color: '#232323',
    opacity: 0.5,
  },
  unitButtonTextActive: {
    opacity: 1,
  },
  unitDivider: {
    width: 1,
    height: 40,
    backgroundColor: '#232323',
  },
  pickerSection: {
    width: 393,
    height: 350,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
weightsRow: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between', 
  width: 391,
  height: 50,
},
weightTouchable: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
},
weightItemCenter: {
  fontSize: 40,
  fontFamily: 'Poppins',
  fontWeight: '700',
  color: '#FFFFFF',
  opacity: 1,
  textAlign: 'center',
},
weightItemAdjacent: {
  fontSize: 35,
  fontFamily: 'Poppins',
  fontWeight: '700',
  color: '#FFFFFF',
  opacity: 0.65,
  textAlign: 'center',
},
weightItemEdge: {
  fontSize: 25,
  fontFamily: 'Poppins',
  fontWeight: '700',
  color: '#FFFFFF',
  opacity: 0.45,
  textAlign: 'center',
},
  arrowContainer: {
    width: 46,
    height: 32,
    marginBottom: 8,
  },
  purpleSection: {
    width: 391,
    height: 87,
    backgroundColor: '#B3A0FF',
    borderRadius: 8,
    position: 'relative',
    marginBottom: 24,
    overflow: 'visible',
  },
  dividerLine: {
    position: 'absolute',
    width: 1,
    backgroundColor: '#FFFFFF',
    top: -2,
    bottom: -2,
  },
  dividerLineLeft: {
    left: 0,
  },
  dividerLineRight: {
    right: 0,
  },
  tickMarksContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tickMark: {
    position: 'absolute',
    width: 1,
    transform: [{ translateX: -0.5 }],
  },
  largeWeightContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    alignSelf: 'center',
    justifyContent: 'center',
    marginLeft: 40,
  },
  largeWeight: {
    fontSize: 64,
    fontFamily: 'Poppins',
    fontWeight: '700',
    color: '#FFFFFF',
    marginRight: 8,
    textAlign: 'center',
  },
  unitLabel: {
    fontSize: 20,
    fontFamily: 'Poppins',
    fontWeight: '700',
    color: '#232323',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  continueButtonContainer: {
    position: 'absolute',
    bottom: 60,
    width: 178.56,
    height: 44,
    borderRadius: 50,
    overflow: 'hidden',
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    // Android shadow
    elevation: 4,
  },
  continueButtonBlur: {
    flex: 1,
    borderColor: '#FFFFFF',
    overflow: 'hidden',
          width: 178.56,
        height: 44,
        borderRadius: 100,
        borderWidth: 0.5,
        backgroundColor: 'rgba(255, 255, 255, 0.09)',
        alignSelf: 'center',
        margin: 0,
  },
  continueButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  continueButtonText: {
    fontSize: 18,
    fontFamily: 'Poppins',
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
});
